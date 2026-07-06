import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  BadgeCheck,
  CalendarClock,
  CarFront,
  CreditCard,
  FileBadge2,
  Fuel,
  Plane,
  ShieldCheck,
  UserPlus
} from 'lucide-react';
import { AFFILIATE_LINKS } from '@/lib/data/affiliateLinks';
import { localizeAffiliateUrl } from '@/lib/i18n/localizeAffiliateUrl';

interface ChecklistPageProps {
  params: { locale: string };
}

const checklistItems = [
  {
    title: 'Get an international driving permit',
    description: 'Make sure it is a type recognized in the country you are visiting, and check the expiry date.',
    icon: FileBadge2
  },
  {
    title: 'Bring your home driving license too',
    description: 'An international permit alone is often not enough — bring your original license as well.',
    icon: BadgeCheck
  },
  {
    title: 'Bring your passport',
    description: 'You may need it for identity verification and signing the rental agreement on-site.',
    icon: BadgeCheck
  },
  {
    title: 'Check the credit card deposit',
    description: "Most rentals require an international credit card in the main driver's own name.",
    icon: CreditCard
  },
  {
    title: 'Check what insurance is included',
    description: 'Compare basic coverage, CDW, excess, and full waiver options on the booking screen.',
    icon: ShieldCheck
  },
  {
    title: 'Check the free-cancellation terms',
    description: 'Even with "free cancellation," always confirm the deadline and the local vendor\'s rules.',
    icon: CalendarClock
  },
  {
    title: 'Check the fuel policy',
    description: 'Full-to-full, prepaid fuel, and similar policies can meaningfully change your real cost.',
    icon: Fuel
  },
  {
    title: 'Check the airport pickup location',
    description: 'Is it an in-terminal counter or a shuttle ride, and do the hours match your flight?',
    icon: Plane
  },
  {
    title: 'Check additional-driver costs',
    description: 'If a companion will also drive, check the extra-driver fee and whether insurance covers them.',
    icon: UserPlus
  },
  {
    title: 'Check driver age restrictions',
    description: 'Minimum ages like 21 or 25 are common, and young-driver surcharges may apply.',
    icon: CarFront
  }
];

export function generateMetadata({ params }: ChecklistPageProps): Metadata {
  if (params.locale !== 'en') {
    return {};
  }
  return {
    title: 'Pre-Booking Checklist for Overseas Rental Cars',
    description:
      'Before you book an overseas rental car, check your international driving permit, license, passport, deposit, insurance, free cancellation, and airport pickup location.'
  };
}

export default function ChecklistPage({ params }: ChecklistPageProps) {
  if (params.locale !== 'en') {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="rounded-[28px] border border-line bg-white p-6 shadow-soft sm:p-10">
        <p className="text-sm font-bold text-accent">Before you book</p>
        <h1 className="mt-3 text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-[42px]">
          Pre-booking checklist for overseas rental cars
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-subInk">
          Before comparing prices, check your license, insurance, deposit, and pickup location first — it saves you
          from surprise fees and schedule headaches at the counter.
        </p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {checklistItems.map(({ title, description, icon: Icon }) => (
          <article key={title} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="font-extrabold tracking-[-0.02em] text-ink">{title}</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-subInk">{description}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-[28px] border border-line bg-mutedSurface p-6 sm:p-8">
        <h2 className="text-xl font-extrabold tracking-[-0.02em] text-ink">Conditions vary a lot by destination</h2>
        <p className="mt-3 text-sm leading-6 text-subInk">
          Even the same rental car category can mean very different driving conditions and rental setups in Japan,
          Hawaii, Guam, or Southeast Asia.
        </p>
        <a
          href={localizeAffiliateUrl(AFFILIATE_LINKS.rentcar, 'en')}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-5 inline-flex rounded-2xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-accent"
        >
          Browse rental cars
        </a>
      </section>
    </div>
  );
}
