import { BookOpen } from 'lucide-react'
import { MaterialClient } from '@/components/ayuda19/material-client'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function MaterialEstudioPage() {
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

  const carrera = profile?.carrera || "Civil"

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-secondary-800 tracking-tight flex items-center gap-3">
          <BookOpen className="text-primary-500 w-8 h-8" />
          Material de Estudio
        </h1>
        <p className="text-secondary-600">Accedé a la biblioteca colaborativa en Google Drive para prepararte mejor.</p>
      </div>

      <MaterialClient carrera={carrera} />
    </div>
  )
}
