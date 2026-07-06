import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { mainCategoryCards, platformBadgeClassMap } from '@/lib/data/categoryCards';

interface ComparePageProps {
  params: { locale: string };
}

const rows = [
  {
    label: 'Rental car',
    bestFor: 'Trips with lots of day-trip driving where you can drive yourself',
    checks: 'International driving permit, insurance/excess, deposit, airport counter hours'
  },
  {
    label: 'Airport transfer',
    bestFor: 'Late-night arrivals, family trips, or heavy luggage on your first/last day',
    checks: 'Flight-delay handling, meeting point, vehicle size, free waiting time'
  },
  {
    label: 'Ferry',
    bestFor: 'Trips that include island hopping or port cities',
    checks: 'Departure port, boarding cutoff time, baggage rules, cancellation/refund policy'
  },
  {
    label: 'Cruise',
    bestFor: 'Trips that bundle accommodation, transport, and onboard service together',
    checks: 'Departure port, cabin class, what is included, cancellation fees'
  }
] as const;

export function generateMetadata({ params }: ComparePageProps): Metadata {
  if (params.locale !== 'en') {
    return {};
  }
  return {
    title: 'Getting Around: Rental Car vs Airport Transfer vs Ferry vs Cruise',
    description:
      'Compare rental cars, airport transfers, ferries, and cruises for your overseas trip — licenses, insurance, luggage rules, and cancellation terms in one place.'
  };
}

export default function ComparePage({ params }: ComparePageProps) {
  if (params.locale !== 'en') {
    notFound();
  }

  const transportCard = mainCategoryCards.find((card) => card.id === 'transport');

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="rounded-[28px] border border-line bg-white p-6 shadow-soft sm:p-10">
        <p className="text-sm font-bold text-accent">Choosing your transport</p>
        <h1 className="mt-3 text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-[42px]">
          What should you book first for getting around?
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-subInk">
          The shorter your trip, the more your choice of transport affects how tiring it feels. What to check first
          depends on whether you need to drive yourself, just need an airport ride, or your trip includes islands or
          port cities.
        </p>
      </section>

      <section className="mt-10 overflow-hidden rounded-[28px] border border-line bg-white shadow-sm">
        <div className="grid grid-cols-1 border-b border-line bg-mutedSurface text-sm font-extrabold text-ink md:grid-cols-[0.7fr_1fr_1.2fr]">
          <div className="p-4">Option</div>
          <div className="p-4">Best for</div>
          <div className="p-4">Check before booking</div>
        </div>
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-1 border-b border-line last:border-b-0 md:grid-cols-[0.7fr_1fr_1.2fr]"
          >
            <div className="bg-mutedSurface/60 p-4 text-sm font-extrabold text-ink md:bg-white">{row.label}</div>
            <div className="p-4 text-sm leading-6 text-subInk">{row.bestFor}</div>
            <div className="p-4 text-sm leading-6 text-subInk">{row.checks}</div>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-[28px] border border-line bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-bold text-accent">Transport sub-options</p>
        <h2 className="mt-2 text-2xl font-extrabold text-ink">Airport transfer, ferry, and cruise in one place</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-subInk">
          Ferries and cruises aren&apos;t separate main categories — they&apos;re transport options you pick based on
          your itinerary.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {transportCard?.subItems?.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="rounded-2xl border border-line bg-surface p-4 transition hover:border-accent"
            >
              <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${platformBadgeClassMap[item.platform]}`}>
                {item.platform === 'tripcom' ? 'TRIP.COM' : 'KLOOK'}
              </span>
              <span className="mt-3 block font-extrabold text-ink">
                {item.label === '공항픽업' ? 'Airport transfer' : item.label === '페리' ? 'Ferry' : 'Cruise'}
              </span>
              <span className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-accent px-4 py-3 text-sm font-bold text-white transition hover:bg-accent/90">
                {item.label === '공항픽업'
                  ? 'View airport transfers'
                  : item.label === '페리'
                    ? 'View ferry options'
                    : 'Browse cruises'}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-[28px] border border-line bg-mutedSurface p-6 sm:p-8">
        <h2 className="text-xl font-extrabold tracking-[-0.02em] text-ink">Double-check on the final booking screen</h2>
        <p className="mt-3 text-sm leading-6 text-subInk">
          Prices and descriptions here are meant to help you decide. Before you pay, always re-check what&apos;s
          included, the cancellation policy, and local vendor conditions on the affiliate platform&apos;s final
          screen.
        </p>
      </section>
    </div>
  );
}
