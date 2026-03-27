'use client'

import { FormEvent, useMemo, useState } from 'react'
import { ExternalLink, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SIU_GUARANI_URL = 'https://guarani.frba.utn.edu.ar/autogestion/grado/acceso'

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

type HistoriaResponse = {
  alumno: string | null
  propuesta: string | null
  legajo: string | null
  materias: HistoriaMateria[]
  html: string
}

export function SiuGuaraniTab() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [debugMode, setDebugMode] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState<HistoriaResponse | null>(null)

  const materiasCount = useMemo(() => data?.materias.length ?? 0, [data])
  const mostrar = (items: string[]) => (items.length ? items.join(' | ') : '-')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setData(null)

    try {
      const res = await fetch('/api/siu/historia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, debug: debugMode }),
      })

      const json = await res.json()
      if (!res.ok) {
        throw new Error(json?.error || 'No se pudo consultar SIU Guarani.')
      }

      setData(json as HistoriaResponse)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full space-y-4">
      <h2 className="text-xl font-bold text-secondary-800">SIU Guarani</h2>
      <p className="text-sm text-secondary-600">
        Ingresa tus credenciales para extraer automaticamente la historia academica.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-xl border border-secondary-200 bg-white p-4 md:p-6"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="siu-username" className="text-sm font-medium text-secondary-700">
              Usuario SIU
            </label>
            <input
              id="siu-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              placeholder="Tu usuario"
              className="flex h-10 w-full rounded-md border border-secondary-300 bg-white px-3 py-2 text-sm placeholder:text-secondary-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="siu-password" className="text-sm font-medium text-secondary-700">
              Contrasena SIU
            </label>
            <input
              id="siu-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              placeholder="********"
              className="flex h-10 w-full rounded-md border border-secondary-300 bg-white px-3 py-2 text-sm placeholder:text-secondary-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            type="submit"
            disabled={loading}
            className="bg-primary-500 font-semibold text-secondary-800 hover:bg-primary-600"
          >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Obtener historia academica
          </Button>

          <a
            href={SIU_GUARANI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-secondary-300 px-3 py-2 text-sm font-medium text-secondary-700 transition-colors hover:bg-secondary-50"
          >
            Abrir SIU
            <ExternalLink size={14} />
          </a>
        </div>

        <label className="inline-flex items-center gap-2 text-sm text-secondary-700">
          <input
            type="checkbox"
            checked={debugMode}
            onChange={(e) => setDebugMode(e.target.checked)}
            className="h-4 w-4 rounded border-secondary-300"
          />
          Modo debug (abre una ventana del navegador para ver el scraper)
        </label>

        {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
      </form>

      {data ? (
        <div className="space-y-4 rounded-xl border border-secondary-200 bg-white p-4 md:p-6">
          <div className="grid grid-cols-1 gap-2 text-sm text-secondary-700 md:grid-cols-3">
            <div>
              <strong>Alumno:</strong> {data.alumno ?? 'N/D'}
            </div>
            <div>
              <strong>Propuesta:</strong> {data.propuesta ?? 'N/D'}
            </div>
            <div>
              <strong>Legajo:</strong> {data.legajo ?? 'N/D'}
            </div>
          </div>

          <p className="text-sm text-secondary-600">
            Se encontraron {materiasCount} materias en la historia academica.
          </p>

          <div className="max-h-[420px] overflow-auto rounded-lg border border-secondary-200">
            <table className="w-full text-sm">
              <thead className="bg-secondary-50 text-secondary-700">
                <tr>
                  <th className="px-3 py-2 text-left">Materia</th>
                  <th className="px-3 py-2 text-left">Codigo</th>
                  <th className="px-3 py-2 text-left">Promocion (Nota)</th>
                  <th className="px-3 py-2 text-left">Regularidad</th>
                  <th className="px-3 py-2 text-left">Examen</th>
                  <th className="px-3 py-2 text-left">Equivalencia Regularidad</th>
                  <th className="px-3 py-2 text-left">Equivalencia Total</th>
                </tr>
              </thead>
              <tbody>
                {data.materias.map((materia) => (
                  <tr
                    key={`${materia.materia}-${materia.codigo ?? 'sin-codigo'}`}
                    className="border-t border-secondary-200"
                  >
                    <td className="px-3 py-2">{materia.materia}</td>
                    <td className="px-3 py-2">{materia.codigo ?? '-'}</td>
                    <td className="px-3 py-2">{mostrar(materia.estados.promocion)}</td>
                    <td className="px-3 py-2">{mostrar(materia.estados.regularidad)}</td>
                    <td className="px-3 py-2">{mostrar(materia.estados.examen)}</td>
                    <td className="px-3 py-2">{mostrar(materia.estados.equivalenciaRegularidad)}</td>
                    <td className="px-3 py-2">{mostrar(materia.estados.equivalenciaTotal)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-secondary-800">
              Estructura HTML extraida (seccion historia academica)
            </h3>
            <textarea
              readOnly
              value={data.html}
              className="h-52 w-full rounded-md border border-secondary-300 bg-secondary-50 p-3 text-xs text-secondary-700"
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}
