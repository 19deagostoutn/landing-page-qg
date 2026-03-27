import { MessageCircle, ExternalLink, Users } from 'lucide-react'

// Dummy data just for structural design
const GROUPS = [
  { subject: 'Álgebra y Geometría Analítica', year: '1° Año', link: '#' },
  { subject: 'Análisis Matemático I', year: '1° Año', link: '#' },
  { subject: 'Física I', year: '2° Año', link: '#' },
  { subject: 'Sistemas de Representación', year: '1° Año', link: '#' },
]

export default function GruposWhatsappPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-secondary-800 tracking-tight flex items-center gap-3">
          <MessageCircle className="text-[#25D366] w-8 h-8" />
          Grupos de WhatsApp
        </h1>
        <p className="text-secondary-600">Encontrá y unite rápidamente a los grupos de las cursadas de tu carrera.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
        <div className="p-4 border-b border-secondary-200 bg-secondary-50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-secondary-700 font-medium">
            <Users className="w-5 h-5" />
            Mostrando grupos para: <span className="text-primary-600 font-bold ml-1">Ingeniería Civil</span>
          </div>
          <select className="border border-secondary-300 rounded-lg text-sm bg-white focus:ring-primary-500 w-full sm:w-auto p-2 outline-none">
            <option>1° Año</option>
            <option>2° Año</option>
            <option>3° Año</option>
            <option>Ver Todos</option>
          </select>
        </div>

        <div className="divide-y divide-secondary-100">
          {GROUPS.map((group, idx) => (
            <div key={idx} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-secondary-50 transition-colors">
              <div>
                <h3 className="text-lg font-bold text-secondary-800">{group.subject}</h3>
                <span className="inline-block mt-1 px-2 py-1 bg-secondary-100 text-secondary-600 text-xs font-semibold rounded-full">
                  {group.year}
                </span>
              </div>
              <a 
                href={group.link}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#25D366] text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="w-4 h-4 text-white" fill="currentColor" />
                Unirme al grupo
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
