"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, Users } from "lucide-react"

export function VotingSection() {
  return (
    <section id="asamblea" className="py-16 bg-gradient-to-br from-[#f4f8fb] to-[#fffde7]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-[#1a2a3a]">Asamblea de Elección de Decano</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white rounded-xl shadow-md border border-[#e0e7ef]">
            <CardContent className="p-6 flex flex-col items-center">
              <MapPin className="h-7 w-7 text-[#00508a] mb-2" />
              <div className="text-lg font-bold text-[#00508a] mb-1">¿Dónde?</div>
              <div className="text-[#4b5e6b] text-base">UTN FRBA - Medrano 951</div>
            </CardContent>
          </Card>
          <Card className="bg-white rounded-xl shadow-md border border-[#e0e7ef]">
            <CardContent className="p-6 flex flex-col items-center">
              <Calendar className="h-7 w-7 text-[#ffb300] mb-2" />
              <div className="text-lg font-bold text-[#00508a] mb-1">¿Cuándo?</div>
              <div className="text-[#4b5e6b] text-base">10 de Septiembre</div>
            </CardContent>
          </Card>
          <Card className="bg-white rounded-xl shadow-md border border-[#e0e7ef]">
            <CardContent className="p-6 flex flex-col items-center">
              <Users className="h-7 w-7 text-[#00508a] mb-2" />
              <div className="text-lg font-bold text-[#00508a] mb-1">¿Quiénes votan?</div>
              <div className="text-[#4b5e6b] text-base">Los asambleístas</div>
            </CardContent>
          </Card>
        </div>
        <div className="bg-white rounded-xl shadow-md border border-[#e0e7ef] p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-[#1a2a3a] mb-2">Composición de la Asamblea</h3>
          <p className="mb-3 text-[#1a2a3a]">La <span className="font-bold">asamblea</span> está compuesta por:</p>
          <ul className="list-disc pl-5 text-[#1a2a3a] mb-4">
            <li>El decano actual</li>
            <li>Los directores de departamento</li>
            <li>Todos los consejeros titulares del consejo directivo</li>
            <li>Todos los consejeros titulares de los consejos departamentales</li>
          </ul>
          <div className="bg-[#eaf2ff] rounded-md p-3 text-sm text-[#00508a] mt-2">
            <span className="font-semibold">Nota importante:</span> Los consejeros departamentales suplentes votan en el caso de que un consejero titular departamental también lo sea en el directivo. Los consejeros directivos suplentes votan si su consejero titular fuera, a su vez, director de un departamento.
          </div>
        </div>
      </div>
    </section>
  )
}
