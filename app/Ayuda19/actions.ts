'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateProfile(formData: FormData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('Not authenticated')
  }

  const metadata = user.user_metadata || {}
  const fullName = metadata.full_name || metadata.name || metadata.given_name || ''
  const email = user.email || ''

  const profileData = {
    id: user.id,
    full_name: fullName,
    email: email,
    legajo: formData.get('legajo') as string,
    carrera: formData.get('carrera') as string,
    updated_at: new Date().toISOString(),
  }

  const { error } = await supabase
    .from('students_profiles')
    .upsert(profileData)

  if (error) {
    console.error('Error updating profile:', error)
    return { error: 'No se pudo actualizar el perfil.' }
  }

  revalidatePath('/Ayuda19/dashboard')
  return { success: true }
}
