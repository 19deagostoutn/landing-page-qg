"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSectionJorge() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-[#fafcfd] pt-5"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#00508a] mb-6 leading-tight">Prepararnos para el Futuro</h1>
          <p className="text-xl md:text-2xl text-[#4b5e6b] mb-8 leading-relaxed">
            Un nuevo ciclo en la UTN FRBA. <br />
            <span className="text-[#00508a] font-bold">Jorge Schneebeli</span> por la agrupación {" "}
            <span className="text-[#ffb300] font-bold">19 de Agosto</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-[#00508a] text-white hover:bg-[#003e6b] px-8 py-4 text-lg font-bold shadow-none border-0"
              onClick={() => scrollToSection("plataforma")}
            >
              Conocé la Plataforma
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#ffb300] text-[#ffb300] hover:bg-[#ffb300]/10 hover:text-[#00508a] px-8 py-4 text-lg font-bold bg-transparent shadow-none"
              onClick={() => scrollToSection("candidato")}
            >
              Sobre el Candidato
            </Button>
          </div>

          <div className="bg-[#f3f7fa] rounded-lg p-6 max-w-2xl mx-auto border border-[#e3e8ee]">
            <p className="text-[#00508a] font-medium text-lg mb-2">
              "La Universidad está cambiando. Es momento de evolucionar lo valioso y animarnos a hacer las cosas de otra manera."
            </p>
            <p className="text-[#4b5e6b]">- Jorge Schneebeli, Candidato a Decano UTN FRBA</p>
          </div>

          <div className="mt-12">
            <button
              onClick={() => scrollToSection("candidato")}
              className="text-[#00508a] hover:text-[#003e6b] transition-colors animate-bounce"
              aria-label="Ir a Sobre el Candidato"
            >
              <ArrowDown className="h-8 w-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
