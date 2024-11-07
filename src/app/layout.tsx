import Head from 'next/head';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import About from '@/components/about';
import Footer from '@/components/footer';
import Projects from '@/components/projects';
import Skills from '@/components/skillSection';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
      </Head>
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
