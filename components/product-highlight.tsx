import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, MessageCircle } from "lucide-react"

export function ProductHighlight() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary">
              <Star className="h-4 w-4 fill-secondary" />
              Produto em destaque
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
              Doce de Leite
              <br />
              <span className="italic text-primary">Cremoso Premium</span>
            </h2>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Nosso doce de leite é preparado seguindo a receita tradicional da família, 
              cozido em tacho de cobre por horas até atingir a cremosidade e o sabor 
              perfeitos. Um verdadeiro tesouro da culinária mineira.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Feito com leite fresco do dia",
                "Cozido em tacho de cobre",
                "Sem conservantes artificiais",
                "Receita de mais de 50 anos",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-12 px-8">
                <a href="https://wa.me/5511999999999?text=Olá! Gostaria de encomendar o Doce de Leite Cremoso Premium" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Encomendar agora
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8">
                <a href="#produtos">
                  Ver mais produtos
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/images/doce-de-leite.jpg"
                alt="Doce de Leite Cremoso Premium"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full -z-10" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
