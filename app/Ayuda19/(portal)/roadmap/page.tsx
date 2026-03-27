import { Roadmap } from '@/components/ayuda19/roadmap'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function RoadmapPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/Ayuda19')
  }

  const { data: profile } = await supabase
    .from('students_profiles')
    .select('carrera')
    .eq('id', user.id)
    .single()

  // Default to Civil if something goes wrong, though layout should catch empty profiles
  const carrera = profile?.carrera || "Civil"

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-secondary-800 tracking-tight">Seguimiento de Plan</h1>
        <p className="text-secondary-600">Marcá las materias que ya aprobaste para planificar tu futuro.</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6 md:p-8 overflow-hidden">
        <Roadmap carrera={carrera} />
      </div>
    </div>
  )
}
