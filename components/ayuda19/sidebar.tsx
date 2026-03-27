'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { PORTAL_NAV_ITEMS } from '@/components/ayuda19/nav-config'
import { Button } from '@/components/ui/button'



export function Ayuda19Sidebar({ isCollapsed: externalIsCollapsed = false }: { isCollapsed?: boolean }) {
  const pathname = usePathname()
  const [isHovered, setIsHovered] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  // Effectively collapsed ONLY if it's set as collapsed AND not being hovered locally
  const effectiveCollapsed = externalIsCollapsed && !isHovered

  return (
    <>
      {/* Mobile Toggle Button (Visible only on very small screens if Header doesn't cover it, or floating) */}
      <button 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed bottom-4 right-4 z-50 bg-primary-500 text-secondary-900 p-3 rounded-full shadow-lg border border-primary-600 focus:outline-none"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar Container */}
      <aside 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`bg-white border-r border-secondary-200 shadow-sm transition-[width,transform] duration-300 ease-in-out flex flex-col z-40 relative
          ${effectiveCollapsed ? 'w-20' : 'w-64 absolute md:relative'} 
          ${isMobileOpen ? 'translate-x-0 fixed inset-y-0 left-0 pt-24 w-64' : '-translate-x-full md:translate-x-0 md:h-[calc(100vh-72px)]'}
        `}
      >
        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {PORTAL_NAV_ITEMS.map((item) => {
             const Icon = item.icon
             const isActive = pathname === item.href

             if (item.disabled) {
               return (
                 <div key={item.label} className={`flex items-center px-3 py-3 rounded-lg opacity-50 cursor-not-allowed transition-colors ${effectiveCollapsed ? 'justify-center' : ''}`}>
                   <Icon size={20} className="text-secondary-400 flex-shrink-0" />
                   {!effectiveCollapsed && <span className="ml-3 text-sm font-medium text-secondary-500 whitespace-nowrap overflow-hidden transition-all duration-300">{item.label}</span>}
                 </div>
               )
             }

             return (
               <a 
                 key={item.href} 
                 href={item.href}
                 onClick={() => setIsMobileOpen(false)}
                 title={effectiveCollapsed ? item.label : undefined}
                 className={`flex items-center px-3 py-3 rounded-lg transition-colors group
                   ${isActive 
                     ? 'bg-primary-50 text-primary-700' 
                     : 'text-secondary-700 hover:bg-secondary-50'}
                   ${effectiveCollapsed ? 'justify-center' : ''}
                 `}
               >
                 <Icon size={20} className={`${isActive ? 'text-primary-600' : 'text-secondary-500 group-hover:text-secondary-700'} flex-shrink-0`} />
                 {!effectiveCollapsed && (
                   <span className={`ml-3 text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isActive ? 'font-semibold' : ''}`}>
                     {item.label}
                   </span>
                 )}
               </a>
             )
          })}
        </nav>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)}
          className="md:hidden fixed inset-0 bg-secondary-900/50 z-30 backdrop-blur-sm"
        />
      )}
    </>
  )
}
