import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-secondary-800 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-14">
          {/* Bloque logo e info izquierda */}
          <div className="flex-1 min-w-[250px] md:max-w-[420px]">
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
              Agrupación política interclaustro de la UTN FRBA. Más de 15 años impulsando una gran UTN para la grandeza nacional.
            </p>
          </div>
          {/* Bloque contacto derecha */}
          <div className="flex-1 min-w-[220px] md:max-w-[340px] md:text-right">
            <h4 className="font-semibold mb-4 text-primary-300">Contacto</h4>
            <div className="space-y-2 text-secondary-300 flex flex-col md:items-end">
              <a
                href="mailto:19deagosto.utn@gmail.com"
                className="flex items-center hover:text-primary-300 transition-colors cursor-pointer md:justify-end"
              >
                📧 19deagosto.utn@gmail.com
              </a>
              <a
                href="https://www.instagram.com/19deagosto.utn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary-300 transition-colors cursor-pointer md:justify-end"
              >
                📱 @19deagosto.utn
              </a>
              <a
                href="https://maps.app.goo.gl/qybbmBu2V4fYtGSHA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary-300 transition-colors cursor-pointer md:justify-end"
              >
                🏢 UTN FRBA - Medrano 951
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-400">
          <p>&copy; 2026 Agrupación 19 de Agosto - UTN FRBA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
