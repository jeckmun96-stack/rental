import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: '여행늘보 | 느긋해도 꼼꼼한 여행 예약 가이드',
    template: '%s | 여행늘보'
  },
  description: '렌터카부터 항공권, 투어·액티비티까지. 느긋한 나무늘보가 예약 전에 확인할 것들을 대신 꼼꼼히 챙겨드려요.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
