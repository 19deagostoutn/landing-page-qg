'use client'

import { useState, useMemo } from 'react'
import { Search, Folder, ExternalLink, Filter } from 'lucide-react'

type Materia = {
  id: string;
  name: string;
  category: 'homogenea' | 'especialidad' | 'electiva';
  year?: '1er año' | '2do año' | '3er año' | '4to año' | '5to año' | '6to año' | 'Electivas';
  driveLink: string;
}

const MOCK_MATERIAS: Materia[] = [
  // 1er año
  { id: '1', name: 'Análisis Matemático I', category: 'homogenea', year: '1er año', driveLink: 'https://drive.google.com/drive/folders/1ePK2DNCdNO6t2RrloEczpGUv72n2S9CE?usp=drive_link' },
  { id: '2', name: 'Física I', category: 'homogenea', year: '1er año', driveLink: 'https://drive.google.com/drive/folders/1YuhedVz7Tiw5GeNqUdNVIQxqUp_Da82r?usp=drive_link' },
  { id: '3', name: 'Ingeniería Civil I', category: 'especialidad', year: '1er año', driveLink: 'https://drive.google.com/drive/folders/1wsi9ECDIb_HVOD5WEgnKPBcYFkSHbL4Z?usp=drive_link' },
  { id: '4', name: 'Sistemas de Representación', category: 'especialidad', year: '1er año', driveLink: 'https://drive.google.com/drive/folders/1tsk2UuuM3pYSwJ1i-uWPjT2Paj-q5wU?usp=drive_link' },
  
  // 2do año
  { id: '5', name: 'Análisis Matemático II', category: 'homogenea', year: '2do año', driveLink: 'https://drive.google.com/drive/folders/1-9DEVFW-IQhOjVRh1bnmb0YIPwHLdvGt?usp=drive_link' },
  { id: '6', name: 'Estabilidad', category: 'especialidad', year: '2do año', driveLink: 'https://drive.google.com/drive/folders/1ZQ5S5MwV1ErOrrhFZl2kIdJmNAC78-Qf?usp=drive_link' },
  { id: '7', name: 'Física II', category: 'homogenea', year: '2do año', driveLink: 'https://drive.google.com/drive/folders/1TedDYtpqJvSHmH1Pm4AWDdJts5R5q505?usp=drive_link' },
  { id: '8', name: 'Ingeniería Civil II', category: 'especialidad', year: '2do año', driveLink: 'https://drive.google.com/drive/folders/1XYOCtEgUKM5tBNXzgiJhTmfM2DyZERrP?usp=drive_link' },
  { id: '9', name: 'Probabilidad y Estadística', category: 'homogenea', year: '2do año', driveLink: 'https://drive.google.com/drive/folders/1dWa-R7Mk_ihBcuhUBo49FbyHk_ZPi-sP?usp=drive_link' },
  { id: '10', name: 'Tecnología de los Materiales', category: 'especialidad', year: '2do año', driveLink: 'https://drive.google.com/drive/folders/1jMe45OPlEcPIXf8zpA5N-9P8aqnMwPj7?usp=drive_link' },

  // 3er año
  { id: '11', name: 'Economía', category: 'homogenea', year: '3er año', driveLink: 'https://drive.google.com/drive/folders/1OACL0cePK84cNCCV1rA_LKgP-zponId9?usp=drive_link' },
  { id: '12', name: 'Geotopografía', category: 'especialidad', year: '3er año', driveLink: 'https://drive.google.com/drive/folders/1tbHsP2PDt0glEJCzzI3sEZNekt4NeQVI?usp=drive_link' },
  { id: '13', name: 'Hidráulica General y Aplicada', category: 'especialidad', year: '3er año', driveLink: 'https://drive.google.com/drive/folders/1sNSimYCPFS0gKGdU43eLGtJ2kY7fuxLq?usp=drive_link' },
  { id: '14', name: 'Ingeniería Legal', category: 'especialidad', year: '3er año', driveLink: 'https://drive.google.com/drive/folders/1KLEigK1fRfba9o1RXjxW0dljNcPHxHG?usp=drive_link' },
  { id: '15', name: 'Instalaciones Eléctricas y Acústicas', category: 'especialidad', year: '3er año', driveLink: 'https://drive.google.com/drive/folders/1xlxYzq9N6Bn90fTIJRzM7PeEkSgkFGmG?usp=drive_link' },
  { id: '16', name: 'Instalaciones Termomecánicas', category: 'especialidad', year: '3er año', driveLink: 'https://drive.google.com/drive/folders/177FLd3s031H6qiVYGlUcsGf3IRuaVuHA?usp=drive_link' },
  { id: '17', name: 'Resistencia de Materiales', category: 'especialidad', year: '3er año', driveLink: 'https://drive.google.com/drive/folders/1BhNBH88zf1C-PXIuuLDWAGPanzTdlgi6?usp=drive_link' },
  { id: '18', name: 'Tecnología de la Construcción', category: 'especialidad', year: '3er año', driveLink: 'https://drive.google.com/drive/folders/1Uq9NcZB6b8zTreE_zNenojH5qHoyK6gn?usp=drive_link' },
  { id: '19', name: 'Tecnología del Hormigón', category: 'especialidad', year: '3er año', driveLink: 'https://drive.google.com/drive/folders/1O-z5x4eQfXMdf5x9rqi1zBj60PBqDQnR?usp=drive_link' },

  // 4to año
  { id: '20', name: 'Análisis Estructural I', category: 'especialidad', year: '4to año', driveLink: 'https://drive.google.com/drive/folders/1VzdV8oOQ-LfLNL1aKl3KEhi32m5Xm2_W?usp=drive_link' },
  { id: '21', name: 'Cálculo Avanzado', category: 'especialidad', year: '4to año', driveLink: 'https://drive.google.com/drive/folders/1wJu-BfLqg_jmHrEdAbVmH1CcYUVhX9VQ?usp=drive_link' },
  { id: '22', name: 'Diseño Arquitectónico, Planeamiento y Urbanismo', category: 'especialidad', year: '4to año', driveLink: 'https://drive.google.com/drive/folders/1FerTTXNAw8AjTbDrHql55V4f7dsXZjSa?usp=drive_link' },
  { id: '23', name: 'Estructuras de Hormigón', category: 'especialidad', year: '4to año', driveLink: 'https://drive.google.com/drive/folders/1X0-1HExT9tQ91mo_jIlgeS3CNIpFasCm?usp=drive_link' },
  { id: '24', name: 'Geotecnia', category: 'especialidad', year: '4to año', driveLink: 'https://drive.google.com/drive/folders/1Kr689h5856zfhFKf8nm74ySU5-SrJ8fG?usp=drive_link' },
  { id: '25', name: 'Hidrología y Obras Hidráulicas', category: 'especialidad', year: '4to año', driveLink: 'https://drive.google.com/drive/folders/1dJXkDaMECShrlVbdbKJB0wAZPBGw_naRC?usp=drive_link' },
  { id: '26', name: 'Instalaciones Sanitarias y de Gas', category: 'especialidad', year: '4to año', driveLink: 'https://drive.google.com/drive/folders/10Vyn1GB-M8Gff3LNSaiUSzpEKiyUFghi?usp=drive_link' },
  { id: '27', name: 'Vías de Comunicación I', category: 'especialidad', year: '4to año', driveLink: 'https://drive.google.com/drive/folders/1BfWxy-YirKlOibZDPJ4eJ1EDcugJ1fTQ?usp=drive_link' },

  // 5to año
  { id: '28', name: 'Análisis Estructural II', category: 'especialidad', year: '5to año', driveLink: 'https://drive.google.com/drive/folders/1wUnMHLz8SeirvwV24vbfFwPfCaKiN1hn-?usp=drive_link' },
  { id: '29', name: 'Cimentaciones', category: 'especialidad', year: '5to año', driveLink: 'https://drive.google.com/drive/folders/1wZCC1JREcE83ZkkWYAOUqZUaByar4zx4?usp=drive_link' },
  { id: '30', name: 'Construcciones Metálicas y de Madera', category: 'especialidad', year: '5to año', driveLink: 'https://drive.google.com/drive/folders/1ukzz8_BRUJMBwT3XzfOprMl2HIzE0KcR?usp=drive_link' },
  { id: '31', name: 'Gestión Ambiental y Desarrollo Sustentable', category: 'especialidad', year: '5to año', driveLink: 'https://drive.google.com/drive/folders/1U-ibS4jRaxu6_B-G5z4MWFU9MzcNe5CF?usp=drive_link' },
  { id: '32', name: 'Ingeniería Sanitaria', category: 'especialidad', year: '5to año', driveLink: 'https://drive.google.com/drive/folders/1ixO5u_blcsv_6GjvhtS0R5JkrUT-LlyE?usp=drive_link' },
  { id: '33', name: 'Organización y Conducción de Obras', category: 'especialidad', year: '5to año', driveLink: 'https://drive.google.com/drive/folders/1xmL8Viu0jTCu5bVXA0wG4JRNuv4v9EbI?usp=drive_link' },
  { id: '34', name: 'Vías de Comunicación II', category: 'especialidad', year: '5to año', driveLink: 'https://drive.google.com/drive/folders/1F4790KgBc-oIhOZ64hI1nJnsZPIJM1GN?usp=drive_link' },
  { id: '35', name: 'Proyecto Final', category: 'especialidad', year: '5to año', driveLink: 'https://drive.google.com/drive/folders/1ndNKzd60rF7KBcD5T94LfdbgrmN9YHFT?usp=drive_link' },

  // Electivas
  { id: '36', name: 'Aeropuertos', category: 'electiva', year: '6to año', driveLink: 'https://drive.google.com/drive/folders/11MmsPwJQPHXQUNy_WF9ZfbvQXscZyYdl?usp=drive_link' },
  { id: '37', name: 'Construcción de Carreteras', category: 'electiva', year: '6to año', driveLink: 'https://drive.google.com/drive/folders/1STEJl9Ggn1o_to-I246Jxr8bYqEkZqME?usp=drive_link' },
  { id: '38', name: 'Contaminación y Saneamiento', category: 'electiva', year: '6to año', driveLink: 'https://drive.google.com/drive/folders/16-30BD-vZY6qaj-DSNjXiJlzNdAdqicW?usp=drive_link' },
  { id: '39', name: 'Energías Renovables', category: 'electiva', year: '5to año', driveLink: 'https://drive.google.com/drive/folders/1FwjDTzTNxmdhXPYl1HUdmFSQkb7sYkiB?usp=drive_link' },
  { id: '40', name: 'Ferrocarriles', category: 'electiva', year: '5to año', driveLink: 'https://drive.google.com/drive/folders/1jG9Wx_9-ALJTtbfw3TxkBpskDki-rT1w?usp=drive_link' },
  { id: '41', name: 'Geología Aplicada', category: 'electiva', year: '5to año', driveLink: 'https://drive.google.com/drive/folders/1lOq-laKL6CxdAwLV93vTSEsj0iAcwvQm?usp=drive_link' },
  { id: '42', name: 'Gestión de Cuencas', category: 'electiva', year: '6to año', driveLink: 'https://drive.google.com/drive/folders/108eAiwsFB8BZTaMN_ibGhvrsVswZGnZv?usp=drive_link' },
  { id: '43', name: 'Gestión y Calidad del Agua', category: 'electiva', year: '6to año', driveLink: 'https://drive.google.com/drive/folders/1d4MZ9spJY3lZ0Rh0yxVoYz13qdF5s8Dp?usp=drive_link' },
  { id: '44', name: 'Planificación Urbana Sustentable', category: 'electiva', year: '5to año', driveLink: 'https://drive.google.com/drive/folders/1j-mUpusvPqYZOSDdaubTkLEuK4uaEya2?usp=drive_link' },
  { id: '45', name: 'Prefabricación', category: 'electiva', year: '5to año', driveLink: 'https://drive.google.com/drive/folders/1usV0MaUlKlhjkrIAIDAKX2sYT7xr_sbMt?usp=drive_link' },
  { id: '46', name: 'Presas y Centrales Hidroeléctricas', category: 'electiva', year: '5to año', driveLink: 'https://drive.google.com/drive/folders/1plFdyPEFyb0EYj61brqZKqwpzfa4fMXF?usp=drive_link' },
  { id: '47', name: 'Puertos y Vías Navegables', category: 'electiva', year: '5to año', driveLink: 'https://drive.google.com/drive/folders/1BPFqIIUqabVKevZcOrcsSqwM9cZc_IfU?usp=drive_link' },
  { id: '48', name: 'Túneles y Grandes Puentes', category: 'electiva', year: '6to año', driveLink: 'https://drive.google.com/drive/folders/1jc71-JHxTrdpSCLHPkZ7y7R4YZALWtsg?usp=drive_link' }
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
  const [activeCategory, setActiveCategory] = useState<'todas' | 'homogenea' | 'especialidad' | 'electiva'>('todas')
  const [activeYear, setActiveYear] = useState<string | null>(null)

  const filteredMaterias = useMemo(() => {
    return MOCK_MATERIAS.filter(m => {
      const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = activeCategory === 'todas' ? true : m.category === activeCategory
      const matchesYear = (activeCategory === 'especialidad' || activeCategory === 'electiva') && activeYear ? m.year === activeYear : true
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
              onClick={() => setActiveCategory('especialidad')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeCategory === 'especialidad' 
                ? 'bg-primary-500 text-secondary-900 border-primary-600 shadow-sm' 
                : 'bg-white text-secondary-600 border-secondary-200 hover:bg-secondary-50'
              }`}
            >
              de Especialidad
            </button>
            <button
              onClick={() => setActiveCategory('electiva')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeCategory === 'electiva' 
                ? 'bg-primary-500 text-secondary-900 border-primary-600 shadow-sm' 
                : 'bg-white text-secondary-600 border-secondary-200 hover:bg-secondary-50'
              }`}
            >
              Electivas
            </button>
          </div>
        </div>

        {/* Secondary Filters (Years) - Only visible if 'especialidad' or 'electiva' is selected */}
        {(activeCategory === 'especialidad' || activeCategory === 'electiva') && (
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
                  {(materia.category === 'especialidad' || materia.category === 'electiva') && (
                    <span className="text-xs text-secondary-500 uppercase tracking-wider font-bold mt-1">
                      {materia.year} - {materia.category === 'especialidad' ? `Ingeniería ${carrera}` : 'Electiva'}
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
