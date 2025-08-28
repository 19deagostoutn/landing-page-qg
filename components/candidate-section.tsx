"use client"


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, ExternalLink, Glasses } from "lucide-react"

export function CandidateSection() {
  return (
    <section id="candidato" className="py-20 bg-[#fafcfd]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#00508a] mb-4">Jorge Schneebeli</h2>
        <p className="text-lg md:text-xl text-[#4b5e6b] mb-10 max-w-2xl mx-auto">
          Candidato a Decano por la agrupación <span className="font-bold text-[#ffb300]">19 de Agosto</span>. Una trayectoria de más de 35 años comprometida con la excelencia técnica y la innovación.
        </p>
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="relative inline-block mb-6">
            <img src="/images/jorge-schneebeli.webp" alt="Jorge Schneebeli" className="rounded-2xl shadow-xl w-64 h-64 object-cover mx-auto" />
            <div className="absolute -bottom-4 -right-4 bg-[#ffb300] text-[#00508a] px-4 py-2 rounded-lg font-semibold shadow-lg">
                  19 de Agosto
                </div>
          </div>
        </div>
        <div className="bg-[#eaf2f8] rounded-xl p-8 max-w-3xl mx-auto mt-4">
          <h3 className="text-xl font-bold text-[#00508a] mb-2">Compromiso Histórico</h3>
          <p className="text-[#4b5e6b] text-base">
            Más de 15 años de trabajo sostenido en el departamento de Ingeniería Mecánica.<br />
            Una trayectoria coherente en defensa de la universidad pública, gratuita, inclusiva y de calidad.
          </p>
        </div>
        {/* Información distribuida en el ancho */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Experiencia Profesional */}
          <Card className="bg-white border border-[#dbeafe] rounded-xl shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-[#00508a] mb-6">Experiencia Profesional</h3>
              <div className="space-y-6">
                {/* Cada experiencia */}
                <div className="border-l-4 border-[#00508a] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-[#ffb300] text-[#00508a] font-bold">2 años</Badge>
                    <h4 className="font-semibold text-[#00508a] text-base">Especialista en Ensayos No Destructivos</h4>
                  </div>
                  <p className="text-[#4b5e6b] text-sm mb-1">Instituto Nacional de Tecnología Industrial</p>
                  <p className="text-xs text-[#4b5e6b]">2024 - actualidad</p>
                </div>
                <div className="border-l-4 border-[#ffb300] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-[#00508a] text-[#ffb300] font-bold">2 años</Badge>
                    <h4 className="font-semibold text-[#00508a] text-base">Vicepresidente INTI</h4>
                  </div>
                  <p className="text-[#4b5e6b] text-sm mb-1">Instituto Nacional de Tecnología Industrial</p>
                  <p className="text-xs text-[#4b5e6b]">2022 - 2024</p>
                </div>
                <div className="border-l-4 border-[#00508a] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-[#ffb300] text-[#00508a] font-bold">4 años</Badge>
                    <h4 className="font-semibold text-[#00508a] text-base">Responsable del Laboratorio de Métodos Volumétricos</h4>
                  </div>
                  <p className="text-[#4b5e6b] text-sm mb-1">Departamento de END, INTI</p>
                  <p className="text-xs text-[#4b5e6b]">2018 - 2022</p>
                </div>
                <div className="border-l-4 border-[#ffb300] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-[#00508a] text-[#ffb300] font-bold">6 años</Badge>
                    <h4 className="font-semibold text-[#00508a] text-base">Gerencia de Proyectos Especiales</h4>
                  </div>
                  <p className="text-[#4b5e6b] text-sm mb-1">Instituto Nacional de Tecnología Industrial</p>
                  <p className="text-xs text-[#4b5e6b]">2012 - 2018</p>
                </div>
                <div className="border-l-4 border-[#00508a] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-[#ffb300] text-[#00508a] font-bold">13 años</Badge>
                    <h4 className="font-semibold text-[#00508a] text-base">Director Centro I+D</h4>
                  </div>
                  <p className="text-[#4b5e6b] text-sm mb-1">Centro de Investigación y Desarrollo en Mecánica - INTI</p>
                  <p className="text-xs text-[#4b5e6b]">2005 - 2018</p>
                </div>
                <div className="border-l-4 border-[#ffb300] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-[#00508a] text-[#ffb300] font-bold">15 años</Badge>
                    <h4 className="font-semibold text-[#00508a] text-base">Unidad Técnica de Ensayos No Destructivos</h4>
                  </div>
                  <p className="text-[#4b5e6b] text-sm mb-1">Centro de Investigación y Desarrollo en Mecánica - INTI</p>
                  <p className="text-xs text-[#4b5e6b]">1990 - 2005</p>
                </div>
                <div className="border-l-4 border-[#00508a] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-[#ffb300] text-[#00508a] font-bold">2 años</Badge>
                    <h4 className="font-semibold text-[#00508a] text-base">Becario en el Departamento de Mecánica</h4>
                  </div>
                  <p className="text-[#4b5e6b] text-sm mb-1">Instituto Nacional de Tecnología Industrial</p>
                  <p className="text-xs text-[#4b5e6b]">1989 - 1990</p>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Actividad Docente */}
          <Card className="bg-white border border-[#dbeafe] rounded-xl shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-[#00508a] mb-6">Actividad Docente</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[#ffb300] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-[#00508a] text-[#ffb300] font-bold">4 años</Badge>
                    <h4 className="font-semibold text-[#00508a] text-base">Codirector de Carrera Ingeniería Industrial - UNSAM</h4>
                  </div>
                  <p className="text-[#4b5e6b] text-xs mb-1">2021 - actualidad</p>
                </div>
                <div className="border-l-4 border-[#00508a] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-[#ffb300] text-[#00508a] font-bold">11 años</Badge>
                    <h4 className="font-semibold text-[#00508a] text-base">Consejero docente del Consejo Departamental de Mecánica, UTN FRBA</h4>
                  </div>
                  <p className="text-[#4b5e6b] text-xs mb-1">2014 - actualidad</p>
                </div>
                <div className="border-l-4 border-[#ffb300] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-[#00508a] text-[#ffb300] font-bold">14 años</Badge>
                    <h4 className="font-semibold text-[#00508a] text-base">Docente de Mediciones y Ensayos, Ingeniería Mecánica, UTN FRBA</h4>
                  </div>
                  <p className="text-[#4b5e6b] text-xs mb-1">2011 - actualidad</p>
                </div>
                <div className="border-l-4 border-[#00508a] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-[#ffb300] text-[#00508a] font-bold">11 años</Badge>
                    <h4 className="font-semibold text-[#00508a] text-base">Docente de Calidad en la Industria Metalmecánica, Ingeniería Industrial, UNSAM</h4>
                  </div>
                  <p className="text-[#4b5e6b] text-xs mb-1">2014 - actualidad</p>
                </div>
                <div className="border-l-4 border-[#ffb300] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-[#00508a] text-[#ffb300] font-bold">6 años</Badge>
                    <h4 className="font-semibold text-[#00508a] text-base">Docente de Procesos Industriales, Ingeniería Industrial, UNSAM</h4>
                  </div>
                  <p className="text-[#4b5e6b] text-xs mb-1">2013 - 2018</p>
                </div>
                <div className="border-l-4 border-[#00508a] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-[#ffb300] text-[#00508a] font-bold">26 años</Badge>
                    <h4 className="font-semibold text-[#00508a] text-base">Docente en la carrera de Especialización en Calidad Industrial, INCALIN, UNSAM</h4>
                  </div>
                  <p className="text-[#4b5e6b] text-xs mb-1">1999 - actualidad</p>
                </div>
                <div className="border-l-4 border-[#ffb300] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-[#00508a] text-[#ffb300] font-bold">25 años</Badge>
                    <h4 className="font-semibold text-[#00508a] text-base">Tutor a cargo de becarios y prácticas profesionales supervisadas en el INTI</h4>
                  </div>
                  <p className="text-[#4b5e6b] text-xs mb-1">2000 - actualidad</p>
                </div>
                <div className="border-l-4 border-[#00508a] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-[#ffb300] text-[#00508a] font-bold">34 años</Badge>
                    <h4 className="font-semibold text-[#00508a] text-base">Capacitador según norma IRAM NM ISO 9712 en Métodos No Destructivos</h4>
                  </div>
                  <p className="text-[#4b5e6b] text-xs mb-1">1991 - actualidad</p>
                </div>
                <div className="border-l-4 border-[#ffb300] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-[#00508a] text-[#ffb300] font-bold">8 años</Badge>
                    <h4 className="font-semibold text-[#00508a] text-base">Ayudante de laboratorio de Mediciones y Ensayos, Ingeniería Mecánica, UTN FRBA</h4>
                  </div>
                  <p className="text-[#4b5e6b] text-xs mb-1">2003 - 2010</p>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Formación Académica y Cursos */}
          <Card className="bg-white border border-[#dbeafe] rounded-xl shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-[#00508a] mb-6">Formación Académica</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#eaf2f8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-[#00508a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#00508a] text-base">Ingeniero Mecánico</h4>
                    <p className="text-[#4b5e6b] text-xs">mar. 1989 - ago. 1995</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#fff8e1] rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-[#ffb300]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#00508a] text-base">Especialista en Calidad Industrial</h4>
                    <p className="text-[#4b5e6b] text-xs">mar. 1999 - dic. 2000</p>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#00508a] mt-8 mb-6">Cursos realizados</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#eaf2f8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Glasses className="h-6 w-6 text-[#00508a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#00508a] text-base">Introducción a la Industria 4.0 y sus Tecnologías Habilitadoras - INCALIN - UNSAM</h4>
                    <p className="text-[#4b5e6b] text-xs">2021</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#eaf2f8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Glasses className="h-6 w-6 text-[#00508a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#00508a] text-base">Introducción a la Mejora Continua - INTI</h4>
                    <p className="text-[#4b5e6b] text-xs">2015</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#eaf2f8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Glasses className="h-6 w-6 text-[#00508a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#00508a] text-base">Capacitación en Gestión Institucional, Planeamiento Estratégico - INTI</h4>
                    <p className="text-[#4b5e6b] text-xs">2010, 40h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#eaf2f8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Glasses className="h-6 w-6 text-[#00508a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#00508a] text-base">Capacitación en Gestión Institucional, Conducción de Equipos de Trabajo - INTI</h4>
                    <p className="text-[#4b5e6b] text-xs">2009, 14h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#eaf2f8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Glasses className="h-6 w-6 text-[#00508a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#00508a] text-base">Capacitación en Gestión Institucional, Estado y Servicio Público - INTI</h4>
                    <p className="text-[#4b5e6b] text-xs">2009, 14h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#eaf2f8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Glasses className="h-6 w-6 text-[#00508a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#00508a] text-base">Capacitación en Gestión Institucional, Modelos Organizacionales de Gestión - INTI</h4>
                    <p className="text-[#4b5e6b] text-xs">2009, 14h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#eaf2f8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Glasses className="h-6 w-6 text-[#00508a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#00508a] text-base">Capacitación en Gestión Institucional, Interacciones Efectivas - INTI</h4>
                    <p className="text-[#4b5e6b] text-xs">2009, 16h</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8 pt-6">
          <Button asChild className="bg-[#004b87] text-[#fff] hover:bg-primary/90">
            <a
              href="https://drive.google.com/file/d/1FildJBX5U-jdOq-PcMmlWG4M7odLoUt1/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              Ver currículum completo
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
        </div>
     </section>
  )
}
