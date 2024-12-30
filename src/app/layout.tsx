import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { LayoutClient } from './layout-client'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hudson Farias',
  description: 'Software developer',
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang='pt-br' className='dark'>
      <body className={inter.className}>
        <Analytics />
        <SpeedInsights />

        <LayoutClient>
          {children}
        </LayoutClient>

        {/* <div className='bg-primary-color dark:bg-primary-color bg-secondary-color dark:bg-secondary-color'></div> */}

      </body>
    </html>
  );
}