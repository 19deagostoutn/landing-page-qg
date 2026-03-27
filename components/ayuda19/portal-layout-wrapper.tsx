'use client'

import { useState } from 'react'
import { Ayuda19Header } from './header'
import { Ayuda19Sidebar } from './sidebar'

export function PortalLayoutWrapper({ children }: { children: React.ReactNode }) {
  // Inicialmente cerrado como solicitó el usuario para que sea autoocultable
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div className="min-h-screen bg-secondary-50 flex flex-col pt-[72px]">
      <Ayuda19Header onToggleSidebar={() => setIsCollapsed(!isCollapsed)} />
      <div className="flex flex-1 overflow-hidden relative">
        <Ayuda19Sidebar isCollapsed={isCollapsed} />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 w-full max-w-7xl mx-auto transition-all duration-300 relative z-10">
          {children}
        </main>
      </div>
    </div>
  )
}
