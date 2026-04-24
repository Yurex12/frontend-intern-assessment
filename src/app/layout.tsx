import { Header } from '@/components/Header';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';

import './globals.css';

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
  weight: ['400', '600', '500', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Tobams group',
  description: 'Tobams group',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${nunitoSans.variable} antialiased`}>
      <body className='text-sm md:text-base'>
        <Header />
        <>{children}</>
      </body>
    </html>
  );
}
