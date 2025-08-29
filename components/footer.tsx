import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-secondary-800 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 relative">
                <Image src="/logo-19-agosto.png" alt="Logo 19 de Agosto" fill className="object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-primary-300">19 de Agosto</h3>
                <p className="text-sm text-secondary-300">UTN FRBA</p>
              </div>
            </div>
            <p className="text-secondary-300">
              Agrupación política interclaustro comprometida con el desarrollo profesional de lxs ingenierxs para el
              desarrollo nacional.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-300">Contacto</h4>
            <div className="space-y-2 text-secondary-300">
              <a
                href="mailto:19deagosto.utn@gmail.com"
                className="flex items-center hover:text-primary-300 transition-colors cursor-pointer"
              >
                📧 19deagosto.utn@gmail.com
              </a>
              <a
                href="https://www.instagram.com/19deagosto.utn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary-300 transition-colors cursor-pointer"
              >
                📱 @19deagosto.utn
              </a>
              <a
                href="https://maps.app.goo.gl/qybbmBu2V4fYtGSHA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary-300 transition-colors cursor-pointer"
              >
                🏢 UTN FRBA - Medrano 951
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-300">Recursos</h4>
            <div className="space-y-2">
              <a
                href="https://public.tableau.com/views/HablemosDePlata-RemuneracionesenIngenieraJUN25/Sobrelosdatos?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-secondary-300 hover:text-primary-300 transition-colors"
              >
                Metodología
              </a>
              <a
                href="https://public.tableau.com/app/profile/19deagosto.utn/vizzes"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-secondary-300 hover:text-primary-300 transition-colors"
              >
                Relevamientos anteriores
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-400">
          <p>&copy; 2025 Agrupación 19 de Agosto - UTN FRBA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
