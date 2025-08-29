
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"
// import { ThemeProvider } from "@/components/theme-provider" // Descomenta si quieres soporte de tema

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "19 de Agosto",
	description: "Agrupación interclaustro de la UTN FRBA desde el 2009",
	icons: {
		icon: "/logo-19-agosto.png",
		shortcut: "/logo-19-agosto.png",
		apple: "/logo-19-agosto.png",
	},
	generator: "v0.dev",
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
			<body className={inter.className + " min-h-screen flex flex-col"}>
				<main className="flex-1 flex flex-col">
					{children}
				</main>
			</body>
		</html>
	)
}