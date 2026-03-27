
import { PORTAL_NAV_ITEMS } from '@/components/ayuda19/nav-config'

export default function Ayuda19DashboardHub() {
  const portalLinks = PORTAL_NAV_ITEMS.filter(link => link.href !== '/Ayuda19/dashboard')

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-secondary-800 tracking-tight">Portal Central</h1>
        <p className="text-secondary-600">Bienvenido al hub de herramientas de AYUDA19. Elegí a dónde querés ir:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portalLinks.map((link, idx) => {
           const Icon = link.icon
           if (link.disabled) {
             return (
               <div key={idx} className="bg-white/50 border border-secondary-200 rounded-xl p-6 flex flex-col items-start gap-4 opacity-75 cursor-not-allowed">
                 <div className="p-3 bg-secondary-100 rounded-lg grayscale">
                   <Icon className="w-8 h-8 text-secondary-400" />
                 </div>
                 <div>
                   <h3 className="text-lg font-semibold text-secondary-800">{link.label}</h3>
                   <p className="text-sm text-secondary-500 mt-1">{link.description}</p>
                 </div>
               </div>
             )
           }

           return (
             <a key={idx} href={link.href} className="bg-white border border-secondary-200 rounded-xl p-6 flex flex-col items-start gap-4 transition-all hover:shadow-md hover:border-primary-400 group">
               <div className="p-3 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                 <Icon className="w-8 h-8 text-primary-500" />
               </div>
               <div>
                 <h3 className="text-lg font-semibold text-secondary-800">{link.label}</h3>
                 <p className="text-sm text-secondary-600 mt-1">{link.description}</p>
               </div>
             </a>
           )

        })}
      </div>
    </div>
  )
}
