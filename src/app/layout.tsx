// app/layout.tsx
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import About from '@/components/about';
import Footer from '@/components/footer';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

// Define metadata de esta forma para que Next.js los procese automáticamente
export const metadata = {
  title: 'Jose Familia | Portfolio',
  description: 'Portfolio personal de Jose Familia. Desarrollador web especializado en React, Next.js y Typescript.',
  keywords: ['desarrollador web', 'frontend', 'backend', 'React', 'Next.js', 'Node.js'],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.josefamilia.me',
    siteName: 'Portfolio de Jose Familia',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
  );
}
