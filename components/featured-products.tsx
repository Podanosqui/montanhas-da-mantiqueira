"use client"

import Image from "next/image"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredProducts = [
  {
    id: 1,
    name: "Queijo Minas Artesanal",
    description: "Sabor suave e textura cremosa, perfeito para o dia a dia.",
    image: "/images/product-queijo-minas.jpg",
    tag: "Mais vendido",
  },
  {
    id: 2,
    name: "Queijo Canastra Curado",
    description: "Maturado por 60 dias, sabor intenso e marcante.",
    image: "/images/product-queijo-canastra.jpg",
    tag: "Premium",
  },
  {
    id: 3,
    name: "Doce de Leite Cremoso",
    description: "Receita tradicional de família, puro sabor da roça.",
    image: "/images/product-doce-pote.jpg",
    tag: "Artesanal",
  },
  {
    id: 4,
    name: "Manteiga da Serra",
    description: "Feita com leite fresco, sabor incomparável.",
    image: "/images/product-manteiga.jpg",
    tag: "Novidade",
  },
]

export function FeaturedProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              Destaques
            </span>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
              Nossos favoritos
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Anterior</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Próximo</span>
            </Button>
          </div>
        </div>

        {/* Products Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex-shrink-0 w-72 snap-start"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                  {product.tag}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-lg font-medium text-foreground">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
