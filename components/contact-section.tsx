"use client"
import { Mail, MapPin, Instagram } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contacto</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Conectate con nosotros para más información sobre nuestra propuesta.
          </p>

          <div className="bg-primary text-primary-foreground rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <MapPin className="h-6 w-6 mb-2" />
                <p className="font-semibold">UTN FRBA</p>
                <button
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity underline"
                  onClick={() => window.open("https://maps.google.com/?q=Medrano+951,+CABA", "_blank")}
                >
                  Medrano 951, CABA
                </button>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-6 w-6 mb-2" />
                <p className="font-semibold">Email</p>
                <button
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity underline"
                  onClick={() => window.open("mailto:19deagosto.utn@gmail.com")}
                >
                  19deagosto.utn@gmail.com
                </button>
              </div>
              <div className="flex flex-col items-center">
                <Instagram className="h-6 w-6 mb-2" />
                <p className="font-semibold">Instagram</p>
                <button
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity underline"
                  onClick={() => window.open("https://instagram.com/19deagosto.utn", "_blank")}
                >
                  @19deagosto.utn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
