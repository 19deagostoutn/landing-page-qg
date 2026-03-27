import Link from 'next/link'
import { GraduationCap, School, UserCircle, BookOpen, MessageCircle, Star, ShoppingBag } from 'lucide-react'

export default function Ayuda19DashboardHub() {
  const portalLinks = [
    {
      href: '/Ayuda19/perfil',
      label: 'Mi Perfil',
      icon: <UserCircle className="w-8 h-8 text-primary-500" />,
      description: 'Gestión de datos de tu cuenta estudiantil.'
    },
    {
      href: '/Ayuda19/roadmap',
      label: 'Seguimiento de Plan',
      icon: <GraduationCap className="w-8 h-8 text-primary-500" />,
      description: 'Roadmap interactivo para ver tu avance.'
    },
    {
      href: '/Ayuda19/aulas',
      label: 'Acceso a Aulas (SIU)',
      icon: <School className="w-8 h-8 text-primary-500" />,
      description: 'Links directos a campus virtual y guaraní.'
    },
    {
      href: '#',
      label: 'Material de Estudio',
      icon: <BookOpen className="w-8 h-8 text-primary-500" />,
      description: 'Próximamente: Resúmenes y apuntes.',
      disabled: true
    },
    {
      href: '#',
      label: 'Grupos de WhatsApp',
      icon: <MessageCircle className="w-8 h-8 text-primary-500" />,
      description: 'Próximamente: Enlaces por materias.',
      disabled: true
    },
    {
      href: '#',
      label: 'Opiniones de Profesores',
      icon: <Star className="w-8 h-8 text-primary-500" />,
      description: 'Próximamente: Sistema de reseñas.',
      disabled: true
    },
    {
      href: '#',
      label: 'Tienda Online',
      icon: <ShoppingBag className="w-8 h-8 text-primary-500" />,
      description: 'Próximamente: Merchandising.',
      disabled: true
    }
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-secondary-800 tracking-tight">Portal Central</h1>
        <p className="text-secondary-600">Bienvenido al hub de herramientas de AYUDA19. Elegí a dónde querés ir:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portalLinks.map((link, idx) => {
           if (link.disabled) {
             return (
               <div key={idx} className="bg-white/50 border border-secondary-200 rounded-xl p-6 flex flex-col items-start gap-4 opacity-75 cursor-not-allowed">
                 <div className="p-3 bg-secondary-100 rounded-lg grayscale">
                   {link.icon}
                 </div>
                 <div>
                   <h3 className="text-lg font-semibold text-secondary-800">{link.label}</h3>
                   <p className="text-sm text-secondary-500 mt-1">{link.description}</p>
                 </div>
               </div>
             )
           }

           return (
             <Link key={idx} href={link.href} className="bg-white border border-secondary-200 rounded-xl p-6 flex flex-col items-start gap-4 transition-all hover:shadow-md hover:border-primary-400 group">
               <div className="p-3 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                 {link.icon}
               </div>
               <div>
                 <h3 className="text-lg font-semibold text-secondary-800">{link.label}</h3>
                 <p className="text-sm text-secondary-600 mt-1">{link.description}</p>
               </div>
             </Link>
           )
        })}
      </div>
    </div>
  )
}
