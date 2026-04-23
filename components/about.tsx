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
              Detalhes feitos
              <br />
              <span className="italic">para se recordar</span>
            </h2>

            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Proporcionar não apenas produtos de qualidade para nossos clientes, mas também experiências que serão inesquecíveis em momentos especiais com quem amamos, tendo essa mesma ideia a fim de torna-la realidade dois amigos de infância se uniram para criar a Montanhas da Mantiqueira.
              </p>
              <p>
                Desde o início, cada detalhe foi pensado com dedicação, começando pela escolha do leite selecionado por produtores da região da Mantiqueira, até o processo artesanal de produção, preservando a essência de cada sabor na sua forma legitima, um convite para reviver o gosto do interior.
              </p>
              <p>
                Priorizamos a excelência de nossos produtos para transmitir as boas memórias simples que tivemos quando crianças, raízes profundas convividas em família com os sabores autênticos de Minas Gerais.
              </p>
              <p>
                Esses momentos se tornaram propósito, assim surgiu o laticínio, com a missão de levar às pessoas produtos com identidade em forma de experiências, que carregam amor, cuidado e tradição.
              </p>
              <p>
                Hoje, cada queijo, cada doce, cada derivado, é um pedaço dessa história, feita de amizade, sonhos e compromisso com o melhor. Um verdadeiro encontro de passado e presente, direto das Montanhas da Mantiqueira para a sua mesa.
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
