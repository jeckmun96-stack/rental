import type { Locale } from '@/lib/i18n/locales';

/**
 * Klook's site locale segment for each of our supported locales.
 * Verified live on klook.com: /en/, /ja/, /zh-CN/, /de/, /nl/ all resolve.
 */
const klookLocaleSegment: Record<Locale, string> = {
  en: 'en',
  ja: 'ja',
  zh: 'zh-CN',
  nl: 'nl',
  de: 'de'
};

/**
 * Klook affiliate redirect links embed the destination page as a URL-encoded
 * `k_site` query param, e.g.
 *   https://affiliate.klook.com/redirect?aid=...&k_site=https%3A%2F%2Fwww.klook.com%2Fko%2Fcar-rentals%2F
 * The destination always starts with a Korean locale segment (/ko/) since that's
 * our default site. For non-Korean site locales we swap that segment so clicking
 * through lands on the matching Klook language, instead of always Korean.
 */
export function localizeAffiliateUrl(href: string, locale: 'ko' | Locale): string {
  if (locale === 'ko') {
    return href;
  }

  try {
    const url = new URL(href);
    if (url.hostname !== 'affiliate.klook.com') {
      // Not a Klook full-URL redirect (e.g. a shortened klook.com/sl/ link, or a
      // Trip.com link) — we don't have a safe way to rewrite the locale, so leave it.
      return href;
    }

    const kSite = url.searchParams.get('k_site');
    if (!kSite) {
      return href;
    }

    const segment = klookLocaleSegment[locale];
    const localizedKSite = kSite.replace('klook.com/ko/', `klook.com/${segment}/`);
    url.searchParams.set('k_site', localizedKSite);
    return url.toString();
  } catch {
    return href;
  }
}
