import Link from 'next/link';
import { Car, Plane, Luggage, Smartphone, Compass, Ticket, type LucideIcon } from 'lucide-react';
import { SlothMascot } from '@/components/SlothMascot';
import { platformBadgeClassMap, type PlatformBadge } from '@/lib/data/categoryCards';
import type { CategoryId } from '@/lib/i18n/dictionaries';

export interface CategoryCardProps {
  id: CategoryId;
  badges: PlatformBadge[];
  href: string;
  title: string;
  description: string;
  ctaLabel: string;
}

const categoryIconMap: Record<CategoryId, LucideIcon> = {
  rentcar: Car,
  transport: Luggage,
  flight: Plane,
  esim: Smartphone,
  activity: Compass,
  attraction: Ticket
};

export function CategoryCard({ id, badges, href, title, description, ctaLabel }: CategoryCardProps) {
  const isExternal = href.startsWith('http');
  const Icon = categoryIconMap[id];

  const buttonClassName =
    'mt-3 sm:mt-5 inline-flex w-full items-center justify-center rounded-xl bg-accent px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-bold text-white transition hover:bg-accent/90';
  const button = isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer sponsored" className={buttonClassName}>
      {ctaLabel}
    </a>
  ) : (
    <Link href={href} className={buttonClassName}>
      {ctaLabel}
    </Link>
  );

  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm sm:rounded-[24px]">
      <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-accent/15 via-mutedSurface to-white sm:aspect-[16/10]">
        <Icon className="h-10 w-10 text-accent sm:h-14 sm:w-14" strokeWidth={1.75} aria-hidden="true" />
        <span className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 sm:h-9 sm:w-9">
          <SlothMascot className="h-5 w-5 sm:h-7 sm:w-7" />
        </span>
      </div>
      <div className="p-3 sm:p-5">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {badges.map((badge) => (
            <span
              key={badge.label}
              className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold sm:px-3 sm:py-1 sm:text-xs ${platformBadgeClassMap[badge.key]}`}
            >
              {badge.label}
            </span>
          ))}
        </div>
        <h3 className="mt-2 text-sm font-extrabold text-ink sm:mt-4 sm:text-xl">{title}</h3>
        <p className="mt-1 text-xs leading-5 text-subInk line-clamp-2 sm:mt-2 sm:min-h-20 sm:text-sm sm:leading-6 sm:line-clamp-none">
          {description}
        </p>

        {button}
      </div>
    </article>
  );
}
