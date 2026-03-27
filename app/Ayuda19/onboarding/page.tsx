import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { ProfileForm } from '@/components/ayuda19/profile-form'

export default async function OnboardingPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/Ayuda19')

  const { data: profile } = await supabase
    .from('students_profiles')
    .select('legajo, carrera')
    .eq('id', user.id)
    .single()

  if (profile?.legajo && profile?.carrera) {
    redirect('/Ayuda19/dashboard')
  }

  return (
    <div className="min-h-screen bg-secondary-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6 md:p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold text-secondary-800 tracking-tight mb-2">Completá tu Perfil</h1>
        <p className="text-secondary-600 mb-8">Para poder utilizar las herramientas de AYUDA19 necesitamos un par de datos académicos tuyos.</p>
        <ProfileForm />
      </div>
    </div>
  )
}
