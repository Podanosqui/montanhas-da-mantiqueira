import Link from "next/link"
import { Mountain, Instagram, Facebook, Youtube } from "lucide-react"

const navigation = {
  main: [
    { name: "Início", href: "#" },
    { name: "Produtos", href: "#produtos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ],
  products: [
    { name: "Queijos", href: "#produtos" },
    { name: "Doces", href: "#produtos" },
    { name: "Outros", href: "#produtos" },
  ],
  social: [
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "YouTube", href: "#", icon: Youtube },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-15">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#" className="flex items-center gap-2">
              <img src="/images/logo-mdm-branco.png" alt="Logo Montanhas da Mantiqueira" className="w-45" />
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-md">
              Queijos e doces artesanais feitos com tradição e amor na Serra da Mantiqueira,
              trazendo o autêntico sabor mineiro para sua mesa.
            </p>
            {/* Social links */}
            <div className="mt-6 flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Links rápidos</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Contato</h3>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                <a href="tel:+5535920013051" className="hover:text-primary-foreground text-sm transition-colors">
                  (35) 92001-3051
                </a>
              </li>
              <li>
                <a href="mailto:montanhasdamantiqueiracf@gmail.com" className="font-sm text-sm hover:text-primary-foreground transition-colors">
                  E-mail
                </a>
              </li>
              <li className="pt-2 text-sm">
                {/* Serra da Mantiqueira
                <br /> */}
                Minas Gerais, Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Montanhas da Mantiqueira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
