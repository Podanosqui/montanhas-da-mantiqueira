"use client"

import { useState, useMemo, useEffect, useCallback } from "react"
import Image from "next/image"
import { Search, Filter, X, MessageCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const categories = [
  { id: "all", name: "Todos" },
  { id: "queijos", name: "Queijos" },
  { id: "doces", name: "Doces" },
  { id: "cachacas", name: "Cachaças" },
  { id: "outros", name: "Outros" },
]


const generateProducts = () => {
  const baseProducts = [
    {
      name: "Doce de Leite com Raspas de Limão - 420g",
      category: "doces",
      tag: "Doces",
      image: "/images/docedeleite-raspaslimao.png",
      price: 28.0,
      description:
        "O doce de leite artesanal cremoso das Montanhas da Mantiqueira, agora com um toque vibrante de raspas de limão. O frescor cítrico equilibra perfeitamente a doçura natural do leite, criando uma experiência refrescante, que conferem aroma e um sabor levemente exótico. É a Mantiqueira com um toque de modernidade.",
    },
    {
      name: "Doce de Leite com Menos Açúcar Puro - 420g",
      category: "doces",
      tag: "Doces",
      image: "/images/docedeleite-menosacucar.png",
      price: 22.0,
      description:
        "Nosso doce de leite artesanal é feito em tachos pequenos, respeitando o tempo e a tradição da Serra da Mantiqueira, com menos açúcar e mais leite. Priorizamos a caramelização natural e a pureza do leite selecionado de vacas criadas na altitude. O resultado é um doce de textura aveludada, cor intensa e um sabor equilibrado que não agride o paladar. Perfeito para comer puro, com queijo minas ou coloca-lo em receitas saudáveis.",
    },
    {
      name: "Bala de Doce de Leite Puro",
      category: "doces",
      tag: "Doces",
      image: "/images/docedeleite-.png",
      price: 15.0,
      description:
        "",
    },
    {
      name: "Bala de Doce de Leite com Raspas de Limão",
      category: "doces",
      tag: "Doces",
      image: "/images/docedeleite-.png",
      price: 18.0,
      description:
        "",
    },
    {
      name: "Kit 4 Queijos das Montanhas da Mantiqueira",
      category: "queijos",
      tag: "Kit's Queijos",
      image: "/images/4queijos-mdm.png",
      price: 28.0,
      description:
        "Uma viagem de sabores e tradição, a seleção perfeita para momentos únicos. Com os queijos cobocó, capa preta, minas padrão temperado e meia cura esse kit traz qualidade e variedade num quarteto fantástico de dar água na boca. Queijo Cobocó: Massa amarela, macia e muito amanteigada. Queijo Capa Preta: Massa firme com cobertura de resina especial, sabor acentuado pela maturação.  Queijo Meia Cura: Tradicional processo de cura, textura semidura e sabor equilibrado. Queijo Minas Padrão Temperado: Massa fresca prensada com mix de ervas selecionadas.",
    },
    {
      name: "Queijo Frescal",
      category: "queijos",
      tag: "Queijos",
      image: "/images/queijo-fresco.png",
      price: 45.0,
      description:
        "Um queijo leve e versátil que combina com qualquer hora do seu dia, nosso frescal é produzido com leite selecionado, garantindo aquela textura macia e o sabor suave que todo mundo ama. Baixo em teor de gordura e sódio.",
    },
    {
      name: "Queijo Frescal Furadinho",
      category: "queijos",
      tag: "Queijos",
      image: "/images/queijo-fresco-furadinho.png",
      price: 50.0,
      description:
        "Equilíbrio perfeito entre leveza e sabor amanteigado. Com uma textura aerada, ele é perfeito para acompanhar seu café da manhã. Sua olhadura deixa a consistência sofisticada que agrada primeiro aos olhos e depois ao paladar.",
    },
    {
      name: "Queijo Meia Cura",
      category: "queijos",
      tag: "Queijos",
      image: "/images/queijo-meiacura.png",
      price: 66.0,
      description:
        "Produzimos um meia cura com um sabor marcante iorgutado através de uma temperatura específica por 15 dias. Esse processo garante sua textura firme por fora e macia por dentro. É aquele queijo que 'chora' no corte e derrete perfeitamente no pão na chapa.",
    },
    {
      name: "Provolone Desidratado Tradicional - 80g",
      category: "queijos",
      tag: "Queijos",
      image: "/images/desidratado-tradicional.png",
      price: 14.0,
      description:
        "Crocante e intenso, um aperitivo que proporciona uma experência única com baixo teor de carboidratos, sendo versátil para acompanhar junto a vinhos, cervejas, cachaças, licores ou servindo de base para patês.",
    },
    {
      name: "Provolone Desidratado Tradicional - 150g",
      category: "queijos",
      tag: "Queijos",
      image: "/images/desidratado-tradicional.png",
      price: 24.0,
      description:
        "Crocante e intenso, um aperitivo que proporciona uma experência única com baixo teor de carboidratos, sendo versátil para acompanhar junto a vinhos, cervejas, cachaças, licores ou servindo de base para patês.",
    },
    {
      name: "Provolone Desidratado Gouda - 150g",
      category: "queijos",
      tag: "Queijos",
      image: "/images/desidratado-gouda.png",
      price: 24.0,
      description:
        "Com um sabor concentrado e característico, esse snack é um prato cheio para compor mesas de frios, se destacando por ter um gosto marcante no paladar, contendo baixo teor de carboidratos.",
    },
    {
      name: "Provolone Desidratado com Goiabada - 150g",
      category: "queijos",
      tag: "Queijos",
      image: "/images/desidratado-goiabada.png",
      price: 28.0,
      description:
        "Um contraste perfeito entre salgado e doce proporcionam uma mistura incrível de sabores, combinando o toque coracante e intenso do provolone desitratado com a textura macia e cremosa da goibada, uma versão clássica do romeu e julieta.",
    },
    {
      name: "Kit Queijos Melhor de Minas - 4 Queijos",
      category: "queijos",
      tag: "Kit's Queijos",
      image: "/images/kit-mdm.png",
      price: 18.0,
      description:
        "Quer montar uma tábua de frios de forma rápida e prática? Então essa opção é a melhor pedida. Com o queijo do reino, prato, parmesão e parmesão temperado você não ficará sem opções se suas visitas aparecerem de supresa. Um pedaço de Minas na sua casa para apreciar momentos especias com quem você ama.",
    },
    {
      name: "Kit Queijos Melhor de Minas - Provolone c/ Salame",
      category: "queijos",
      tag: "Kit's Queijos",
      image: "/images/kitao-prov-salame.png",
      price: 40.0,
      description:
        "Mais completo e mais saboroso, a adição do salame curado traz a praticidade e sofisticação para sua mesa de frios, harmonizando com os provolones branco temperado, defumado e capa rosa. ",
    },
    {
      name: "Kit Queijos Melhor de Minas sem Provolone",
      category: "queijos",
      tag: "Kit's Queijos",
      image: "/images/kit-mdm-sprov.png",
      price: 30.0,
      description:
        "Um kit desenvolvido para oferecer uma experiência completa de degustação, reunindo diferentes maturações e temperos em um só lugar. Consistindo no provolone branco temperado, defumado e capa rosa para tornar ainda mais especial os momentos daqueles que são apaixonados por queijo.",
    },
    {
      name: "Goiabada Cascão 250g",
      category: "doces",
      tag: "Doces",
      image: "/images/goiabada-cascao.png",
      price: 8.0,
      description:
        "Tradição que derrete na boca, doce artesanal brasileiro típico de Minas Gerais, de consistência firme, porém macia, equilíbrio perfeito entre a doçura e a acidez natural da goiaba. Fica irresistível com um queijo minas fresquinho ou canastra.",
    },
    {
      name: "Goiabada Cascão 500g",
      category: "doces",
      tag: "Doces",
      image: "/images/goiabada-cascao.png",
      price: 12.0,
      description:
        "Tradição que derrete na boca, doce artesanal brasileiro típico de Minas Gerais, de consistência firme, porém macia, equilíbrio perfeito entre a doçura e a acidez natural da goiaba. Fica irresistível com um queijo minas fresquinho ou canastra.",
    },
    {
      name: "Goiabada Cascão 1Kg",
      category: "doces",
      tag: "Doces",
      image: "/images/goiabada-cascao-1.png",
      price: 22.0,
      description:
        "Tradição que derrete na boca, doce artesanal brasileiro típico de Minas Gerais, de consistência firme, porém macia, equilíbrio perfeito entre a doçura e a acidez natural da goiaba. Fica irresistível com um queijo minas fresquinho ou canastra.",
    },
    {
      name: "Doce de Bananinha",
      category: "doces",
      tag: "Doces",
      image: "/images/bananinha.png",
      price: 8.0,
      description:
        "Uma sobremesa clássica da culinária caipira brasileira, produzida no sul de Minas Gerais, não contém corantes nem conservantes, é feita com a pura fruta e açúcar resultando em um doce macio que derrete na boca. Perfeita para acompanhar um café ou adoçar o seu dia!",
    },
    {
      name: "Cachaça Mió de Minas com Copinho - Prata",
      category: "cachacas",
      tag: "Cachaças",
      image: "/images/miodeminas-prata.png",
      price: 30.0,
      description:
        "A cachaça tradicional, também conhecida como cachaça branca. Assim que é destilada já é direto envasada, ideal pra quem aprecia o sabor mais puro da cana-de-açucar.",
    },
    {
      name: "Cachaça Mió de Minas com Copinho - Umburana",
      category: "cachacas",
      tag: "Cachaças",
      image: "/images/miodeminas-umburana.png",
      price: 30.0,
      description:
        "Envelhecida um ano na Umburana é conchecida por ter um perfil mais adocicado, predominando notas de canela, cravo e baunilha, sendo considerada uma excelente escolha para destilados envelhecidos.",
    },
    {
      name: "Cachaça Mió de Minas com Copinho - Carvalho",
      category: "cachacas",
      tag: "Cachaças",
      image: "/images/miodeminas-carvalho.png",
      price: 30.0,
      description:
        "Envelhecida um ano no carvalho é caracterizada por suas notas intensas de baunilha, coco, caramelo e especiarias, sendo mais suave, paladar aveludado e menor acidez.",
    },
    {
      name: "Cachaça Mió de Minas com Copinho - Blend",
      category: "cachacas",
      tag: "Cachaças",
      image: "/images/miodeminas-blend.png",
      price: 30.0,
      description:
        "A combinação do blend carvalho e umburana é um dos mais populares do Brasil. Uma mistura equilibrada que traz baixa acidez e um sabor inconfundível no paladar. Notas presentes de coco, caramelo e baunilha se destacam.",
    },
    {
      name: "Cachaça com Copinho - Salinas Ouro",
      category: "cachacas",
      tag: "Cachaças",
      image: "/images/salinas-especial.png",
      price: 32.0,
      description:
        "A região de Salinas, é reconhecida internacionalmente como a capital da cachaça. Sua qualidade é o resultado de um processo cuidadoso que combina tradição e técnicas reginais de produção para alcançar um alto nível de sabor e complexidade. Esse cuidado garante uma bebida refinada, livre de impurezas e com uma suavidade que conquista os paladares mais exigentes.",
    },
    {
      name: "Cura Tudo - Remédio Natural - 500ml",
      category: "outros",
      tag: "Farmácia",
      image: "/images/cura-tudo.png",
      price: 14.0,
      description:
        "Uma planta medicinal que historicamente auxilia em vários sintomas como, problemas respiratórios, aliviando tosse e bronquite, acelera a cicatrização de feridas, atua como anti-histamínico e diurético, promovendo saúde intestinal e cutânea, dentre outras especificações que a torna uma alternativa natural eficaz.",
    },
    {
      name: "37 Ervas - Emagrecimento sem dieta",
      category: "outros",
      tag: "Farmácia",
      image: "/images/37-ervas.png",
      price: 14.0,
      description:
        "Extrato de Ervas medicinais termogênicas que inibem o apetite e regula o intestino, complementando dietas para emagrecimento. Alguns itens de sua composição são chá verde, carqueja, hibisco, cavalinha entre outros. O consumo deve ser acompanhado de uma dieta equilibrada.",
    },

  ]

  return baseProducts.map((product, index) => ({
    id: index + 1,
    ...product,
  }))
}

const allProducts = generateProducts()
const ITEMS_PER_PAGE = 8

type Product = {
  id: number
  name: string
  category: string
  tag: string
  image: string
  price: number
  description: string
}

function ProductModal({
  product,
  onClose,
}: {
  product: Product
  onClose: () => void
}) {
  const whatsappNumber = "5535920013051"
  const message = encodeURIComponent(`Olá, tenho interesse no ${product.name}`)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  // Close on escape key
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
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg bg-card rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 md:max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors hover: cursor-pointer"
          aria-label="Fechar"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row">
          {/* Image */}
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

          {/* Info */}
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

export function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

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

  const openProductModal = useCallback((product: Product) => {
    setSelectedProduct(product)
  }, [])

  const closeProductModal = useCallback(() => {
    setSelectedProduct(null)
  }, [])

  return (
    <>
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
                  className="whitespace-nowrap hover: cursor-pointer"
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
              <button
                key={product.id}
                onClick={() => openProductModal(product)}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300 text-left cursor-pointer hover:border-primary/30"
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
                  <p className="mt-2 text-lg font-semibold text-primary">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </p>
                  <span className="mt-2 inline-block text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    Clique para ver detalhes
                  </span>
                </div>
              </button>
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
                className="hover: cursor-pointer"
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
                      className="w-9 hover: cursor-pointer"
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
                className="hover: cursor-pointer"
              >
                Próximo
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeProductModal} />
      )}
    </>
  )
}
