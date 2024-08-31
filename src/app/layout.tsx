import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// import { Analytics } from '@vercel/analytics/react'
// import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hudson Farias',
  description: 'Software developer',
};

export default function RootLayout({children, }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>
        {/* <Analytics />
        <SpeedInsights /> */}

        <main className='h-screen grid grid-rows-[3rem,1fr,2rem] overflow-hidden'>
          {children}
        </main>
      </body>
    </html>
  );
}