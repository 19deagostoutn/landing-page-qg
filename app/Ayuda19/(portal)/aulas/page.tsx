import { SiuGuaraniTab } from '@/components/ayuda19/siu-guarani-tab'

export default function AulasPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-secondary-800 tracking-tight">Sistemas UTN</h1>
        <p className="text-secondary-600">Accesos rápidos a los portales de gestión académica.</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6 md:p-8">
        <SiuGuaraniTab />
      </div>
    </div>
  )
}
