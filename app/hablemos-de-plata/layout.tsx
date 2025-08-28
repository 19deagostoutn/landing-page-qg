import { Header } from "@/components/header"
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "19 de Agosto - Hablemos De Plata",
  description:
    "El primer relevamiento integral sobre remuneraciones en ingeniería realizado por estudiantes y graduadxs de ingeniería. Datos reales, análisis transparente, futuro claro, acceso gratuito.",
  icons: {
    icon: "/logo-19-agosto.png",
    shortcut: "/logo-19-agosto.png",
    apple: "/logo-19-agosto.png",
  },
    generator: 'v0.dev'
}

const navItems = [
  { label: "Inicio", sectionId: "inicio" },
  { label: "Sobre el relevamiento", sectionId: "sobre" },
  { label: "Resultados", sectionId: "resultados" },
  { label: "Metodología", sectionId: "metodologia" },
]
const projects = [
  { label: "Jorge 2025", href: "/jorge2025" },
  { label: "Página principal", href: "/" },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header navItems={navItems} projects={projects} />
      {children}
    </>
  )
}
