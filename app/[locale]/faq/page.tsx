import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AFFILIATE_LINKS } from '@/lib/data/affiliateLinks';
import { localizeAffiliateUrl } from '@/lib/i18n/localizeAffiliateUrl';

interface FaqPageProps {
  params: { locale: string };
}

const faqs = [
  {
    question: 'Do I need an international driving permit for an overseas rental car?',
    answer:
      'For most destinations, it is safest to get an international driving permit. Rules vary by country, so check the local driving requirements before you book.'
  },
  {
    question: 'Should I bring my home driving license too?',
    answer: 'Yes. Many rental counters ask for your international permit, your home license, and your passport together.'
  },
  {
    question: 'Is a deposit always required?',
    answer:
      'Depending on the vehicle class and vendor policy, a credit card deposit hold may apply. It is best to bring a credit card in the main driver\'s own name.'
  },
  {
    question: 'How do I check the insurance on an overseas rental car?',
    answer:
      'On the booking screen, check the basic coverage, collision damage waiver, excess amount, and any on-site optional insurance.'
  },
  {
    question: 'Should I book a rental car or an airport transfer first?',
    answer:
      'A rental car makes sense if you plan to drive yourself around nearby areas. For late-night arrivals or heavy luggage, check airport transfer options first.'
  },
  {
    question: 'How do I check an airport-pickup rental car?',
    answer: 'In the listing details, check the pickup point, terminal, whether a shuttle is involved, and the operating hours.'
  },
  {
    question: 'Is "free cancellation" really free?',
    answer:
      'Free cancellation usually has a deadline. Always check the cutoff time (in local time) and the refund conditions.'
  },
  {
    question: 'Are there driver age restrictions?',
    answer: 'Minimum ages of 21 or 25 are common, and a young-driver surcharge may apply below a certain age.'
  },
  {
    question: 'Can extra charges come up on-site?',
    answer:
      'Insurance upgrades, additional drivers, child seats, navigation, fuel, and one-way drop-off fees can all add to the final cost.'
  },
  {
    question: 'What should I check first before booking a rental car?',
    answer: 'License requirements, whether insurance is included, the deposit, free-cancellation terms, and the airport pickup location.'
  }
];

export function generateMetadata({ params }: FaqPageProps): Metadata {
  if (params.locale !== 'en') {
    return {};
  }
  return {
    title: 'Overseas Rental Car FAQ',
    description:
      'Frequently asked questions about international driving permits, licenses, deposits, insurance, airport pickup, free cancellation, and age restrictions for overseas rental cars.'
  };
}

export default function FaqPage({ params }: FaqPageProps) {
  if (params.locale !== 'en') {
    notFound();
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="rounded-[28px] border border-line bg-white p-6 shadow-soft sm:p-10">
        <p className="text-sm font-bold text-accent">FAQ</p>
        <h1 className="mt-3 text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-[42px]">
          Overseas rental car FAQ
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-subInk">
          The questions that come up most often before booking an overseas rental car — licenses, insurance, deposit,
          airport pickup, and cancellation terms — all in one place.
        </p>
      </section>

      <section className="mt-10 grid gap-4">
        {faqs.map((faq) => (
          <article key={faq.question} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
            <h2 className="font-extrabold tracking-[-0.02em] text-ink">{faq.question}</h2>
            <p className="mt-3 text-sm leading-7 text-subInk">{faq.answer}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-[28px] border border-line bg-mutedSurface p-6 sm:p-8">
        <h2 className="text-xl font-extrabold tracking-[-0.02em] text-ink">Check destination-specific conditions</h2>
        <p className="mt-3 text-sm leading-6 text-subInk">
          Before you actually book, it is worth checking the specific conditions for your destination city too.
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
