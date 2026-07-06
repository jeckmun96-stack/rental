import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CategoryCard } from '@/components/CategoryCard';
import { SlothMascot } from '@/components/SlothMascot';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { isLocale, type Locale } from '@/lib/i18n/locales';
import { mainCategoryCards } from '@/lib/data/categoryCards';

interface LocalePageProps {
  params: { locale: string };
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  if (!isLocale(params.locale)) {
    return {};
  }
  const dict = getDictionary(params.locale);
  return {
    title: { absolute: dict.brandName },
    description: dict.heroLead
  };
}

export default function LocaleHomePage({ params }: LocalePageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="rounded-[32px] border border-line bg-white p-6 shadow-soft sm:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-accent">{dict.brandTagline}</p>
            <h1 className="mt-4 text-[34px] font-extrabold leading-[1.16] text-ink sm:text-[56px]">
              {dict.brandName}
            </h1>
            <p className="mt-5 text-base leading-8 text-subInk sm:text-lg">{dict.heroLead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={dict.ctaPrimaryHref}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center rounded-2xl bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-accent/90"
              >
                {dict.ctaPrimaryLabel}
              </a>
            </div>
          </div>
          <div className="mx-auto flex h-40 w-40 flex-none items-center justify-center rounded-full bg-mutedSurface sm:h-52 sm:w-52">
            <SlothMascot className="h-32 w-32 sm:h-40 sm:w-40" />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div>
          <p className="text-sm font-bold text-accent">{dict.categorySectionEyebrow}</p>
          <h2 className="mt-2 text-2xl font-extrabold text-ink">{dict.categorySectionHeading}</h2>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
          {mainCategoryCards.map((card) => {
            const copy = dict.categories[card.id];
            return (
              <CategoryCard
                key={card.id}
                id={card.id}
                badges={card.badges}
                href={card.href}
                title={copy.title}
                description={copy.description}
                ctaLabel={copy.ctaLabel}
              />
            );
          })}
        </div>
      </section>

      {dict.comingSoonNote && (
        <section className="mt-10 rounded-[28px] border border-line bg-mutedSurface p-6 text-sm leading-6 text-subInk sm:p-8">
          {dict.comingSoonNote}
        </section>
      )}
    </div>
  );
}
