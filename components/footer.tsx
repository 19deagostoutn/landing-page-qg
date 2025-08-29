export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo-19-agosto.png" alt="19 de Agosto" className="h-10 w-auto" />
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                La primera candidatura de oposición en 20 años. Prepararnos para el futuro de la UTN FRBA.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Jorge Schneebeli</h4>
              <p className="text-primary-foreground/80 leading-relaxed">
                Candidato a Decano UTN FRBA 2025. Más de 35 años de experiencia en el INTI y más de 20 años de compromiso en la UTN FRBA.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Nuestra Propuesta</h4>
              <p className="text-primary-foreground/80 leading-relaxed">
                Una Facultad moderna, comprometida con la excelencia académica, la innovación y el bienestar de toda la
                comunidad.
              </p>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © 2025 19 de Agosto. Todos los derechos reservados.
            </p>
            <p className="text-primary-foreground/60 mt-2">
              UTN FRBA - Universidad Tecnológica Nacional - Facultad Regional Buenos Aires
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
