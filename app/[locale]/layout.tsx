import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { isLocale, locales } from '@/lib/i18n/locales';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export function generateMetadata({ params }: LocaleLayoutProps): Metadata {
  if (!isLocale(params.locale)) {
    return {};
  }
  const dict = getDictionary(params.locale);
  return {
    title: {
      default: dict.brandName,
      template: `%s | ${dict.brandName}`
    }
  };
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
