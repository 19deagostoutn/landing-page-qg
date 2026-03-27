import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Do not run code between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: DO NOT REMOVE auth.getUser()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Revisa si la ruta es de la app interna de ayudda19 (pero no la raiz del login ni endpoints auth)
  const isInternalAyuda19Route = request.nextUrl.pathname.startsWith('/Ayuda19/') && 
                                 !request.nextUrl.pathname.startsWith('/Ayuda19/auth') &&
                                 request.nextUrl.pathname !== '/Ayuda19'

  if (!user && isInternalAyuda19Route) {
    // no user, potentially respond by redirecting the user to the login page
    const url = request.nextUrl.clone()
    url.pathname = '/Ayuda19'
    return NextResponse.redirect(url)
  }
  
  // Si hay usuario y quiere acceder a herramientas, verificamos el dominio
  if (user && isInternalAyuda19Route) {
      if (!user.email?.endsWith('@frba.utn.edu.ar')) {
          // Destruir sesion y mandar a unauthorized si el email no es @frba.utn.edu.ar
          await supabase.auth.signOut()
          const url = request.nextUrl.clone()
          url.pathname = '/Ayuda19'
          url.searchParams.set('error', 'unauthorized_domain')
          return NextResponse.redirect(url)
      }
  }

  return supabaseResponse
}
