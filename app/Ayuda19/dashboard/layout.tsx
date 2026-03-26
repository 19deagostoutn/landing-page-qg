import { Ayuda19Header } from "@/components/ayuda19/header"
import { Footer } from "@/components/footer"

export default function Ayuda19DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Ayuda19Header />
      <main className="flex-1 mt-20 p-4 md:p-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}
