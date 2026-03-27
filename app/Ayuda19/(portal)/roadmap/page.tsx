import { RoadmapCivil } from '@/components/ayuda19/roadmap-civil'

export default function RoadmapPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-secondary-800 tracking-tight">Seguimiento de Plan</h1>
        <p className="text-secondary-600">Marcá las materias que ya aprobaste para planificar tu futuro.</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6 md:p-8 overflow-hidden">
        <RoadmapCivil />
      </div>
    </div>
  )
}
