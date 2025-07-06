import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo-19-agosto.png" type="image/png" />
        <link rel="shortcut icon" href="/logo-19-agosto.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-19-agosto.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
