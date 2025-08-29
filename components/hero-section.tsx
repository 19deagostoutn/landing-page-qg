"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="flex-1 flex items-center justify-center min-h-0 bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-100 w-full"
      style={{ minHeight: 0 }}
    >
      <div className="mx-auto px-4 flex flex-col items-center text-center">
        <img src="/logo-19-agosto.png" alt="19 de Agosto" className="h-24 w-auto mb-6 mx-auto" />
        <h1 className="text-5xl md:text-6xl font-bold text-secondary-800 mb-4">19 de Agosto</h1>
        <h2 className="text-xl md:text-2xl text-secondary-600 mb-8 font-medium">
          Agrupación interclaustro de la UTN FRBA desde el 2009
        </h2>
        <p className="text-lg text-secondary-700 mb-10 max-w-2xl mx-auto">
          Conocé algunos de nuestros proyectos y propuestas para la Facultad.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary-500 text-secondary-800 hover:bg-primary-600 font-semibold"
          >
            <a href="/jorge2025">Nuestro candidato a decano</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-secondary-400 text-secondary-700 hover:bg-secondary-50 bg-white/80"
          >
            <a href="/hablemos-de-plata">Hablemos de plata</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
