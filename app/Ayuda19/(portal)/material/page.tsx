import { BookOpen, Folder, Search, ExternalLink } from 'lucide-react'

const FOLDERS = [
  { name: 'Apuntes Teóricos', type: 'folder', count: 12 },
  { name: 'Parciales Resueltos', type: 'folder', count: 8 },
  { name: 'Trabajos Prácticos', type: 'folder', count: 24 },
  { name: 'Resúmenes Alumnos', type: 'folder', count: 15 },
]

export default function MaterialEstudioPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-secondary-800 tracking-tight flex items-center gap-3">
          <BookOpen className="text-primary-500 w-8 h-8" />
          Material de Estudio
        </h1>
        <p className="text-secondary-600">Accedé a la biblioteca colaborativa en Google Drive para prepararte mejor.</p>
      </div>

      {/* Filters Base */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Buscar por materia..." 
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-secondary-200 shadow-sm focus:ring-2 focus:ring-primary-500 outline-none"
          />
        </div>
        <select className="px-4 py-3 rounded-xl border border-secondary-200 shadow-sm bg-white focus:ring-2 focus:ring-primary-500 outline-none w-full md:w-64 font-medium text-secondary-700">
           <option>Ingeniería Civil</option>
           <option>Materias Básicas</option>
        </select>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
        <div className="bg-secondary-50 border-b border-secondary-200 p-4 font-semibold text-secondary-700 flex items-center justify-between">
          <span>Álgebra y Geometría Analítica</span>
          <a href="#" className="text-sm font-medium text-blue-600 flex items-center gap-1 hover:underline">
            Abrir en Drive <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FOLDERS.map((folder, i) => (
            <div key={i} className="group cursor-pointer border border-secondary-200 rounded-xl p-4 hover:border-blue-400 hover:bg-blue-50/30 hover:shadow-sm transition-all flex flex-col items-center justify-center text-center gap-2">
              <Folder className="w-12 h-12 text-blue-500 group-hover:text-blue-600 transition-colors" fill="currentColor" fillOpacity={0.2} strokeWidth={1.5} />
              <div>
                <h4 className="font-semibold text-secondary-800 text-sm">{folder.name}</h4>
                <span className="text-xs text-secondary-500">{folder.count} archivos</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
