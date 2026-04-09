'use client'

import { useState } from 'react'
import { Ayuda19Header } from './header'
import { Ayuda19Sidebar } from './sidebar'

export function PortalLayoutWrapper({ children }: { children: React.ReactNode }) {
  // Inicialmente cerrado como solicitó el usuario para que sea autoocultable
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div className="min-h-screen bg-secondary-50 flex flex-col">
      <Ayuda19Header onToggleSidebar={() => setIsCollapsed(!isCollapsed)} />
      <div className="flex flex-1 relative">
        <Ayuda19Sidebar isCollapsed={isCollapsed} />
        <div className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? 'ml-16 md:ml-20' : 'md:ml-64'}`}>
          <div className="h-[72px] w-full flex-shrink-0" />
          <main className="flex-1 overflow-y-auto p-4 md:p-8 w-full max-w-7xl mx-auto relative z-10">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
