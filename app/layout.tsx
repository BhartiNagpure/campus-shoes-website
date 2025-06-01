import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { AudioProvider } from '@/components/audio-provider';

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Campus Shoes | Step Into Your Story',
  description: 'Find your perfect pair of Campus Shoes and step into a world of comfort, style, and self-expression.',
  keywords: 'Campus Shoes, sneakers, footwear, athletic shoes, casual shoes, lifestyle footwear',
  openGraph: {
    title: 'Campus Shoes | Step Into Your Story',
    description: 'Find your perfect pair of Campus Shoes and step into a world of comfort, style, and self-expression.',
    url: 'https://campusshoes.com',
    siteName: 'Campus Shoes',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Campus Shoes | Step Into Your Story',
    description: 'Find your perfect pair of Campus Shoes and step into a world of comfort, style, and self-expression.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-poppins`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AudioProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}