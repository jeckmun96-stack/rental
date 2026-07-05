import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: '해외렌트랩 | 해외 렌터카 예약 가이드',
    template: '%s | 해외렌트랩'
  },
  description: '해외여행 도시별 렌터카 예약, 국제운전면허증, 보험, 보증금, 공항 픽업 정보를 한눈에 확인하세요.'
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
