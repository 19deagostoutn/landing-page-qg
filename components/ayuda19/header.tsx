"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, LogOut, User } from "lucide-react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"

export function Ayuda19Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && !isHovered) {
          setIsVisible(false)
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
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-1 md:flex-initial">
            <Link href="/">
              <img src="/logo-19-agosto.png" alt="19 de Agosto" className="h-8 md:h-12 w-auto flex-shrink-0" />
            </Link>
            <div className="text-primary font-bold text-sm md:text-xl truncate">19 de Agosto</div>
            <div className="text-secondary-600 font-semibold text-sm md:text-lg ml-2 border-l border-secondary-300 pl-2">
              AYUDA19
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-secondary-600 bg-secondary-100 px-3 py-1 rounded-full text-sm font-medium">
                <User size={16} /> {/* Decorative placeholder */}
                <span>Portal Estudiante</span>
            </div>
            <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="text-red-600 border-red-200 hover:bg-red-50 gap-2"
            >
                <LogOut size={16} /> Cerrar Sesión
            </Button>
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
              <div className="flex items-center space-x-2 text-secondary-600 px-2 py-2 text-sm font-medium">
                <User size={16} />
                <span>Portal Estudiante</span>
              </div>
              <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="w-full text-left text-red-600 border-red-200 justify-start hover:bg-red-50 gap-2"
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
