'use client'

import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

export function LoginButton() {
  const [isLoading, setIsLoading] = useState(false)
  const supabase = createClient()

  const handleLogin = async () => {
    setIsLoading(true)
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/Ayuda19/auth/callback`,
        // Prioritize @frba.utn.edu.ar if possible
        queryParams: {
          hd: 'frba.utn.edu.ar',
        },
      },
    })
  }

  return (
    <Button
      onClick={handleLogin}
      disabled={isLoading}
      size="lg"
      className="bg-primary-500 text-secondary-800 hover:bg-primary-600 font-semibold w-full sm:w-auto flex items-center gap-2"
    >
      {isLoading ? <Loader2 className="animate-spin" /> : null}
      Ingresar con cuenta Institucional
    </Button>
  )
}
