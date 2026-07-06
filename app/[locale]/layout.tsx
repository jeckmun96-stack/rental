import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { isLocale, locales } from '@/lib/i18n/locales';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  return (
    <>
      <Header locale={params.locale as (typeof locales)[number]} />
      <main>{children}</main>
      <Footer locale={params.locale as (typeof locales)[number]} />
    </>
  );
}
