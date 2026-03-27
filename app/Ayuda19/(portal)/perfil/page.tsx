import { ProfileForm } from '@/components/ayuda19/profile-form'

export default function PerfilPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-secondary-800 tracking-tight">Mi Perfil</h1>
        <p className="text-secondary-600">Actualizá tus datos académicos desde acá.</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6 md:p-8">
        <ProfileForm />
      </div>
    </div>
  )
}
