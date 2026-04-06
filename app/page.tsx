import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { ProductCatalog } from "@/components/product-catalog"
import { About } from "@/components/about"
import { Differentials } from "@/components/differentials"
import { ProductHighlight } from "@/components/product-highlight"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProducts />
      <ProductCatalog />
      <About />
      <Differentials />
      <ProductHighlight />
      <CTA />
      <Footer />
    </main>
  )
}
