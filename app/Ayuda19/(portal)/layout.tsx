import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { PortalLayoutWrapper } from '@/components/ayuda19/portal-layout-wrapper'

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/Ayuda19')

  const { data: profile } = await supabase
    .from('students_profiles')
    .select('legajo, carrera')
    .eq('id', user.id)
    .single()

  if (!profile?.legajo || !profile?.carrera) {
    redirect('/Ayuda19/onboarding')
  }

  return (
    <PortalLayoutWrapper>
      {children}
    </PortalLayoutWrapper>
  )
}
