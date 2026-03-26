'use client'

import { useState } from 'react'
import { ProfileForm } from '@/components/ayuda19/profile-form'
import { RoadmapCivil } from '@/components/ayuda19/roadmap-civil'
import { GraduationCap, UserCircle } from 'lucide-react'

export default function Ayuda19DashboardPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'plan'>('profile')

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header section of dashboard */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-secondary-800 tracking-tight">Tu Espacio Personal</h1>
        <p className="text-secondary-600">Completá tus datos y seguí el avance de tu plan de estudios.</p>
      </div>

      {/* Custom Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
        <div className="flex border-b border-secondary-200 bg-secondary-50">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 text-sm font-medium transition-colors ${
              activeTab === 'profile'
                ? 'bg-white text-primary-600 border-b-2 border-primary-500'
                : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100'
            }`}
          >
            <UserCircle size={18} />
            Mi Perfil
          </button>
          <button
            onClick={() => setActiveTab('plan')}
            className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 text-sm font-medium transition-colors ${
              activeTab === 'plan'
                ? 'bg-white text-primary-600 border-b-2 border-primary-500'
                : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100'
            }`}
          >
            <GraduationCap size={18} />
            Seguimiento de Plan
          </button>
        </div>

        <div className="p-6 md:p-8">
          {activeTab === 'profile' && <ProfileForm />}
          {activeTab === 'plan' && <RoadmapCivil />}
        </div>
      </div>
    </div>
  )
}
