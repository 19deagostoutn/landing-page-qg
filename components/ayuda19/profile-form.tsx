'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { updateProfile } from '@/app/Ayuda19/actions'
import { createClient } from '@/lib/supabase/client'
import { Loader2 } from 'lucide-react'

export function ProfileForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [message, setMessage] = useState('')
  const [profile, setProfile] = useState<any>(null)
  
  const supabase = createClient()

  useEffect(() => {
    async function loadProfile() {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { data } = await supabase
          .from('students_profiles')
          .select('*')
          .eq('id', user.id)
          .single()
        if (data) setProfile(data)
      }
      setIsFetching(false)
    }
    loadProfile()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')
    const formData = new FormData(e.currentTarget)
    const result = await updateProfile(formData)
    
    if (result?.error) {
      setMessage('Hubo un error al guardar.')
    } else {
      setMessage('Tus datos se guardaron correctamente.')
    }
    setIsLoading(false)
  }

  if (isFetching) {
    return <div className="flex justify-center p-8"><Loader2 className="animate-spin text-primary-500" /></div>
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium text-secondary-700">Nombre</label>
          <input
            id="firstName"
            name="firstName"
            required
            defaultValue={profile?.first_name || ''}
            className="flex h-10 w-full rounded-md border border-secondary-300 bg-white px-3 py-2 text-sm placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium text-secondary-700">Apellido</label>
          <input
            id="lastName"
            name="lastName"
            required
            defaultValue={profile?.last_name || ''}
            className="flex h-10 w-full rounded-md border border-secondary-300 bg-white px-3 py-2 text-sm placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="legajo" className="text-sm font-medium text-secondary-700">Legajo</label>
          <input
            id="legajo"
            name="legajo"
            required
            defaultValue={profile?.legajo || ''}
            className="flex h-10 w-full rounded-md border border-secondary-300 bg-white px-3 py-2 text-sm placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="carrera" className="text-sm font-medium text-secondary-700">Carrera</label>
          <select
            id="carrera"
            name="carrera"
            required
            defaultValue={profile?.carrera || ''}
            className="flex h-10 w-full rounded-md border border-secondary-300 bg-white px-3 py-2 text-sm text-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
          >
            <option value="" disabled>Seleccioná tu carrera...</option>
            <option value="Civil">Ingeniería Civil</option>
            <option value="Química">Ingeniería Química</option>
            <option value="Industrial">Ingeniería Industrial</option>
            <option value="Mecánica">Ingeniería Mecánica</option>
            <option value="Naval">Ingeniería Naval</option>
            <option value="Electrónica">Ingeniería Electrónica</option>
            <option value="Eléctrica">Ingeniería Eléctrica</option>
            <option value="Textil">Ingeniería Textil</option>
          </select>
        </div>
      </div>

      <div className="pt-4 flex items-center justify-between">
        <span className={`text-sm ${message.includes('error') ? 'text-red-600' : 'text-green-600'} font-medium`}>
          {message}
        </span>
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-primary-500 text-secondary-800 hover:bg-primary-600 font-semibold min-w-32"
        >
          {isLoading ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : null}
          Guardar Cambios
        </Button>
      </div>
    </form>
  )
}
