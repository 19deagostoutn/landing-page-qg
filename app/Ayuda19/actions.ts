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

  const profileData = {
    id: user.id,
    first_name: formData.get('firstName') as string,
    last_name: formData.get('lastName') as string,
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
