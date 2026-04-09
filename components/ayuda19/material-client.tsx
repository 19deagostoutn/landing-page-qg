'use client'

import { useState, useMemo } from 'react'
import { Search, Folder, ExternalLink, Filter, ChevronDown } from 'lucide-react'
import { DriveFolderList } from './drive-folder-list'

type Materia = {
  id: string;
  name: string;
  category: 'homogenea' | 'especialidad' | 'electiva';
  year?: '1er año' | '2do año' | '3er año' | '4to año' | '5to año' | '6to año' | 'Electivas';
  carrera?: string; // Para indicar a qué carrera pertenece si es Específica o Electiva
  driveLink: string;
}

const ALL_MATERIAS: Materia[] = [
  // --- HOMOGÉNEAS ---
  { id: '1', name: 'Álgebra y Geometría Analítica', category: 'homogenea', year: '1er año', driveLink: 'https://drive.google.com/drive/folders/1lzLm7SCWaTLGvGqrdsRpIZiaf_eRziFh?usp=drive_link' },
  { id: '2', name: 'Análisis Matemático I', category: 'homogenea', year: '1er año', driveLink: 'https://drive.google.com/drive/folders/1sxGdyrpkMzieRDbe6z0tYAVq-fUsFggq?usp=drive_link' },
  { id: '3', name: 'Física I', category: 'homogenea', year: '1er año', driveLink: 'https://drive.google.com/drive/folders/1sxlbPPd1eXDizTyOskB11zmzm_ChU4v2?usp=drive_link' },
  { id: '4', name: 'Ingeniería y Sociedad', category: 'homogenea', year: '1er año', driveLink: 'https://drive.google.com/drive/folders/1TNHJ8yBBCyBiby_5CXx-yUuM_Rt4nr02?usp=drive_link' },
  { id: '5', name: 'Química General', category: 'homogenea', year: '1er año', driveLink: 'https://drive.google.com/drive/folders/1hwMqQ_4juifdHMXkOS5hTR9zzaYcucjP?usp=drive_link' },

  { id: '6', name: 'Análisis Matemático II', category: 'homogenea', year: '2do año', driveLink: 'https://drive.google.com/drive/folders/1ChgJVnBOHVn4pslovcdpyIncb6tKlRsl?usp=drive_link' },
  { id: '7', name: 'Física II', category: 'homogenea', year: '2do año', driveLink: 'https://drive.google.com/drive/folders/1KnCXgpkuZPfQdSRqUvFBYWfkO-BMxJiS?usp=drive_link' },
  { id: '8', name: 'Inglés I', category: 'homogenea', year: '2do año', driveLink: 'https://drive.google.com/drive/folders/1QYhdFA7DbkuWC-XpBWBvm88iNw1SG8LY?usp=drive_link' },
  { id: '9', name: 'Inglés II', category: 'homogenea', year: '2do año', driveLink: 'https://drive.google.com/drive/folders/1x8egul24LgieeJJe3bijxJ1ipE7ghZKx?usp=drive_link' },
  { id: '10', name: 'Probabilidad y Estadística', category: 'homogenea', year: '2do año', driveLink: 'https://drive.google.com/drive/folders/1g-dfN3sSB63eIQ7_gRo0Qz-s3GEqn00r?usp=drive_link' },

  { id: '11', name: 'Economía', category: 'homogenea', year: '3er año', driveLink: 'https://drive.google.com/drive/folders/1oACL0cePK84cNCCV1rA-LKgP-zponld9?usp=drive_link' },

  // --- ESPECÍFICAS / ELECTIVAS DE CIVIL ---
  { id: '100', name: 'Ingeniería Civil I', category: 'especialidad', year: '1er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1Wsi9ECDlb_HVOD5WEgnKPBcYFkSHbL4Z?usp=drive_link' },
  { id: '101', name: 'Sistemas de Representación', category: 'especialidad', year: '1er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1ltsk2UuuM3pYSwJIi-uWPjTvPaj-q5wU?usp=drive_link' },

  { id: '102', name: 'Estabilidad', category: 'especialidad', year: '2do año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1ZQ5S5MwV1ErOrrhFZl2kIdJmNAC78-Qf?usp=drive_link' },
  { id: '103', name: 'Ingeniería Civil II', category: 'especialidad', year: '2do año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1XYOCtEgUKM5tBNXzgiJhTmfM2DyZERrP?usp=drive_link' },
  { id: '104', name: 'Tecnología de los Materiales', category: 'especialidad', year: '2do año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1jMe45OPIEcPlXf8zpA5N-9P8aqnMwPj7?usp=drive_link' },

  { id: '105', name: 'Geotopografía', category: 'especialidad', year: '3er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1tbHsP2PDt0gJElCzzl3sEZNekt4NeQVI?usp=drive_link' },
  { id: '106', name: 'Hidráulica General y Aplicada', category: 'especialidad', year: '3er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1sNSimYCPFS0gKGdU43eLGtJ2kY7fuxLq?usp=drive_link' },
  { id: '107', name: 'Ingeniería Legal', category: 'especialidad', year: '3er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/11KLEigK1fRfba9o1RXjxW0dIjNcPHxHG?usp=drive_link' },
  { id: '108', name: 'Instalaciones Eléctricas y Acústicas', category: 'especialidad', year: '3er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1xIxYzq9N6Bn90fTIJRzM7PeEkSgkFGmG?usp=drive_link' },
  { id: '109', name: 'Instalaciones Termomecánicas', category: 'especialidad', year: '3er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/177FLd3s031H6qiVYGlUcsGf3IRuaVuHA?usp=drive_link' },
  { id: '110', name: 'Resistencia de Materiales', category: 'especialidad', year: '3er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1BhNBH88zf1C-PXIuuLDWAGPanzTdIgi6?usp=drive_link' },
  { id: '111', name: 'Tecnología de la Construcción', category: 'especialidad', year: '3er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1Uq9NcZB6b8zTreE_zNenojH5qHoyK6gn?usp=drive_link' },
  { id: '112', name: 'Tecnología del Hormigón', category: 'especialidad', year: '3er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1O-z5x4eQfXMdF5x9rqj1zBj60PBqDQnR?usp=drive_link' },

  { id: '113', name: 'Análisis Estructural I', category: 'especialidad', year: '4to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1VzdV8oOQ-LfLNL1aKl3KEhi32m5Xm2_W?usp=drive_link' },
  { id: '114', name: 'Cálculo Avanzado', category: 'especialidad', year: '4to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1wJu-BfLqg_jmHrEdAbVmH1CcYUVhX9VQ?usp=drive_link' },
  { id: '115', name: 'Diseño Arquitectónico, Planeamiento y Urbanismo', category: 'especialidad', year: '4to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1FerTTXNAw8AjTbDrHql55V4f7dsXZjSa?usp=drive_link' },
  { id: '116', name: 'Estructuras de Hormigón', category: 'especialidad', year: '4to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1X0-1HExT9tQ91mo_jllgeS3CNIpFasCm?usp=drive_link' },
  { id: '117', name: 'Geotecnia', category: 'especialidad', year: '4to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1Kr689h5856zfhFKf8nm74ySU5-SrJ8fG?usp=drive_link' },
  { id: '118', name: 'Hidrología y Obras Hidráulicas', category: 'especialidad', year: '4to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1dJXkToMECShrIVbdbKJB0wAZPBGw_aRC?usp=drive_link' },
  { id: '119', name: 'Instalaciones Sanitarias y de Gas', category: 'especialidad', year: '4to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/10Vyn1GB-M8Gff3LNSaiUSzpEKivUFghi?usp=drive_link' },
  { id: '120', name: 'Vías de Comunicación I', category: 'especialidad', year: '4to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1BfWxy-YirKIOibZDPJ4eJ1EDcugJ1fTQ?usp=drive_link' },

  { id: '121', name: 'Análisis Estructural II', category: 'especialidad', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1WUnMHLz8SeirwV24vbfFwPfCaKiN1hn-?usp=drive_link' },
  { id: '122', name: 'Cimentaciones', category: 'especialidad', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1wZCC1JREcE83ZkkWYAOUqZUaByar4zx4?usp=drive_link' },
  { id: '123', name: 'Construcciones Metálicas y de Madera', category: 'especialidad', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1ukzz8_BRUJMBwT3XzfOprMl2HIzE0KcR?usp=drive_link' },
  { id: '124', name: 'Gestión Ambiental y Desarrollo Sustentable', category: 'especialidad', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1U-ibS4jRaxu6_B-G5z4MWFU9MzcNe5CF?usp=drive_link' },
  { id: '125', name: 'Ingeniería Sanitaria', category: 'especialidad', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1ixO5u_bIcsv_6GjvhtSOr5JkrUT-LIyE?usp=drive_link' },
  { id: '126', name: 'Organización y Conducción de Obras', category: 'especialidad', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1xmL8Viu0jTCu5bVXAOwG4JRNuv4v9Ebi?usp=drive_link' },
  { id: '127', name: 'Vías de Comunicación II', category: 'especialidad', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1F4790KgBc-oIhOZ64hl1nJnsZPIJm1GN?usp=drive_link' },
  { id: '128', name: 'Proyecto Final', category: 'especialidad', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1ndNKzd60rF7KBdD5T94LfdbgrmN9YHFT?usp=drive_link' },

  { id: '129', name: 'Aeropuertos', category: 'electiva', year: '6to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/11MmsPwJQPHXQUNy_WF9ZfbvQXscZyYdI?usp=drive_link' },
  { id: '130', name: 'Construcción de Carreteras', category: 'electiva', year: '6to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1STEJl9Ggn1o_to-I246Jxr8bYqEkZqME?usp=drive_link' },
  { id: '131', name: 'Contaminación y Saneamiento', category: 'electiva', year: '6to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/16-30BD-vZY6qaj-DSNjXiJlzNdAdqicW?usp=drive_link' },
  { id: '132', name: 'Energías Renovables', category: 'electiva', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1FwjDTzTNxmdhXPYI1HUdmFSQkb7sYkiB?usp=drive_link' },
  { id: '133', name: 'Ferrocarriles', category: 'electiva', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1jG9Wx_9-ALJTtbfw3TxkBpskDki-rT1w?usp=drive_link' },
  { id: '134', name: 'Geología Aplicada', category: 'electiva', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1L0q-laKL6CxdAwLV93vTSEsj0iAcwvQm?usp=drive_link' },
  { id: '135', name: 'Gestión de Cuencas', category: 'electiva', year: '6to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1O8eAiwSFB8BZTaMN_ibGhvrsvswZGnZv?usp=drive_link' },
  { id: '136', name: 'Gestión y Calidad del Agua', category: 'electiva', year: '6to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1D4MZ9spJY3lZ0Rh0yxVoYz13qdF5s8Dp?usp=drive_link' },
  { id: '137', name: 'Planificación Urbana Sustentable', category: 'electiva', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1j-mUpusvPqYZOSDdaubTkLEuK4uaEya2?usp=drive_link' },
  { id: '138', name: 'Prefabricación', category: 'electiva', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/11uSV0MaUKlhjkIrADAKX2sYT7xr_sbMt?usp=drive_link' },
  { id: '139', name: 'Presas y Centrales Hidroeléctricas', category: 'electiva', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1plFdyPEFyb0EYj61brqZKqwpzfa4fMXF?usp=drive_link' },
  { id: '140', name: 'Puertos y Vías Navegables', category: 'electiva', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1BPFqIIUqabVKevZcOrcsSqwM9cZc_lfU?usp=drive_link' },
  { id: '141', name: 'Túneles y Grandes Puentes', category: 'electiva', year: '6to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1Jc71-JHxTrdpSCLHPkZ7y7R4YZALWtsg?usp=drive_link' },

  // --- MOCKS OTRAS CARRERAS ---
  { id: '500', name: 'Sistemas y Organizaciones', category: 'especialidad', year: '1er año', carrera: 'en Sistemas', driveLink: '#' },
  { id: '501', name: 'Algoritmos y Estructura de Datos', category: 'especialidad', year: '1er año', carrera: 'en Sistemas', driveLink: '#' },
  { id: '600', name: 'Fundamentos de Informática', category: 'especialidad', year: '1er año', carrera: 'Industrial', driveLink: '#' },
  { id: '700', name: 'Integración Eléctrica', category: 'especialidad', year: '1er año', carrera: 'Eléctrica', driveLink: '#' },
]
const ALL_YEARS = ['1er año', '2do año', '3er año', '4to año', '5to año', '6to año']

export function MaterialClient({ carrera }: { carrera: string }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<'todas' | 'homogenea' | 'especialidad' | 'electiva'>('todas')
  const [activeYear, setActiveYear] = useState<string | null>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const normalizeString = (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  }

  const availableYears = useMemo(() => {
    const materiasCarrera = ALL_MATERIAS.filter(m => m.category === 'homogenea' || m.carrera === carrera)
    const filteredForYears = materiasCarrera.filter(m => {
      const matchesSearch = normalizeString(m.name).includes(normalizeString(searchQuery))
      const matchesCategory = activeCategory === 'todas' ? true : m.category === activeCategory
      return matchesSearch && matchesCategory
    })
    const yearsSet = new Set(filteredForYears.map(m => m.year).filter(Boolean) as string[])
    return ALL_YEARS.filter(y => yearsSet.has(y))
  }, [searchQuery, activeCategory, carrera])

  const filteredMaterias = useMemo(() => {
    // 1. Filtrar las que pertenecen a la carrera o son homogéneas
    const materiasCarrera = ALL_MATERIAS.filter(m => m.category === 'homogenea' || m.carrera === carrera)

    return materiasCarrera.filter(m => {
      const matchesSearch = normalizeString(m.name).includes(normalizeString(searchQuery))
      const matchesCategory = activeCategory === 'todas' ? true : m.category === activeCategory
      const matchesYear = activeYear ? m.year === activeYear : true
      return matchesSearch && matchesCategory && matchesYear
    })
  }, [searchQuery, activeCategory, activeYear, carrera])

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
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${activeCategory === 'todas'
                  ? 'bg-primary-500 text-secondary-900 border-primary-600 shadow-sm'
                  : 'bg-white text-secondary-600 border-secondary-200 hover:bg-secondary-50'
                }`}
            >
              Todas
            </button>
            <button
              onClick={() => { setActiveCategory('homogenea'); setActiveYear(null); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${activeCategory === 'homogenea'
                  ? 'bg-primary-500 text-secondary-900 border-primary-600 shadow-sm'
                  : 'bg-white text-secondary-600 border-secondary-200 hover:bg-secondary-50'
                }`}
            >
              Homogéneas
            </button>
            <button
              onClick={() => { setActiveCategory('especialidad'); setActiveYear(null); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${activeCategory === 'especialidad'
                  ? 'bg-primary-500 text-secondary-900 border-primary-600 shadow-sm'
                  : 'bg-white text-secondary-600 border-secondary-200 hover:bg-secondary-50'
                }`}
            >
              de Especialidad
            </button>
            <button
              onClick={() => { setActiveCategory('electiva'); setActiveYear(null); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${activeCategory === 'electiva'
                  ? 'bg-primary-500 text-secondary-900 border-primary-600 shadow-sm'
                  : 'bg-white text-secondary-600 border-secondary-200 hover:bg-secondary-50'
                }`}
            >
              Electivas
            </button>
          </div>
        </div>

        {/* Secondary Filters (Years) - Only visible if there are valid years to filter by */}
        {availableYears.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-secondary-100 animate-in fade-in slide-in-from-top-2 duration-300">
            <h3 className="text-sm font-semibold text-secondary-700">Filtro por Nivel</h3>
            <div className="flex flex-wrap gap-2 pr-2">
              <button
                onClick={() => setActiveYear(null)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors border ${activeYear === null
                    ? 'bg-secondary-800 text-white border-secondary-800'
                    : 'bg-secondary-50 text-secondary-600 border-secondary-200 hover:bg-secondary-100'
                  }`}
              >
                Todos
              </button>
              {availableYears.map(year => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors border ${activeYear === year
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
            <div key={materia.id} className="bg-white rounded-xl border border-secondary-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div 
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-secondary-50 transition-colors"
                onClick={() => setExpandedId(expandedId === materia.id ? null : materia.id)}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg 
                    ${expandedId === materia.id ? 'bg-primary-100 text-primary-600' : 'bg-secondary-100 text-secondary-500'} 
                    transition-colors flex-shrink-0`}
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedId === materia.id ? 'rotate-180' : ''}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-800 text-base sm:text-lg">{materia.name}</h3>
                    {(materia.category === 'especialidad' || materia.category === 'electiva') && (
                      <span className="inline-block mt-1 px-2 py-0.5 bg-secondary-100 text-secondary-600 text-[10px] sm:text-xs font-semibold rounded-md border border-secondary-200">
                        {materia.year} - {materia.category === 'especialidad' ? `Ingeniería ${carrera}` : 'Electiva'}
                      </span>
                    )}
                  </div>
                </div>
                
                <a
                  href={materia.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // Prevent accordion from toggling when clicking the direct link
                  className="text-sm font-medium text-blue-600 flex items-center gap-1.5 hover:text-blue-700 bg-blue-50 py-1.5 px-3 rounded-lg w-fit transition-colors border border-blue-100"
                >
                  Acceder al Drive <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Render condicional para no saturar la red */}
              {expandedId === materia.id && (
                <div className="border-t border-secondary-100 bg-secondary-50/50">
                  <DriveFolderList driveLink={materia.driveLink} />
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
