import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Goodness E. Mbakara - Computer Science Graduate & Team Leader',
  description: 'Computer Science graduate and dynamic backend engineer with proven track record of leading teams of 30+ engineers. 4X hackathon winner specializing in Django, FastAPI, blockchain development, and cloud infrastructure.',
  keywords: 'Goodness Mbakara, Computer Science Graduate, Backend Engineer, Blockchain Developer, Team Leader, Django, FastAPI, Python, Solidity, EVM, Solana, PostgreSQL, MongoDB, KWEK, ZIDIO, HngX, Hackathon Winner, University of Uyo',
  authors: [{ name: 'Goodness E. Mbakara' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Goodness E. Mbakara - Computer Science Graduate & Team Leader',
    description: 'Computer Science graduate and dynamic backend engineer with proven track record of leading teams and building scalable solutions. 4X hackathon winner.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goodness E. Mbakara - Computer Science Graduate & Team Leader',
    description: 'Computer Science graduate and dynamic backend engineer with proven track record of leading teams and building scalable solutions. 4X hackathon winner.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}