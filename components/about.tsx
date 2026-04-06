import Image from "next/image"

export function About() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/about-production.jpg"
                alt="Produção artesanal de queijos"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              Nossa história
            </span>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
              Tradição que passa
              <br />
              <span className="italic">de geração em geração</span>
            </h2>
            
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Desde 1987, nas encostas da Serra da Mantiqueira, nossa família dedica-se 
                à arte de produzir queijos e doces artesanais com os métodos tradicionais 
                herdados de nossos avós.
              </p>
              <p>
                Utilizamos apenas leite fresco de nossas próprias vacas, criadas em 
                pastos naturais a mais de 1.500 metros de altitude, onde o clima único 
                da Mantiqueira confere sabor incomparável aos nossos produtos.
              </p>
              <p>
                Cada peça é produzida com atenção aos detalhes, respeitando o tempo 
                de maturação necessário e mantendo viva a tradição queijeira mineira 
                que nos orgulhamos tanto.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-8">
              <div>
                <div className="font-serif text-3xl md:text-4xl font-medium text-primary">
                  37+
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Anos de tradição
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl font-medium text-primary">
                  100+
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Produtos artesanais
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl font-medium text-primary">
                  50k+
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Clientes satisfeitos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
