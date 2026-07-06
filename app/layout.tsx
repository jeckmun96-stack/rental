import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: '렌트카팁쿠폰 | 해외 렌터카·호텔 예약 팁',
    template: '%s | 렌트카팁쿠폰'
  },
  description: '해외 렌터카부터 호텔까지, 예약 전 팁과 쿠폰 정보를 한눈에 확인하세요.'
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
