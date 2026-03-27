import { chromium } from 'playwright'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

type HistoriaRegistro = {
  tipo: string
  estado: string
  detalle: string
}

type HistoriaMateria = {
  materia: string
  codigo: string | null
  registros: HistoriaRegistro[]
  estados: {
    promocion: string[]
    regularidad: string[]
    examen: string[]
    equivalenciaRegularidad: string[]
    equivalenciaTotal: string[]
  }
}

export type HistoriaAcademicaResult = {
  alumno: string | null
  propuesta: string | null
  legajo: string | null
  materias: HistoriaMateria[]
  html: string
}

type ObtenerHistoriaAcademicaOptions = {
  debug?: boolean
}

const SIU_ACCESS_URL = 'https://guarani.frba.utn.edu.ar/autogestion/grado/acceso'
const SIU_HISTORIA_URL = 'https://guarani.frba.utn.edu.ar/autogestion/grado/historia_academica'

function parseMateriaTitulo(rawTitle: string): { materia: string; codigo: string | null } {
  const title = rawTitle.trim()
  const match = title.match(/^(.*)\s+\(([^)]+)\)$/)
  if (!match) {
    return { materia: title, codigo: null }
  }

  return {
    materia: match[1].trim(),
    codigo: match[2].trim(),
  }
}

function unique(values: string[]): string[] {
  return [...new Set(values.filter(Boolean))]
}

function parseEstadoBase(detalle: string): string {
  const nota = detalle.match(/\b(\d{1,2})\s*\(/)?.[1]
  if (nota) return nota

  const parentesis = detalle.match(/\((Aprobada|No aprobada)\)/i)?.[1]
  if (parentesis) return parentesis

  const estado = detalle.match(/\b(Aprobado|Aprobada|No aprobada|Reprobado|Reprobada|Ausente)\b/i)?.[1]
  if (estado) return estado

  if (/En curso/i.test(detalle)) return 'En curso'
  return detalle
}

export async function obtenerHistoriaAcademica(
  username: string,
  password: string,
  options: ObtenerHistoriaAcademicaOptions = {}
): Promise<HistoriaAcademicaResult> {
  const debug = Boolean(options.debug)
  const browser = await chromium.launch({
    headless: !debug,
    slowMo: debug ? 250 : 0,
    args: ['--disable-dev-shm-usage', '--no-sandbox'],
  })

  try {
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto(SIU_ACCESS_URL, { waitUntil: 'domcontentloaded', timeout: 60000 })

    const userInput = page
      .locator('input[name*="usuario" i], input[name*="user" i], input[type="text"]')
      .first()
    const passInput = page.locator('input[type="password"]').first()

    await userInput.waitFor({ state: 'visible', timeout: 20000 })
    await passInput.waitFor({ state: 'visible', timeout: 20000 })

    await userInput.fill(username)
    await passInput.fill(password)

    const submitButton = page
      .locator('button[type="submit"], input[type="submit"], .btn-primary, .btn-login')
      .first()

    await submitButton.click()
    await page.waitForLoadState('domcontentloaded', { timeout: 30000 })

    await page.goto(SIU_HISTORIA_URL, { waitUntil: 'domcontentloaded', timeout: 60000 })
    await page.locator('#info_historia, #listado').first().waitFor({ timeout: 30000 })

    const historiaCompletaLink = page.locator('#listado a[consulta="todo"]').first()
    if (await historiaCompletaLink.count()) {
      await historiaCompletaLink.click()
      await page.waitForLoadState('domcontentloaded', { timeout: 30000 })
    }

    await page.waitForFunction(
      () => {
        const items = document.querySelectorAll('#listado .catedras')
        return items.length > 0
      },
      { timeout: 30000 }
    )

    const extracted = await page.evaluate(() => {
      const textFrom = (selector: string): string | null => {
        const el = document.querySelector(selector)
        return el ? el.textContent?.trim() ?? null : null
      }

      const alumnoRaw =
        textFrom('.user-navbar .dropdown-toggle') ?? textFrom('.user-navbar .dropdown a')
      const alumno = alumnoRaw
        ?.replace(/\s+/g, ' ')
        .replace(/^.*icon-user/i, '')
        .replace(/Perfil: Alumno/i, '')
        .replace(/\s*$/, '')
        .trim() ?? null

      const propuesta = textFrom('.control-label-carrera:not(.legajo-numero)')
      const legajo = textFrom('.control-label-carrera.legajo-numero')

      const materias = Array.from(document.querySelectorAll('#listado .catedras')).map((bloque) => {
        const titulo = bloque.querySelector('h3.titulo-corte')?.textContent?.trim() ?? ''
        const registros = Array.from(bloque.querySelectorAll('.catedra .catedra_nombre span')).map((item) => {
          const strong = item.querySelector('strong')?.textContent?.trim() ?? 'Sin tipo'
          const detalle = item.textContent?.replace(/\s+/g, ' ').trim() ?? ''
          const className = item.getAttribute('class')?.trim() || 'Sin estado'

          return {
            tipo: strong,
            estado: className,
            detalle,
          }
        })

        return { titulo, registros }
      })

      const html = (document.querySelector('#info_historia') as HTMLElement | null)?.outerHTML ?? ''

      return { alumno, propuesta, legajo, materias, html }
    })

    if (!extracted.materias.length) {
      throw new Error('No se encontraron materias en historia academica. Verifica credenciales.')
    }

    return {
      alumno: extracted.alumno,
      propuesta: extracted.propuesta,
      legajo: extracted.legajo,
      materias: extracted.materias.map((m) => {
        const parsed = parseMateriaTitulo(m.titulo)
        const estados = {
          promocion: [] as string[],
          regularidad: [] as string[],
          examen: [] as string[],
          equivalenciaRegularidad: [] as string[],
          equivalenciaTotal: [] as string[],
        }

        for (const registro of m.registros) {
          const tipo = registro.tipo.toLowerCase()
          const estado = parseEstadoBase(registro.detalle)

          if (tipo.includes('promoci')) {
            estados.promocion.push(estado)
          } else if (tipo.includes('regularidad')) {
            estados.regularidad.push(estado)
          } else if (tipo.includes('examen')) {
            estados.examen.push(estado)
          } else if (tipo.includes('equivalencia regularidad')) {
            estados.equivalenciaRegularidad.push(estado)
          } else if (tipo.includes('equivalencia total')) {
            estados.equivalenciaTotal.push(estado)
          }
        }

        return {
          materia: parsed.materia,
          codigo: parsed.codigo,
          registros: m.registros,
          estados: {
            promocion: unique(estados.promocion),
            regularidad: unique(estados.regularidad),
            examen: unique(estados.examen),
            equivalenciaRegularidad: unique(estados.equivalenciaRegularidad),
            equivalenciaTotal: unique(estados.equivalenciaTotal),
          },
        }
      }),
      html: extracted.html,
    }
  } catch (error) {
    const currentUrl = page.url()
    const timestamp = Date.now()
    const debugDir = path.join(process.cwd(), '.tmp', 'siu-debug')
    await mkdir(debugDir, { recursive: true })
    const screenshotPath = path.join(debugDir, `siu-error-${timestamp}.png`)
    const htmlPath = path.join(debugDir, `siu-error-${timestamp}.html`)

    try {
      await page.screenshot({ path: screenshotPath, fullPage: true })
      const html = await page.content()
      await writeFile(htmlPath, html, 'utf-8')
    } catch {
      // Ignore capture errors and continue throwing original context.
    }

    const baseMessage =
      error instanceof Error ? error.message : 'Fallo inesperado durante el scraping.'
    throw new Error(
      `${baseMessage} URL actual: ${currentUrl}. Debug: ${screenshotPath} | ${htmlPath}`
    )
  } finally {
    await browser.close()
  }
}
