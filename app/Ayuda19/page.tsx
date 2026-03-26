import { LoginButton } from '@/components/ayuda19/login-button'
import { AlertCircle } from 'lucide-react'

export default function Ayuda19Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const error = searchParams.error

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-100 w-full p-4 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-800">
          AYUDA19: Tu plan bajo control
        </h1>
        <p className="text-lg text-secondary-700">
          Un espacio diseñado exclusivamente para estudiantes de la UTN FRBA. Iniciá sesión con tu mail institucional (@frba.utn.edu.ar) para armar tu perfil, organizar tus materias y potenciar tu cursada.
        </p>
      </div>

      {error === 'unauthorized_domain' && (
        <div className="bg-red-50 text-red-700 p-4 rounded-md border border-red-200 flex items-center max-w-md w-full gap-3 shadow-sm">
          <AlertCircle className="w-6 h-6 shrink-0" />
          <p className="text-sm font-medium">
            Error: Solo se permiten correos institucionales terminados en @frba.utn.edu.ar
          </p>
        </div>
      )}

      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-secondary-200 w-full max-w-md flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-secondary-800 mb-6 text-center">
          Ingresar a la Plataforma
        </h2>
        <LoginButton />
        <p className="text-xs text-secondary-500 mt-4 text-center">
          Al ingresar, vas a poder gestionar tu avance en la carrera y utilizar las herramientas que creamos para vos.
        </p>
      </div>
    </div>
  )
}
