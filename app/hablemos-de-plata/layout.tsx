import type React from "react"
import { Header } from "@/components/header"

export default function HablemosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navItems = [
    { label: "Inicio", sectionId: "inicio" },
    { label: "Sobre el relevamiento", sectionId: "resultados" },
    { label: "Resultados", sectionId: "analisis" },
    { label: "Metodología", sectionId: "dashboard-section" },
  ]

  const projects = [
    { label: "Jorge 2025", href: "/jorge2025" },
    { label: "Hablemos de Plata", href: "/hablemos-de-plata" },
  ]

  return (
    <>
      <Header navItems={navItems} projects={projects} />
      <main className="pt-20">{children}</main>
    </>
  )
}
