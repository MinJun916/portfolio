import { Analytics } from '@vercel/analytics/next';
import localFont from 'next/font/local';

import Header from '@/components/shared/Header';
import { Toaster } from '@/components/ui/sonner';

import type { Metadata } from 'next';
import './globals.css';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '신민준 | Portfolio',
  description: "MinJun Shin's portfolio",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} antialiased`}>
        <Header />
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
