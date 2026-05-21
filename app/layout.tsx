import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Montanhas da Mantiqueira | Queijos e Doces Artesanais',
  description: 'Queijos e doces artesanais feitos com tradição na Serra da Mantiqueira. Sabores autênticos produzidos localmente com qualidade premium.',
  generator: 'v0.app',
  keywords: ['queijos artesanais', 'doce de leite', 'mantiqueira', 'produtos artesanais', 'laticínios'],
  openGraph: {
    title: 'Montanhas da Mantiqueira | Queijos e Doces Artesanais',
    description: 'Sabores autênticos da Mantiqueira. Queijos e doces artesanais feitos com tradição.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2d5a3d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
