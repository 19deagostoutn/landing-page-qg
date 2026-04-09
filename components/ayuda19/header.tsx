"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, LogOut, User } from "lucide-react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"

export function Ayuda19Header({ onToggleSidebar }: { onToggleSidebar?: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [userName, setUserName] = useState<string>("Portal Estudiante")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user) {
        const meta = data.user.user_metadata
        setUserName(meta?.given_name || (meta?.full_name ? meta.full_name.split(' ')[0] : "Estudiante"))
      }
    })
  }, [])

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && !isHovered) {
          setIsVisible(false) // Scroll down hides it
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true) // Scroll up shows it
        }
      } else {
        setIsVisible(true)
      }
      lastScrollY = currentScrollY
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 100) {
        setIsHovered(true)
        setIsVisible(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isHovered])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="w-full px-4 md:px-5 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-1 md:flex-initial">
            {onToggleSidebar && (
              <button
                onClick={onToggleSidebar}
                className="hidden md:flex p-2 hover:bg-secondary-100 rounded-lg text-secondary-600 focus:outline-none transition-colors mr-2"
                title="Alternar panel"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}
            <Link href="/">
              <img src="/logo-19-agosto.png" alt="19 de Agosto" className="h-8 md:h-12 w-auto flex-shrink-0" />
            </Link>
            <div className="text-secondary-600 font-semibold text-sm md:text-lg ml-2 border-l border-secondary-300 pl-3">
              AYUDA19
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 text-secondary-700 hover:text-secondary-900 bg-secondary-50 hover:bg-secondary-100 transition-colors px-4 py-2 rounded-full text-sm font-medium border border-secondary-200 cursor-pointer focus:outline-none"
              >
                <User size={16} className="text-primary-500" />
                <span>{userName}</span>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border border-secondary-200 flex flex-col z-50 overflow-hidden">
                  <a
                    href="/Ayuda19/perfil"
                    className="px-4 py-3 hover:bg-secondary-50 text-secondary-700 text-sm font-medium flex items-center gap-2 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <User size={16} />
                    Mi Perfil
                  </a>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-3 hover:bg-red-50 text-red-600 w-full text-left text-sm font-medium flex items-center gap-2 transition-colors border-t border-secondary-100"
                  >
                    <LogOut size={16} />
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2 text-secondary-700 px-3 py-2 text-sm font-medium bg-secondary-50 rounded-lg">
                <User size={16} className="text-primary-500" />
                <span>{userName}</span>
              </div>
              <a
                href="/Ayuda19/perfil"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center text-secondary-700 px-3 py-2 text-sm font-medium bg-white rounded-lg border border-secondary-200 shadow-sm transition-colors hover:bg-secondary-50"
              >
                <User size={16} className="mr-2" /> Mi Perfil
              </a>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="w-full text-left text-red-600 border-red-200 justify-start hover:bg-red-50 gap-2 bg-white mt-2"
              >
                <LogOut size={16} /> Cerrar Sesión
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
