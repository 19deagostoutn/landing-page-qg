'use client'

import { useState, useMemo } from 'react'
import { Search, Folder, ExternalLink, Filter } from 'lucide-react'

type Materia = {
  id: string;
  name: string;
  category: 'homogenea' | 'especifica';
  year?: '1er año' | '2do año' | '3er año' | '4to año' | '5to año' | '6to año' | 'Electivas';
  driveLink: string;
}

// Mock de materias genérico para demostrar el filtrado
const MOCK_MATERIAS: Materia[] = [
  { id: '1', name: 'Análisis Matemático I', category: 'homogenea', driveLink: '#' },
  { id: '2', name: 'Álgebra y Geometría Analítica', category: 'homogenea', driveLink: '#' },
  { id: '3', name: 'Física I', category: 'homogenea', driveLink: '#' },
  { id: '4', name: 'Química General', category: 'homogenea', driveLink: '#' },
  { id: '5', name: 'Sistemas de Representación', category: 'homogenea', driveLink: '#' },
  { id: '6', name: 'Física II', category: 'homogenea', driveLink: '#' },
  { id: '7', name: 'Análisis Matemático II', category: 'homogenea', driveLink: '#' },
  
  // Específicas simuladas para testear los años
  { id: '8', name: 'Materia Específica Intro 1', category: 'especifica', year: '1er año', driveLink: '#' },
  { id: '9', name: 'Materia Específica Básica 2', category: 'especifica', year: '2do año', driveLink: '#' },
  { id: '10', name: 'Materia Troncal 3', category: 'especifica', year: '3er año', driveLink: '#' },
  { id: '11', name: 'Materia Avanzada 4', category: 'especifica', year: '4to año', driveLink: '#' },
  { id: '12', name: 'Materia Aplicada 5', category: 'especifica', year: '5to año', driveLink: '#' },
  { id: '13', name: 'Especialización 6', category: 'especifica', year: '6to año', driveLink: '#' },
  { id: '14', name: 'Electiva Orientada A', category: 'especifica', year: 'Electivas', driveLink: '#' },
  { id: '15', name: 'Electiva Orientada B', category: 'especifica', year: 'Electivas', driveLink: '#' },
]

const FOLDERS = [
  { name: 'Apuntes Teóricos', type: 'folder', count: 12 },
  { name: 'Parciales Resueltos', type: 'folder', count: 8 },
  { name: 'Trabajos Prácticos', type: 'folder', count: 24 },
  { name: 'Resúmenes Alumnos', type: 'folder', count: 15 },
]

const YEARS = ['1er año', '2do año', '3er año', '4to año', '5to año', '6to año', 'Electivas']

export function MaterialClient({ carrera }: { carrera: string }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<'todas' | 'homogenea' | 'especifica'>('todas')
  const [activeYear, setActiveYear] = useState<string | null>(null)

  const filteredMaterias = useMemo(() => {
    return MOCK_MATERIAS.filter(m => {
      const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = activeCategory === 'todas' ? true : m.category === activeCategory
      const matchesYear = activeCategory === 'especifica' && activeYear ? m.year === activeYear : true
      return matchesSearch && matchesCategory && matchesYear
    })
  }, [searchQuery, activeCategory, activeYear])

  return (
    <div className="space-y-8">
      
      {/* Search and Filters Section */}
      <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-4 space-y-5">
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400 w-5 h-5" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por nombre de materia..." 
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-secondary-200 bg-secondary-50 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
          />
        </div>

        {/* Primary Filters (Category) */}
        <div className="flex flex-row items-center gap-3">
          <Filter size={20} className="text-secondary-500 flex-shrink-0" />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => { setActiveCategory('todas'); setActiveYear(null); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeCategory === 'todas' 
                ? 'bg-primary-500 text-secondary-900 border-primary-600 shadow-sm' 
                : 'bg-white text-secondary-600 border-secondary-200 hover:bg-secondary-50'
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => { setActiveCategory('homogenea'); setActiveYear(null); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeCategory === 'homogenea' 
                ? 'bg-primary-500 text-secondary-900 border-primary-600 shadow-sm' 
                : 'bg-white text-secondary-600 border-secondary-200 hover:bg-secondary-50'
              }`}
            >
              Homogéneas
            </button>
            <button
              onClick={() => setActiveCategory('especifica')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeCategory === 'especifica' 
                ? 'bg-primary-500 text-secondary-900 border-primary-600 shadow-sm' 
                : 'bg-white text-secondary-600 border-secondary-200 hover:bg-secondary-50'
              }`}
            >
              {carrera}
            </button>
          </div>
        </div>

        {/* Secondary Filters (Years) - Only visible if 'especifica' is selected */}
        {activeCategory === 'especifica' && (
          <div className="space-y-3 pt-4 border-t border-secondary-100 animate-in fade-in slide-in-from-top-2 duration-300">
            <h3 className="text-sm font-semibold text-secondary-700">Filtro por Nivel</h3>
            <div className="flex flex-wrap gap-2 pr-2">
              <button
                onClick={() => setActiveYear(null)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors border ${
                  activeYear === null
                  ? 'bg-secondary-800 text-white border-secondary-800'
                  : 'bg-secondary-50 text-secondary-600 border-secondary-200 hover:bg-secondary-100'
                }`}
              >
                Todos
              </button>
              {YEARS.map(year => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors border ${
                    activeYear === year
                    ? 'bg-secondary-800 text-white border-secondary-800'
                    : 'bg-secondary-50 text-secondary-600 border-secondary-200 hover:bg-secondary-100'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results List */}
      <div className="space-y-6">
        {filteredMaterias.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-secondary-200">
            <Folder className="w-12 h-12 text-secondary-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-secondary-600">No se encontraron materias.</h3>
            <p className="text-secondary-500 text-sm mt-1">Intentá buscar con otros términos o filtros.</p>
          </div>
        ) : (
          filteredMaterias.map((materia) => (
            <div key={materia.id} className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
              <div className="bg-secondary-50 border-b border-secondary-200 p-4 font-semibold text-secondary-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-col">
                  <span className="text-lg">{materia.name}</span>
                  {materia.category === 'especifica' && (
                    <span className="text-xs text-secondary-500 uppercase tracking-wider font-bold mt-1">
                      {materia.year} - Ingeniería {carrera}
                    </span>
                  )}
                </div>
                <a 
                  href={materia.driveLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 flex items-center gap-1.5 hover:text-blue-700 bg-blue-50 py-1.5 px-3 rounded-lg w-fit transition-colors border border-blue-100"
                >
                  Acceder al Drive <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              
              <div className="p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {FOLDERS.map((folder, i) => (
                  <div key={i} className="group cursor-pointer border border-secondary-200 rounded-xl p-3 sm:p-4 hover:border-blue-400 hover:bg-blue-50/30 hover:shadow-sm transition-all flex flex-col items-center justify-center text-center gap-2">
                    <Folder className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 group-hover:text-blue-600 transition-colors" fill="currentColor" fillOpacity={0.2} strokeWidth={1.5} />
                    <div>
                      <h4 className="font-semibold text-secondary-800 text-xs sm:text-sm line-clamp-2">{folder.name}</h4>
                      <span className="text-[10px] sm:text-xs text-secondary-500">{folder.count} archivos</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
