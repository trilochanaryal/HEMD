import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Academia - Shape Your Future',
  description: 'World-class education that empowers you to achieve your dreams',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children} {/* Ensure the content is wrapped with consistent padding and max-width */}
          </div>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
