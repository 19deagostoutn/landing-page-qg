import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"

import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

const navItems = [
  { label: "Inicio", sectionId: "inicio" },
  { label: "Candidato", sectionId: "candidato" },
  { label: "Plataforma", sectionId: "plataforma" },
  { label: "Asamblea", sectionId: "asamblea" },
]
const projects = [
  { label: "Hablemos de plata", href: "/hablemos-de-plata" },
  { label: "Página principal", href: "/" },
]

export const metadata: Metadata = {
  title: "19 de Agosto - Jorge 2025",
  description: "Nuestro candidato a decano UTN FRBA 2025",
}

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
