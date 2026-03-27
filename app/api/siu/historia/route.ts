import { NextResponse } from 'next/server'
import { obtenerHistoriaAcademica } from '@/lib/siu/scraper'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type Payload = {
  username?: string
  password?: string
  debug?: boolean
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Payload
    const username = body.username?.trim()
    const password = body.password?.trim()

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Usuario y contraseña son obligatorios.' },
        { status: 400 }
      )
    }

    const historia = await obtenerHistoriaAcademica(username, password, {
      debug: Boolean(body.debug),
    })
    return NextResponse.json(historia)
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'No se pudo obtener la historia académica desde SIU Guaraní.'

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
