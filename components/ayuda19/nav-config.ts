import { 
  UserCircle, 
  GraduationCap, 
  BookOpen, 
  MessageCircle, 
  Star, 
  ShoppingBag, 
  LayoutDashboard, 
  HelpCircle,
  LucideIcon
} from 'lucide-react'

export type PortalNavItem = {
  href: string
  label: string
  description: string
  icon: LucideIcon
  disabled?: boolean
}

export const PORTAL_NAV_ITEMS: PortalNavItem[] = [
  { 
    href: '/Ayuda19/dashboard', 
    label: 'Inicio', 
    description: 'Panel principal y acceso rápido a herramientas.',
    icon: LayoutDashboard 
  },
  { 
    href: '/Ayuda19/perfil', 
    label: 'Mi Perfil', 
    description: 'Gestioná tus datos personales y estado académico.',
    icon: UserCircle 
  },
  { 
    href: '/Ayuda19/roadmap', 
    label: 'Seguimiento de Plan', 
    description: 'Analizá tus correlativas y marcá materias aprobadas.',
    icon: GraduationCap 
  },
  { 
    href: '/Ayuda19/material', 
    label: 'Material de Estudio', 
    description: 'Resúmenes, finales y apuntes de tu carrera.',
    icon: BookOpen 
  },
  { 
    href: '/Ayuda19/grupos', 
    label: 'Grupos de WhatsApp', 
    description: 'Enlaces directos a grupos actualizados por materias.',
    icon: MessageCircle 
  },
  {
    href: '/Ayuda19/faq',
    label: 'Preguntas Frecuentes',
    description: 'Resolvé tus dudas sobre trámites, inscripciones y más.',
    icon: HelpCircle
  },
  { 
    href: '#opiniones', 
    label: 'Opiniones (Próximamente)', 
    description: 'Calificaciones y reseñas de cursadas con profesores.',
    icon: Star, 
    disabled: true 
  },
  { 
    href: '#tienda', 
    label: 'Tienda (Próximamente)', 
    description: 'Indumentaria, merchandising y reservas de apuntes.',
    icon: ShoppingBag, 
    disabled: true 
  },
]
