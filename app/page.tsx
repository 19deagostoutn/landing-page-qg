"use client"

import {
  ArrowRight,
  BarChart3,
  Users,
  TrendingUp,
  ExternalLink,
  GraduationCap,
  MapPin,
  Calendar,
  Briefcase,
  DollarSign,
  Award,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

// Componente de Rating con Estrellas
function StarRating({ score, label }: { score: number; label: string }) {
  const stars = []

  for (let i = 1; i <= 5; i++) {
    let fill = 0
    if (score >= i) {
      fill = 100
    } else if (score > i - 1) {
      fill = (score - (i - 1)) * 100
    }

    stars.push(
      <span
        key={i}
        className="relative text-xl text-gray-300"
        style={{
          background: `linear-gradient(90deg, #f0cb2a ${fill}%, transparent ${fill}%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        ★
      </span>,
    )
  }

  return (
    <div className="flex items-center justify-between w-full py-1">
      <span className="text-secondary-600 text-sm font-medium flex-1">{label}</span>
      <div className="flex gap-1 ml-4">{stars}</div>
      <span className="text-secondary-800 font-semibold ml-3 text-sm min-w-[2.5rem]">{score.toFixed(1)}</span>
    </div>
  )
}

export default function LandingPage() {
  const carrerasData = [
    {
      carrera: "Civil",
      porcentaje: 39.73,
      niveles: {
        inicial: 8.05,
        avanzado: 40.23,
        finalizada: 21.84,
        graduadx: 23.85,
        posgrado: 6.03,
      },
    },
    {
      carrera: "Industrial",
      porcentaje: 12.79,
      niveles: {
        inicial: 13.39,
        avanzado: 45.54,
        finalizada: 16.07,
        graduadx: 20.54,
        posgrado: 4.47,
      },
    },
    {
      carrera: "Mecánica",
      porcentaje: 12.9,
      niveles: {
        inicial: 11.5,
        avanzado: 24.78,
        finalizada: 22.12,
        graduadx: 29.2,
        posgrado: 12.38,
      },
    },
    {
      carrera: "Electrónica",
      porcentaje: 9.59,
      niveles: {
        inicial: 9.52,
        avanzado: 42.86,
        finalizada: 19.05,
        graduadx: 26.19,
        posgrado: 2.38,
      },
    },
    {
      carrera: "Sistemas",
      porcentaje: 7.65,
      niveles: {
        inicial: 38.81,
        avanzado: 37.31,
        finalizada: 10.45,
        graduadx: 11.94,
        posgrado: 1.49,
      },
    },
    {
      carrera: "Química",
      porcentaje: 7.31,
      niveles: {
        inicial: 9.38,
        avanzado: 43.75,
        finalizada: 18.75,
        graduadx: 17.19,
        posgrado: 10.94,
      },
    },
    {
      carrera: "Eléctrica",
      porcentaje: 5.25,
      niveles: {
        inicial: 13.04,
        avanzado: 23.91,
        finalizada: 19.57,
        graduadx: 34.78,
        posgrado: 8.7,
      },
    },
    {
      carrera: "Ambiental",
      porcentaje: 1.94,
      niveles: {
        inicial: 5.88,
        avanzado: 52.94,
        finalizada: 29.41,
        graduadx: 5.88,
        posgrado: 5.88,
      },
    },
    {
      carrera: "Electromecánica",
      porcentaje: 1.71,
      niveles: {
        inicial: 6.67,
        avanzado: 20.0,
        finalizada: 6.67,
        graduadx: 60.0,
        posgrado: 6.67,
      },
    },
    {
      carrera: "Otras",
      porcentaje: 1.14,
      niveles: {
        inicial: 30.0,
        avanzado: 10.0,
        finalizada: 20.0,
        graduadx: 40.0,
        posgrado: 0.0,
      },
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-100">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-secondary-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 relative">
                <Image src="/logo-19-agosto.png" alt="Logo 19 de Agosto" fill className="object-contain" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-secondary-800">19 de Agosto</h1>
                <p className="text-sm text-secondary-600">UTN FRBA</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-6">
                <a href="#resultados" className="text-secondary-600 hover:text-secondary-800 transition-colors">
                  Resultados
                </a>
                <a href="#analisis" className="text-secondary-600 hover:text-secondary-800 transition-colors">
                  Análisis
                </a>
                <a href="#dashboard-section" className="text-secondary-600 hover:text-secondary-800 transition-colors">
                  Dashboard
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-primary-500 text-secondary-800 hover:bg-primary-600 border-0">
            Hablemos De Plata 2025
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-800 mb-6">
            <span className="bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text text-transparent">
              Hablemos De Plata
            </span>
            <br />
            <span className="text-secondary-700">Remuneraciones en Ingeniería</span>
          </h1>
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            El primer relevamiento integral sobre remuneraciones en ingeniería realizado por estudiantes y graduadxs de
            ingeniería. Datos reales, análisis transparente, futuro claro, acceso gratuito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800 text-white"
              onClick={() => {
                const dashboardSection = document.getElementById("dashboard-section")
                dashboardSection?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              Ver Dashboard Interactivo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary-400 text-secondary-700 hover:bg-secondary-50 bg-white/80"
              onClick={() => {
                const analisisSection = document.getElementById("analisis")
                analisisSection?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <Target className="w-5 h-5 mr-2" />
              Ver Análisis Completo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="resultados" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">Resultados Destacados</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Algunos números del relevamiento realizado entre profesionales de ingeniería
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-l-4 border-l-secondary-500 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-secondary-700">
                  <Users className="w-6 h-6 mr-2 text-secondary-600" />
                  Participantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary-800 mb-2">≈ 1000</div>
                <p className="text-secondary-600">Trabajadores de ingeniería encuestadxs</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary-500 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-secondary-700">
                  <TrendingUp className="w-6 h-6 mr-2 text-primary-600" />
                  Salario Promedio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary-800 mb-2">$1,6M</div>
                <p className="text-secondary-600">Remuneración mensual neta</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary-600 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-secondary-700">
                  <BarChart3 className="w-6 h-6 mr-2 text-primary-600" />
                  Especialidades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary-800 mb-2">9</div>
                <p className="text-secondary-600">Ramas de ingeniería analizadas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-secondary-800 mb-12 text-center">Hallazgos Principales</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-secondary-200">
              <CardHeader className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white rounded-t-lg">
                <CardTitle>Trabajo y Compensación</CardTitle>
                <CardDescription className="text-secondary-100">Mediana de remuneración mensual</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600">Ing. Civil</span>
                  <span className="font-semibold text-secondary-800">$1350K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600">Ing. Sistemas</span>
                  <span className="font-semibold text-secondary-800">$1400K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600">Ing. Química</span>
                  <span className="font-semibold text-secondary-800">$1500K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600">Ing. Electrónica</span>
                  <span className="font-semibold text-secondary-800">$1600K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600">Ing. Industrial</span>
                  <span className="font-semibold text-secondary-800">$1700K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600">Ing. Mecánica</span>
                  <span className="font-semibold text-secondary-800">$1700K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600">Ing. Electromecánica</span>
                  <span className="font-semibold text-secondary-800">$1800K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600">Ing. Eléctrica</span>
                  <span className="font-semibold text-secondary-800">$2300K</span>
                </div>
              </CardContent>

            </Card>
            <Card className="hover:shadow-xl transition-shadow border-secondary-200">
              <CardHeader className="bg-gradient-to-r from-secondary-600 to-secondary-700 text-white rounded-t-lg">
                <CardTitle>Satisfacción con el lugar de Trabajo</CardTitle>
                <CardDescription className="text-secondary-100">Puntaje de 5</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-6">
                <StarRating score={3.95} label="Asociación Civil" />
                <StarRating score={4.9} label="Empresa Cooperativa" />
                <StarRating score={4.32} label="Empresa Extranjera" />
                <StarRating score={3.92} label="Empresa Multinacional" />
                <StarRating score={4.16} label="Empresa Nacional Grande" />
                <StarRating score={3.93} label="Empresa Nacional PyME" />
                <StarRating score={3.58} label="Estado" />
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-secondary-200">
              <CardHeader className="bg-gradient-to-r from-primary-500 to-primary-600 text-secondary-800 rounded-t-lg">
                <CardTitle>Modalidad de Trabajo</CardTitle>
                <CardDescription className="text-secondary-700">Distribución del tipo de empleo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600">Presencial</span>
                  <span className="font-semibold text-secondary-800">49%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600">Híbrido</span>
                  <span className="font-semibold text-secondary-800">39%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600">Remoto</span>
                  <span className="font-semibold text-secondary-800">11%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600">Roster</span>
                  <span className="font-semibold text-secondary-800">1%</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-secondary-300 text-secondary-700 hover:bg-secondary-50 bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://public.tableau.com/views/HablemosDePlata-RemuneracionesenIngenieraJUN25/Anlisisgeneral?:language=es-ES&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
                      "_blank",
                    )
                  }
                >
                  Ver Detalles <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-secondary-200">
              <CardHeader className="bg-gradient-to-r from-primary-600 to-primary-500 text-secondary-800 rounded-t-lg">
                <CardTitle>Género y jerarquía</CardTitle>
                <CardDescription className="text-secondary-700">Porcentual de mujeres y disidencias</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                {[
                  { level: "Junior", percentage: 37.7 },
                  { level: "Semi-Senior", percentage: 28.3 },
                  { level: "Senior", percentage: 24.8 },
                  { level: "Líder/Mánager", percentage: 9.6 },
                  { level: "Gerencial", percentage: 0 },
                ].map((item) => (
                  <div key={item.level} className="flex items-center gap-3">
                    <span className="text-secondary-600 text-sm font-medium w-24 flex-shrink-0">{item.level}</span>
                    <div className="flex-1 bg-secondary-100 rounded-full h-3 relative overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-secondary-500 to-secondary-600 h-full rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-secondary-800 font-semibold text-sm w-12 text-right">{item.percentage}%</span>
                  </div>
                ))}
                <Button
                  variant="outline"
                  className="w-full mt-4 border-secondary-300 text-secondary-700 hover:bg-secondary-50 bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://public.tableau.com/views/HablemosDePlata-RemuneracionesenIngenieraJUN25/SesgosdeGnero?:language=es-ES&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
                      "_blank",
                    )
                  }
                >
                  Ver Análisis Completo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Analysis Section */}
      <section id="analisis" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-800 mb-6">Análisis Detallado</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Profundizamos en los datos para entender mejor el panorama laboral de lxs ingenierxs en Argentina
            </p>
          </div>

          {/* Perfil de Participantes */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary-800">Perfil de Participantes</h3>
                <p className="text-secondary-600">¿Quiénes respondieron la encuesta?</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="border-secondary-200">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary-800 mb-1">30%</div>
                  <p className="text-sm text-secondary-600">Graduadxs</p>
                </CardContent>
              </Card>
              <Card className="border-secondary-200">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary-800 mb-1">28 años</div>
                  <p className="text-sm text-secondary-600">Edad promedio</p>
                </CardContent>
              </Card>
              <Card className="border-secondary-200">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary-800 mb-1">91%</div>
                  <p className="text-sm text-secondary-600">CABA+PBA</p>
                </CardContent>
              </Card>
              <Card className="border-secondary-200">
                <CardContent className="p-6 text-center">
                  <Briefcase className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary-800 mb-1">4 años</div>
                  <p className="text-sm text-secondary-600">Experiencia promedio en el rol</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-secondary-200">
                <CardHeader>
                  <CardTitle className="text-secondary-800">
                    Distribución por Especialidad
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-xs mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-secondary-100"></div>
                      <span>Inicial</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-secondary-300"></div>
                      <span>Avanzado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-secondary-400"></div>
                      <span>Cursada finalizada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-secondary-700"></div>
                      <span>Graduadx</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-secondary-900"></div>
                      <span>Posgrado</span>
                    </div>
                  </div>
                  {carrerasData.map((carrera) => (
                    <div key={carrera.carrera} className="space-y-2">
                      <div className="font-medium text-secondary-800">
                        {carrera.carrera} ({carrera.porcentaje}%)
                      </div>
                      <div
                        className="h-4 bg-secondary-100 flex rounded-md overflow-hidden"
                        style={{ width: `${Math.min((carrera.porcentaje / 40) * 100, 100)}%` }}
                      >
                        <div
                          className="bg-secondary-200 h-full hover:bg-secondary-300 transition-colors cursor-pointer"
                          style={{ width: `${carrera.niveles.inicial}%` }}
                          title={`Estudiante inicial: ${carrera.niveles.inicial}%`}
                        ></div>
                        <div
                          className="bg-secondary-400 h-full hover:bg-secondary-500 transition-colors cursor-pointer"
                          style={{ width: `${carrera.niveles.avanzado}%` }}
                          title={`Estudiante avanzado: ${carrera.niveles.avanzado}%`}
                        ></div>
                        <div
                          className="bg-secondary-500 h-full hover:bg-secondary-600 transition-colors cursor-pointer"
                          style={{ width: `${carrera.niveles.finalizada}%` }}
                          title={`Cursada finalizada: ${carrera.niveles.finalizada}%`}
                        ></div>
                        <div
                          className="bg-secondary-700 h-full hover:bg-secondary-800 transition-colors cursor-pointer"
                          style={{ width: `${carrera.niveles.graduadx}%` }}
                          title={`Graduadx: ${carrera.niveles.graduadx}%`}
                        ></div>
                        <div
                          className="bg-secondary-900 h-full hover:bg-secondary-800 transition-colors cursor-pointer"
                          style={{ width: `${carrera.niveles.posgrado}%` }}
                          title={`Graduado con posgrado: ${carrera.niveles.posgrado}%`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-secondary-200">
                <CardHeader>
                  <CardTitle className="text-secondary-800">Distribución Geográfica</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { region: "CABA", porcentaje: 45.2 },
                    { region: "GBA", porcentaje: 32.8 },
                    { region: "Córdoba", porcentaje: 8.1 },
                    { region: "Santa Fe", porcentaje: 5.9 },
                    { region: "Mendoza", porcentaje: 3.4 },
                    { region: "Otras", porcentaje: 4.6 },
                  ].map((item) => (
                    <div key={item.region} className="flex items-center gap-3">
                      <span className="text-secondary-600 text-sm font-medium w-20 flex-shrink-0">{item.region}</span>
                      <div className="flex-1 bg-secondary-100 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary-500 to-primary-600 h-full rounded-full"
                          style={{ width: `${item.porcentaje}%` }}
                        />
                      </div>
                      <span className="text-secondary-800 font-semibold text-sm w-12 text-right">
                        {item.porcentaje}%
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator className="my-16" />

          {/* Análisis Salarial */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-secondary-800" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary-800">Análisis Salarial Profundo</h3>
                <p className="text-secondary-600">Factores que influyen en las remuneraciones</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <Card className="lg:col-span-2 border-secondary-200">
                <CardHeader>
                  <CardTitle className="text-secondary-800">Evolución Salarial por Experiencia</CardTitle>
                  <CardDescription>Mediana de salarios según años de experiencia</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { experiencia: "0-1 años", salario: 850, color: "from-red-400 to-red-500" },
                      { experiencia: "2-3 años", salario: 1200, color: "from-orange-400 to-orange-500" },
                      { experiencia: "4-5 años", salario: 1600, color: "from-yellow-400 to-yellow-500" },
                      { experiencia: "6-8 años", salario: 2100, color: "from-green-400 to-green-500" },
                      { experiencia: "9+ años", salario: 2800, color: "from-blue-400 to-blue-500" },
                    ].map((item) => (
                      <div key={item.experiencia} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-secondary-700 font-medium">{item.experiencia}</span>
                          <span className="text-secondary-800 font-bold">${item.salario}K</span>
                        </div>
                        <div className="w-full bg-secondary-100 rounded-full h-3">
                          <div
                            className={`bg-gradient-to-r ${item.color} h-full rounded-full transition-all duration-700`}
                            style={{ width: `${(item.salario / 2800) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-secondary-200">
                <CardHeader>
                  <CardTitle className="text-secondary-800">Factores de Impacto</CardTitle>
                  <CardDescription>Variables que más influyen en el salario</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                    <span className="text-secondary-700 font-medium">Experiencia</span>
                    <Badge className="bg-secondary-600 text-white">+85%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                    <span className="text-secondary-700 font-medium">Especialidad</span>
                    <Badge className="bg-secondary-600 text-white">+45%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                    <span className="text-secondary-700 font-medium">Ubicación</span>
                    <Badge className="bg-secondary-600 text-white">+35%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                    <span className="text-secondary-700 font-medium">Tipo de empresa</span>
                    <Badge className="bg-secondary-600 text-white">+25%</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-xl p-8">
              <h4 className="text-xl font-bold text-secondary-800 mb-4">💡 Insights Clave</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-secondary-700 mb-2">Brecha Salarial por Género</h5>
                  <p className="text-secondary-600 text-sm">
                    Las mujeres ganan en promedio un 15% menos que los hombres en posiciones equivalentes, brecha que se
                    amplía en niveles gerenciales.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-secondary-700 mb-2">Impacto de la Modalidad</h5>
                  <p className="text-secondary-600 text-sm">
                    Los trabajos remotos e híbridos muestran salarios 12% superiores en promedio, especialmente en el
                    sector tecnológico.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-16" />

          {/* Análisis de Contratos */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary-800">Tipos de Contrato y Beneficios</h3>
                <p className="text-secondary-600">Condiciones laborales en el sector</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-secondary-200">
                <CardHeader>
                  <CardTitle className="text-secondary-800">Tipos de Contrato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { tipo: "Relación de dependencia", porcentaje: 68.5, salario: "$1,580K" },
                    { tipo: "Monotributo", porcentaje: 18.2, salario: "$1,420K" },
                    { tipo: "Responsable inscripto", porcentaje: 8.9, salario: "$2,100K" },
                    { tipo: "Cooperativa de trabajo", porcentaje: 4.4, salario: "$1,200K" },
                  ].map((item) => (
                    <div key={item.tipo} className="p-4 border border-secondary-200 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-secondary-800">{item.tipo}</span>
                        <span className="text-sm font-semibold text-secondary-600">{item.porcentaje}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="w-full bg-secondary-100 rounded-full h-2 mr-3">
                          <div
                            className="bg-gradient-to-r from-secondary-500 to-secondary-600 h-full rounded-full"
                            style={{ width: `${item.porcentaje}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold text-secondary-800 whitespace-nowrap">{item.salario}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-secondary-200">
                <CardHeader>
                  <CardTitle className="text-secondary-800">Beneficios Más Valorados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { beneficio: "Obra social premium", valoracion: 92 },
                    { beneficio: "Flexibilidad horaria", valoracion: 89 },
                    { beneficio: "Capacitación y desarrollo", valoracion: 85 },
                    { beneficio: "Home office", valoracion: 82 },
                    { beneficio: "Vacaciones adicionales", valoracion: 78 },
                    { beneficio: "Bonos por objetivos", valoracion: 75 },
                  ].map((item) => (
                    <div key={item.beneficio} className="flex items-center gap-3">
                      <span className="text-secondary-600 text-sm font-medium flex-1">{item.beneficio}</span>
                      <div className="w-20 bg-secondary-100 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary-500 to-primary-600 h-full rounded-full"
                          style={{ width: `${item.valoracion}%` }}
                        />
                      </div>
                      <span className="text-secondary-800 font-semibold text-sm w-8 text-right">
                        {item.valoracion}%
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="dashboard-section"
        className="py-16 px-4 bg-gradient-to-r from-secondary-600 via-secondary-700 to-secondary-800 text-white"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Explorá el Dashboard Completo</h2>
          <p className="text-xl mb-8 opacity-90">
            Datos interactivos, filtros por especialidad, experiencia y mucho más en nuestro dashboard de Tableau
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary-500 text-secondary-800 hover:bg-primary-600 font-semibold"
              onClick={() =>
                window.open(
                  "https://public.tableau.com/views/HablemosDePlata-RemuneracionesenIngenieraJUN25/Hola",
                  "_blank",
                )
              }
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Abrir Dashboard en Tableau
            </Button>
          </div>
        </div>
      </section>

      {/* Embedded Tableau Dashboard */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">Dashboard Interactivo</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Explorá todos los datos de forma interactiva. Filtrá por especialidad, experiencia, ubicación y más.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-4 shadow-xl border border-secondary-200">
            <div className="relative w-full" style={{ paddingBottom: "75%", height: 0 }}>
              <iframe
                src="https://public.tableau.com/views/HablemosDePlata-RemuneracionesenIngenieraJUN25/Hola?:embed=yes&:display_count=yes&:showVizHome=no&:toolbar=yes"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allowFullScreen
                title="Hablemos De Plata - Dashboard de Salarios en Ingeniería"
              />
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-secondary-500 mb-4">¿Tenés problemas visualizando el dashboard?</p>
            <Button
              variant="outline"
              className="border-secondary-300 text-secondary-700 hover:bg-secondary-50 bg-transparent"
              onClick={() =>
                window.open(
                  "https://public.tableau.com/views/HablemosDePlata-RemuneracionesenIngenieraJUN25/Hola",
                  "_blank",
                )
              }
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Abrir en Tableau Public
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <a href="#" className="block text-secondary-300 hover:text-primary-300 transition-colors">
                  Metodología
                </a>
                <a href="#" className="block text-secondary-300 hover:text-primary-300 transition-colors">
                  Datos Abiertos
                </a>
                <a href="#" className="block text-secondary-300 hover:text-primary-300 transition-colors">
                  Próximos Relevamientos
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-400">
            <p>&copy; 2025 Agrupación 19 de Agosto - UTN FRBA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
