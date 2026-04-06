"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const categories = [
  { id: "all", name: "Todos" },
  { id: "queijos", name: "Queijos" },
  { id: "doces", name: "Doces" },
  { id: "outros", name: "Outros" },
]

// Generate 100+ products for the catalog
const generateProducts = () => {
  const baseProducts = [
    { name: "Queijo Minas Frescal", category: "queijos", tag: "Artesanal", image: "/images/product-queijo-minas.jpg" },
    { name: "Queijo Minas Padrão", category: "queijos", tag: "Clássico", image: "/images/product-queijo-minas.jpg" },
    { name: "Queijo Canastra", category: "queijos", tag: "Premium", image: "/images/product-queijo-canastra.jpg" },
    { name: "Queijo Canastra Curado", category: "queijos", tag: "Premium", image: "/images/product-queijo-canastra.jpg" },
    { name: "Queijo Coalho", category: "queijos", tag: "Artesanal", image: "/images/product-queijo-minas.jpg" },
    { name: "Queijo Provolone", category: "queijos", tag: "Defumado", image: "/images/product-queijo-canastra.jpg" },
    { name: "Queijo Parmesão", category: "queijos", tag: "Premium", image: "/images/product-queijo-canastra.jpg" },
    { name: "Queijo Gouda", category: "queijos", tag: "Importado", image: "/images/product-queijo-canastra.jpg" },
    { name: "Queijo Brie", category: "queijos", tag: "Premium", image: "/images/product-queijo-minas.jpg" },
    { name: "Queijo Camembert", category: "queijos", tag: "Premium", image: "/images/product-queijo-minas.jpg" },
    { name: "Doce de Leite Cremoso", category: "doces", tag: "Tradicional", image: "/images/product-doce-pote.jpg" },
    { name: "Doce de Leite em Barra", category: "doces", tag: "Artesanal", image: "/images/product-doce-pote.jpg" },
    { name: "Doce de Leite Diet", category: "doces", tag: "Sem açúcar", image: "/images/product-doce-pote.jpg" },
    { name: "Doce de Leite com Coco", category: "doces", tag: "Especial", image: "/images/product-doce-pote.jpg" },
    { name: "Doce de Leite com Café", category: "doces", tag: "Especial", image: "/images/product-doce-pote.jpg" },
    { name: "Goiabada Cascão", category: "doces", tag: "Tradicional", image: "/images/product-doce-pote.jpg" },
    { name: "Geleia de Morango", category: "doces", tag: "Artesanal", image: "/images/product-doce-pote.jpg" },
    { name: "Geleia de Jabuticaba", category: "doces", tag: "Regional", image: "/images/product-doce-pote.jpg" },
    { name: "Manteiga da Serra", category: "outros", tag: "Artesanal", image: "/images/product-manteiga.jpg" },
    { name: "Manteiga com Sal", category: "outros", tag: "Clássico", image: "/images/product-manteiga.jpg" },
    { name: "Requeijão Cremoso", category: "outros", tag: "Artesanal", image: "/images/product-manteiga.jpg" },
    { name: "Iogurte Natural", category: "outros", tag: "Fresco", image: "/images/product-manteiga.jpg" },
    { name: "Leite Fresco", category: "outros", tag: "Do dia", image: "/images/product-manteiga.jpg" },
    { name: "Nata da Serra", category: "outros", tag: "Especial", image: "/images/product-manteiga.jpg" },
    { name: "Ricota Fresca", category: "queijos", tag: "Light", image: "/images/product-queijo-minas.jpg" },
  ]

  const products: Array<{
    id: number
    name: string
    category: string
    tag: string
    image: string
  }> = []

  // Generate 100+ products by repeating and varying the base products
  for (let i = 0; i < 4; i++) {
    baseProducts.forEach((product, index) => {
      const suffix = i === 0 ? "" : i === 1 ? " - 500g" : i === 2 ? " - 1kg" : " - Família"
      products.push({
        id: i * baseProducts.length + index + 1,
        name: `${product.name}${suffix}`,
        category: product.category,
        tag: product.tag,
        image: product.image,
      })
    })
  }

  return products
}

const allProducts = generateProducts()
const ITEMS_PER_PAGE = 12

export function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setCurrentPage(1)
  }

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  return (
    <section id="produtos" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium tracking-widest uppercase text-primary">
            Catálogo
          </span>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl font-medium text-foreground">
            Nossos produtos
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore nossa seleção completa de queijos, doces e outros produtos artesanais 
            feitos com todo carinho na Serra da Mantiqueira.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <Filter className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange(category.id)}
                className="whitespace-nowrap"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          {filteredProducts.length} produtos encontrados
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-3 left-3" variant="secondary">
                  {product.tag}
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-foreground text-sm md:text-base line-clamp-2">
                  {product.name}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-3 w-full text-primary hover:text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={`https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre ${product.name}`} target="_blank" rel="noopener noreferrer">
                    Consultar
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Anterior
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum
                if (totalPages <= 5) {
                  pageNum = i + 1
                } else if (currentPage <= 3) {
                  pageNum = i + 1
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i
                } else {
                  pageNum = currentPage - 2 + i
                }
                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(pageNum)}
                    className="w-9"
                  >
                    {pageNum}
                  </Button>
                )
              })}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Próximo
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
