"use client"

import Image from "next/image"
import { useRef, useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type FeaturedProduct = {
  id: number
  name: string
  description: string
  image: string
  tag: string
  price: number
}

const featuredProducts: FeaturedProduct[] = [
  {
    id: 1,
    name: "Queijo Minas Artesanal",
    description: "Sabor suave e textura cremosa, perfeito para o dia a dia. Produzido com leite fresco da nossa fazenda na Serra da Mantiqueira.",
    image: "/images/product-queijo-minas.jpg",
    tag: "Mais vendido",
    price: 34.90,
  },
  {
    id: 2,
    name: "Queijo Canastra Curado",
    description: "Maturado por 60 dias, desenvolve notas complexas e cristais de tirosina. Um verdadeiro tesouro da tradição queijeira mineira.",
    image: "/images/product-queijo-canastra.jpg",
    tag: "Premium",
    price: 109.90,
  },
  {
    id: 3,
    name: "Doce de Leite Cremoso",
    description: "Receita tradicional de família, feito em tacho de cobre. Textura cremosa e sabor incomparável do verdadeiro doce de leite mineiro.",
    image: "/images/product-doce-pote.jpg",
    tag: "Artesanal",
    price: 24.90,
  },
  {
    id: 4,
    name: "Manteiga da Serra",
    description: "Feita com nata fresca batida, sem conservantes. O verdadeiro sabor da manteiga artesanal como se fazia antigamente.",
    image: "/images/product-manteiga.jpg",
    tag: "Novidade",
    price: 32.90,
  },
]

function ProductModal({
  product,
  onClose,
}: {
  product: FeaturedProduct
  onClose: () => void
}) {
  const whatsappNumber = "5511999999999"
  const message = encodeURIComponent(`Olá, tenho interesse no ${product.name}`)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-lg bg-card rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 md:max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
          aria-label="Fechar"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="relative aspect-square w-full md:w-1/2 bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
            <Badge className="absolute top-4 left-4" variant="secondary">
              {product.tag}
            </Badge>
          </div>

          <div className="flex flex-col p-6 md:w-1/2">
            <h3 className="font-serif text-2xl font-medium text-foreground">
              {product.name}
            </h3>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <div className="mt-6">
              <span className="text-sm text-muted-foreground">Preço</span>
              <p className="text-3xl font-semibold text-primary">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </p>
            </div>

            <div className="mt-auto pt-6">
              <Button
                asChild
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Comprar pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FeaturedProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [selectedProduct, setSelectedProduct] = useState<FeaturedProduct | null>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const openProductModal = useCallback((product: FeaturedProduct) => {
    setSelectedProduct(product)
  }, [])

  const closeProductModal = useCallback(() => {
    setSelectedProduct(null)
  }, [])

  return (
    <>
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
              <button
                key={product.id}
                onClick={() => openProductModal(product)}
                className="group flex-shrink-0 w-72 snap-start text-left cursor-pointer"
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
                  <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xl font-semibold text-primary">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeProductModal} />
      )}
    </>
  )
}
