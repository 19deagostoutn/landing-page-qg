import type React from "react"
import { Header } from "@/components/header"

export default function Jorge2025Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const navItems = [
    { label: "Inicio", sectionId: "inicio" },
    { label: "Candidato", sectionId: "candidato" },
    { label: "Plataforma", sectionId: "plataforma" },
    { label: "Asamblea", sectionId: "asamblea" },
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
