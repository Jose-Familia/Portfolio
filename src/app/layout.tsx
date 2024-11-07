import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import About from '@/components/about'
import Footer from '@/components/footer'
import Projects from '@/components/projects'
import Skills from '@/components/skillSection'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jose Familia | Portfolio',
  description: 'Portfolio personal de Jose Familia. Desarrollador web especializado en React, Next.js y Typescript.',
  keywords: ['desarrollador web', 'frontend', 'backend', 'React', 'Next.js', 'Node.js'],
  authors: [{ name: 'Jose Familia' }],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.josefamilia.me',
    siteName: 'Portfolio de Jose Familia',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <About />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
