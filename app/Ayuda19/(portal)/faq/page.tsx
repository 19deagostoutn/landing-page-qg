import { FaqAccordion } from '@/components/ayuda19/faq-accordion'

export default function FAQPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-secondary-800 tracking-tight">Preguntas Frecuentes</h1>
        <p className="text-secondary-600">
          Encontrá respuestas rápidas sobre inscripciones, trámites y correlativas. Podés sugerirnos más preguntas si lo necesitás.
        </p>
      </div>
      
      <div className="pt-4">
        <FaqAccordion />
      </div>
    </div>
  )
}
