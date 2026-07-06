import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function KoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header locale="ko" />
      <main>{children}</main>
      <Footer locale="ko" />
    </>
  );
}
