import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

export function CTA() {
  return (
    <section id="contato" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mantiqueira-mountains.jpg"
          alt="Serra da Mantiqueira"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary-foreground leading-tight text-balance">
          Leve o sabor da Mantiqueira
          <br />
          <span className="italic">para sua mesa</span>
        </h2>

        <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Entre em contato conosco pelo WhatsApp e faça seu pedido.
          Entregamos em todo o Brasil com todo cuidado que nossos produtos merecem.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* <Button asChild size="lg" className="h-14 px-10 text-base bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </a>
          </Button> */}
          <Button asChild size="lg" variant="outline" className="h-14 px-10 text-base bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground">
            <a href="tel:+5535920013051">
              <Phone className="mr-2 h-5 w-5" />
              (35) 92001-3051
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
