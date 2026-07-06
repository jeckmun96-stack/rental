import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TripComFlightSearch } from '@/components/flights/TripComFlightSearch';

interface FlightsPageProps {
  params: { locale: string };
}

const checklist = [
  {
    title: 'Check layover time',
    description: 'A short layover risks a missed connection; a very long one can waste a day of your trip.'
  },
  {
    title: 'Baggage included?',
    description: 'Bargain fares often charge extra for checked baggage — worth checking before you book.'
  },
  {
    title: 'Refund & change policy',
    description: 'Refund and date-change rules (and fees) vary a lot by fare class, like Economy Light.'
  },
  {
    title: 'Round-trip vs one-way',
    description: 'If your dates are flexible, two one-way tickets can sometimes beat a round-trip — worth comparing.'
  }
];

export function generateMetadata({ params }: FlightsPageProps): Metadata {
  if (params.locale !== 'en') {
    return {};
  }
  return {
    title: 'Search Flights',
    description: 'Compare flight prices on Trip.com instantly — just enter your route and dates.'
  };
}

export default function FlightsPage({ params }: FlightsPageProps) {
  if (params.locale !== 'en') {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="rounded-[28px] border border-line bg-white p-6 shadow-soft sm:p-10">
        <p className="text-sm font-bold text-accent">TRIP.COM FLIGHT</p>
        <h1 className="mt-3 text-[32px] font-extrabold leading-tight text-ink sm:text-[42px]">Search flights</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-subInk">
          Enter your origin, destination, and dates to compare flight prices instantly on Trip.com. Payment happens
          on the Trip.com screen. Note: the search widget below currently displays in Korean.
        </p>
      </section>

      <div className="mt-8">
        <TripComFlightSearch />
      </div>

      <section className="mt-10 rounded-[28px] border border-line bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-bold text-accent">Before you book</p>
        <h2 className="mt-2 text-2xl font-extrabold text-ink">Check these before booking a flight</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {checklist.map((item) => (
            <article key={item.title} className="rounded-2xl bg-mutedSurface p-4">
              <h3 className="font-extrabold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-subInk">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
