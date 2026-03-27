'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "¿Cómo tramito la regularidad de una materia?",
    answer: "Para tramitar la regularidad, debés asegurarte de haber cumplido con el 75% de asistencia y aprobar las evaluaciones requeridas. El estado se actualizará en tu portal de forma automática al cierre de cursada."
  },
  {
    question: "¿Dónde puedo ver las correlativas de mi carrera?",
    answer: "Podés ir a la sección 'Seguimiento de Plan' dentro de este mismo portal, donde encontrarás el mapa interactivo de tu carrera que te detallará las correlatividades."
  },
  {
    question: "¿Qué pasa si me anoto y no voy a rendir un final?",
    answer: "Si te inscribís a un final y no te presentás sin darte de baja a tiempo, te figurará 'Ausente' y en general tendrás penalidad para la mesa siguiente. En UTN, un ausente no es un 2, pero bloquea tu próxima chance."
  },
  {
    question: "¿Dónde consulto los horarios de las materias?",
    answer: "Generalmente en las pantallas de Bedelía de cada sede o digitalmente desde SIU Guaraní al momento de la inscripción. También publicamos planillas extraoficiales en el grupo institucional para ayudarte a armar la cruzada."
  },
  {
    question: "¿Cómo pido un certificado de alumno regular?",
    answer: "Dentro de la autogestión de SIU Guaraní, en la pestaña 'Trámites', seleccioná 'Solicitar Certificados'. Elegí 'Alumno Regular' y el sistema generará el PDF descargable con validación QR."
  }
]

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="bg-white border text-left border-secondary-200 rounded-xl overflow-hidden shadow-sm"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-5 focus:outline-none hover:bg-secondary-50 transition-colors"
          >
            <h3 className="font-semibold text-secondary-800 text-left pr-4">{faq.question}</h3>
            <ChevronDown 
              className={`w-5 h-5 text-secondary-500 transition-transform duration-300 flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`} 
            />
          </button>
          
          <div 
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index 
                ? 'max-h-96 opacity-100' 
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-5 pt-0 border-t border-secondary-100 mt-2 bg-secondary-50/50">
              <p className="pt-3 text-secondary-600 leading-relaxed text-sm md:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
