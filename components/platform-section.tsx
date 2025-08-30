"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Trophy, Globe, BookOpen, ExternalLink } from "lucide-react"

export function PlatformSection() {
  return (
    <section id="plataforma" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-6">
          <span className="inline-block bg-[#ffb300] text-[#00508a] font-semibold rounded-md px-5 py-2 mb-4 text-base shadow-sm">Plataforma Electoral 2025</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#00508a] text-center mb-4">Un Nuevo Ciclo en la UTN FRBA</h1>
          <p className="text-lg md:text-xl text-[#4b5e6b] text-center mb-8 max-w-3xl">
            Esta propuesta nace con un objetivo claro: impulsar una Facultad moderna, comprometida con la excelencia académica, la innovación y el bienestar de toda la comunidad.
          </p>
          <Button asChild className="bg-[#00508a] text-white font-bold px-6 py-2 rounded-md text-base mb-8 hover:bg-[#003a60]">
            <a href="https://drive.google.com/file/d/1Ei272gZ2D5dT57bwyhupoaoX1a_B2kIH/view" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              Leer la Plataforma Completa
            </a>
          </Button>
        </div>
        {/* Segunda parte de la plataforma */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <Card className="bg-[#f4f8fb] border border-[#dbeafe] rounded-xl shadow-sm">
            <CardHeader className="flex flex-row items-center gap-3 bg-transparent p-6 pb-2">
              <Users className="h-7 w-7 text-[#00508a] bg-[#eaf2f8] rounded-md p-1" />
              <CardTitle className="text-lg font-bold text-[#00508a]">Docencia: Evolucionar sin perder lo valioso</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4 px-6">
              <p className="text-[#4b5e6b] mb-3">Transformación pedagógica que respete nuestra historia y potencie el futuro</p>
              <ul className="space-y-1">
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Formación pedagógica continua para docentes</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Incorporación progresiva de métodos activos</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Uso criterioso de nuevas tecnologías e IA</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Flexibilidad académica sin sacrificar calidad</span></li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-[#f4f8fb] border border-[#dbeafe] rounded-xl shadow-sm">
            <CardHeader className="flex flex-row items-center gap-3 bg-transparent p-6 pb-2">
              <Trophy className="h-7 w-7 text-[#00508a] bg-[#eaf2f8] rounded-md p-1" />
              <CardTitle className="text-lg font-bold text-[#00508a]">Bienestar Estudiantil Integral</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4 px-6">
              <p className="text-[#4b5e6b] mb-3">Red modelo de atención integral para toda la comunidad estudiantil</p>
              <ul className="space-y-1">
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Apoyo psicológico y orientación vocacional</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Puntos de Encuentro Estudiantil en toda la FRBA</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Ayuda económica de emergencia</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Actividades culturales y recreativas</span></li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-[#f4f8fb] border border-[#dbeafe] rounded-xl shadow-sm">
            <CardHeader className="flex flex-row items-center gap-3 bg-transparent p-6 pb-2">
              <Users className="h-7 w-7 text-[#00508a] bg-[#eaf2f8] rounded-md p-1" />
              <CardTitle className="text-lg font-bold text-[#00508a]">Investigación y Desarrollo con Impacto</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4 px-6">
              <p className="text-[#4b5e6b] mb-3">Laboratorios colaborativos e incubadoras para prototipos tecnológicos</p>
              <ul className="space-y-1">
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Laboratorios interdisciplinarios abiertos</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Fondo de estímulo a proyectos I+D+i</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Inclusión temprana de estudiantes en investigación</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Redes con CONICET, INTI y organismos similares</span></li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-[#f4f8fb] border border-[#dbeafe] rounded-xl shadow-sm">
            <CardHeader className="flex flex-row items-center gap-3 bg-transparent p-6 pb-2">
              <Trophy className="h-7 w-7 text-[#00508a] bg-[#eaf2f8] rounded-md p-1" />
              <CardTitle className="text-lg font-bold text-[#00508a]">Vinculación con la Industria y el Territorio</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4 px-6">
              <p className="text-[#4b5e6b] mb-3">Campus Abierto para colaboración con startups, PYMEs y cámaras sectoriales</p>
              <ul className="space-y-1">
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Espacios compartidos de trabajo y mentoría</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Convenios dinámicos con empresas</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Redes territoriales: 'FRBA en la ciudad'</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Transferencia tecnológica e innovación aplicada</span></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#f4f8fb] border border-[#dbeafe] rounded-xl shadow-sm">
            <CardHeader className="flex flex-row items-center gap-3 bg-transparent p-6 pb-2">
              <Users className="h-7 w-7 text-[#00508a] bg-[#eaf2f8] rounded-md p-1" />
              <CardTitle className="text-lg font-bold text-[#00508a]">Igualdad de Género e Inclusión Universitaria</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4 px-6">
              <p className="text-[#4b5e6b] mb-3">Fortalecimiento de políticas de género y diversidad en ingeniería</p>
              <ul className="space-y-1">
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Diagnóstico institucional y seguimiento</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Becas y tutorías para mujeres y diversidades</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Protocolos y espacios seguros</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Campañas de visibilización y prevención</span></li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-[#f4f8fb] border border-[#dbeafe] rounded-xl shadow-sm">
            <CardHeader className="flex flex-row items-center gap-3 bg-transparent p-6 pb-2">
              <Trophy className="h-7 w-7 text-[#00508a] bg-[#eaf2f8] rounded-md p-1" />
              <CardTitle className="text-lg font-bold text-[#00508a]">Deporte, Cultura e Identidad Universitaria</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4 px-6">
              <p className="text-[#4b5e6b] mb-3">Formación integral que potencie cuerpo, mente y comunidad</p>
              <ul className="space-y-1">
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Infraestructura deportiva y ligas interclaustro</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Programa de Cultura FRBA con talleres abiertos</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Espacios de exposición y expresión cultural</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Jornadas de Identidad Tecnológica FRBA</span></li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-[#f4f8fb] border border-[#dbeafe] rounded-xl shadow-sm">
            <CardHeader className="flex flex-row items-center gap-3 bg-transparent p-6 pb-2">
              <Globe className="h-7 w-7 text-[#00508a] bg-[#eaf2f8] rounded-md p-1" />
              <CardTitle className="text-lg font-bold text-[#00508a]">Vinculación Interuniversitaria y Federalismo UTN</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4 px-6">
              <p className="text-[#4b5e6b] mb-3">Fortalecimiento de lazos entre regionales y universidades nacionales</p>
              <ul className="space-y-1">
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Redes activas con otras regionales UTN</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Intercambios académicos entre sedes</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Alianzas con universidades públicas del país</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Participación en CONFEDI y redes globales</span></li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-[#f4f8fb] border border-[#dbeafe] rounded-xl shadow-sm">
            <CardHeader className="flex flex-row items-center gap-3 bg-transparent p-6 pb-2">
              <BookOpen className="h-7 w-7 text-[#00508a] bg-[#eaf2f8] rounded-md p-1" />
              <CardTitle className="text-lg font-bold text-[#00508a]">Políticas en Extensión Universitaria</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4 px-6">
              <p className="text-[#4b5e6b] mb-3">Integración de la universidad con la sociedad y el desarrollo territorial</p>
              <ul className="space-y-1">
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Programas de extensión con impacto social</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Articulación académica con sectores productivos</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Investigación aplicada a problemáticas locales</span></li>
                <li className="flex items-start gap-2"><span className="mt-[0.5em] w-2 h-2 rounded-full bg-[#ffb300] inline-block"></span><span>Transferencia de conocimiento a la comunidad</span></li>
              </ul>
            </CardContent>
          </Card>
        </div>
        {/* Bloque de compromiso institucional */}
        <div className="bg-[#f4f8fb] rounded-xl mt-12 py-8 px-4 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#00508a] mb-2">Nuestro Compromiso</h3>
          <p className="text-[#4b5e6b] text-lg max-w-2xl mx-auto">
            No creemos en soluciones mágicas ni en gestos vacíos. Creemos en el trabajo serio, en el diálogo entre generaciones y en la gestión como herramienta de transformación.
          </p>
        </div>
      </div>
    </section>
  )
}
