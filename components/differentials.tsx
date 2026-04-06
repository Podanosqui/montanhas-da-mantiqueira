import { HandHeart, MapPin, Award, Users } from "lucide-react"

const differentials = [
  {
    icon: HandHeart,
    title: "100% Artesanal",
    description: "Cada produto é feito à mão, com dedicação e cuidado em cada etapa do processo.",
  },
  {
    icon: MapPin,
    title: "Produção Local",
    description: "Produzidos na Serra da Mantiqueira, a mais de 1.500m de altitude.",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Ingredientes selecionados e processos que garantem o melhor sabor.",
  },
  {
    icon: Users,
    title: "Tradição Familiar",
    description: "Receitas passadas de geração em geração há mais de 37 anos.",
  },
]

export function Differentials() {
  return (
    <section className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest uppercase text-primary-foreground/70">
            Por que nos escolher
          </span>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-primary-foreground">
            Nossos diferenciais
          </h2>
        </div>

        {/* Differentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-foreground/10 mb-4">
                <item.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-medium text-primary-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
