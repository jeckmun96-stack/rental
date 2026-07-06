import { AFFILIATE_LINKS } from '@/lib/data/affiliateLinks';
import type { Locale } from '@/lib/i18n/locales';

export type CategoryId = 'rentcar' | 'transport' | 'flight' | 'esim' | 'activity' | 'attraction';

export interface CategoryCopy {
  title: string;
  description: string;
  ctaLabel: string;
}

export interface Dictionary {
  brandName: string;
  brandTagline: string;
  heroLead: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  languageLabel: string;
  categorySectionEyebrow: string;
  categorySectionHeading: string;
  categories: Record<CategoryId, CategoryCopy>;
  footerText: string;
  comingSoonNote: string;
}

type DictionaryLocale = Locale | 'ko';

export const dictionaries: Record<DictionaryLocale, Dictionary> = {
  ko: {
    brandName: '여행늘보',
    brandTagline: 'Travel Sloth',
    heroLead:
      '느긋해 보여도 확인할 건 다 확인해요. 렌터카부터 항공권까지 예약 전 체크포인트를 여행늘보가 미리 정리해뒀어요.',
    ctaPrimaryLabel: '도시별 렌터카 보기',
    ctaPrimaryHref: '/rentcar',
    languageLabel: '언어',
    categorySectionEyebrow: '여행 예약 카테고리',
    categorySectionHeading: '여행 예약 카테고리 먼저 고르기',
    categories: {
      rentcar: {
        title: '렌터카',
        description: '해외 렌터카 예약 전 보험, 보증금, 무료취소 조건을 확인하세요.',
        ctaLabel: '렌터카 상품 보기'
      },
      transport: {
        title: '이동수단',
        description: '공항픽업부터 페리, 크루즈까지 일정에 맞는 이동 방법을 확인하세요.',
        ctaLabel: '이동수단 보기'
      },
      flight: {
        title: '항공권',
        description: '트립닷컴에서 출발지·도착지, 날짜만 입력해 항공권 가격을 바로 비교하세요.',
        ctaLabel: '항공권 검색하기'
      },
      esim: {
        title: '이심(eSIM)·유심',
        description: '해외여행 데이터 유심·이심을 미리 준비하세요. 공항 수령 없이 바로 개통할 수 있는 상품도 있습니다.',
        ctaLabel: '이심·유심 보기'
      },
      activity: {
        title: '투어·액티비티',
        description: '현지 투어, 체험, 액티비티 상품을 클룩에서 한 번에 예약하세요.',
        ctaLabel: '투어·액티비티 보기'
      },
      attraction: {
        title: '입장권(어트랙션)',
        description: '테마파크, 전시, 랜드마크 입장권을 클룩에서 미리 예약하고 줄서지 않고 입장하세요.',
        ctaLabel: '입장권 보기'
      }
    },
    footerText:
      '느긋해 보여도 확인할 건 다 확인하는 여행늘보예요. 본 사이트는 제휴 마케팅 기반의 정보 제공 사이트입니다. 가격, 보험 조건, 취소 규정은 제휴 플랫폼과 현지 업체 사정에 따라 달라질 수 있으므로 예약 전 최종 화면을 확인하세요.',
    comingSoonNote: ''
  },
  en: {
    brandName: 'Travel Sloth',
    brandTagline: 'Travel Sloth',
    heroLead:
      'Slow and steady, but nothing gets missed. Travel Sloth checks the fine print on rental cars, flights, and more before you book.',
    ctaPrimaryLabel: 'Browse rental cars',
    ctaPrimaryHref: AFFILIATE_LINKS.rentcar,
    languageLabel: 'Language',
    categorySectionEyebrow: 'Booking categories',
    categorySectionHeading: 'Pick a category to get started',
    categories: {
      rentcar: {
        title: 'Rental Cars',
        description: 'Check insurance, deposit, and free-cancellation terms before booking an overseas rental car.',
        ctaLabel: 'View rental car deals'
      },
      transport: {
        title: 'Getting Around',
        description: 'From airport transfers to ferries and cruises, find the right way to get around your trip.',
        ctaLabel: 'Compare transport options'
      },
      flight: {
        title: 'Flights',
        description: 'Compare flight prices instantly on Trip.com — just enter your route and dates.',
        ctaLabel: 'Search flights'
      },
      esim: {
        title: 'eSIM & SIM Cards',
        description: 'Get mobile data sorted before you land. Some eSIMs activate instantly, no airport pickup needed.',
        ctaLabel: 'View eSIM & SIM plans'
      },
      activity: {
        title: 'Tours & Activities',
        description: 'Book local tours, experiences, and activities all in one place on Klook.',
        ctaLabel: 'Browse tours & activities'
      },
      attraction: {
        title: 'Attraction Tickets',
        description: 'Skip the line at theme parks, landmarks, and exhibitions with tickets booked in advance.',
        ctaLabel: 'View attraction tickets'
      }
    },
    footerText:
      'Travel Sloth — slow-looking, but nothing gets missed. This site runs on affiliate marketing; prices, insurance terms, and cancellation policies can vary by platform and local vendor, so always check the final booking screen.',
    comingSoonNote:
      'City-by-city guides are being translated into English. In the meantime, you can browse and book directly through the categories above.'
  },
  ja: {
    brandName: 'Travel Sloth（トラベルナマケモノ）',
    brandTagline: 'Travel Sloth',
    heroLead:
      'のんびり見えても、確認すべきことはしっかり確認します。予約前にチェックすべきポイントをまとめました。',
    ctaPrimaryLabel: 'レンタカーを見る',
    ctaPrimaryHref: AFFILIATE_LINKS.rentcar,
    languageLabel: '言語',
    categorySectionEyebrow: '予約カテゴリー',
    categorySectionHeading: 'まずはカテゴリーを選んでください',
    categories: {
      rentcar: {
        title: 'レンタカー',
        description: '海外レンタカー予約前に保険・保証金・無料キャンセル条件を確認しましょう。',
        ctaLabel: 'レンタカーを見る'
      },
      transport: {
        title: '移動手段',
        description: '空港送迎からフェリー、クルーズまで、旅程に合った移動手段を確認できます。',
        ctaLabel: '移動手段を比較する'
      },
      flight: {
        title: '航空券',
        description: 'Trip.comで出発地・到着地と日付を入力するだけで航空券の価格をすぐ比較できます。',
        ctaLabel: '航空券を検索する'
      },
      esim: {
        title: 'eSIM・SIMカード',
        description: '海外旅行のデータ通信を事前に準備。空港受け取り不要ですぐ開通できる商品もあります。',
        ctaLabel: 'eSIM・SIMを見る'
      },
      activity: {
        title: 'ツアー・アクティビティ',
        description: '現地ツアーや体験、アクティビティをKlookでまとめて予約できます。',
        ctaLabel: 'ツアーを見る'
      },
      attraction: {
        title: '入場チケット',
        description: 'テーマパークや展示、ランドマークのチケットを事前予約して並ばずに入場しましょう。',
        ctaLabel: 'チケットを見る'
      }
    },
    footerText:
      'Travel Sloth（トラベルナマケモノ）— のんびり見えても、確認することはきちんと確認します。本サイトはアフィリエイトマーケティングによる情報提供サイトです。価格、保険条件、キャンセル規定はプラットフォームや現地業者により異なる場合があるため、予約前に最終画面をご確認ください。',
    comingSoonNote:
      '都市別ガイドは順次日本語に翻訳予定です。それまでは上記カテゴリーから直接ご予約いただけます。'
  },
  zh: {
    brandName: 'Travel Sloth 旅行树懒',
    brandTagline: 'Travel Sloth',
    heroLead: '看起来慢悠悠，但该确认的一样不少。预订前需要检查的要点，都帮你整理好了。',
    ctaPrimaryLabel: '查看租车',
    ctaPrimaryHref: AFFILIATE_LINKS.rentcar,
    languageLabel: '语言',
    categorySectionEyebrow: '预订分类',
    categorySectionHeading: '先选择一个分类开始',
    categories: {
      rentcar: {
        title: '租车',
        description: '预订海外租车前，请先确认保险、押金和免费取消条件。',
        ctaLabel: '查看租车优惠'
      },
      transport: {
        title: '交通方式',
        description: '从机场接送到渡轮、邮轮，找到最适合行程的交通方式。',
        ctaLabel: '比较交通方式'
      },
      flight: {
        title: '机票',
        description: '在 Trip.com 上输入出发地、目的地和日期，即可立即比较机票价格。',
        ctaLabel: '搜索机票'
      },
      esim: {
        title: 'eSIM·电话卡',
        description: '提前准备好境外上网数据，部分 eSIM 无需在机场取卡即可立即开通。',
        ctaLabel: '查看 eSIM·电话卡'
      },
      activity: {
        title: '当地行程·体验',
        description: '在 Klook 一站式预订当地行程、体验和活动。',
        ctaLabel: '查看行程活动'
      },
      attraction: {
        title: '景点门票',
        description: '提前预订主题乐园、地标和展览门票，免排队入场。',
        ctaLabel: '查看景点门票'
      }
    },
    footerText:
      'Travel Sloth 旅行树懒 — 看起来慢悠悠，但该确认的都会确认。本网站为联盟营销信息网站，价格、保险条款及取消政策可能因平台和当地商家而异，请以预订前最终页面为准。',
    comingSoonNote: '各城市详细指南正在陆续翻译为中文，目前可直接通过上方分类浏览和预订。'
  },
  nl: {
    brandName: 'Travel Sloth',
    brandTagline: 'Travel Sloth',
    heroLead:
      "Lijkt traag, maar mist niets. Travel Sloth checkt alle voorwaarden voor je boekt: huurauto's, vluchten en meer.",
    ctaPrimaryLabel: "Bekijk huurauto's",
    ctaPrimaryHref: AFFILIATE_LINKS.rentcar,
    languageLabel: 'Taal',
    categorySectionEyebrow: 'Boekingscategorieën',
    categorySectionHeading: 'Kies eerst een categorie',
    categories: {
      rentcar: {
        title: "Huurauto's",
        description: "Check verzekering, borg en gratis annulering voordat je een huurauto in het buitenland boekt.",
        ctaLabel: 'Bekijk huurauto-aanbiedingen'
      },
      transport: {
        title: 'Vervoer',
        description:
          'Van luchthaventransfers tot veerboten en cruises — vind de juiste manier om je reis voort te zetten.',
        ctaLabel: 'Vergelijk vervoersopties'
      },
      flight: {
        title: 'Vluchten',
        description: 'Vergelijk vluchtprijzen direct via Trip.com — vul gewoon je route en data in.',
        ctaLabel: 'Zoek vluchten'
      },
      esim: {
        title: 'eSIM & simkaarten',
        description:
          "Regel je mobiele data al voor vertrek. Sommige eSIM's zijn direct actief, zonder ophalen op de luchthaven.",
        ctaLabel: 'Bekijk eSIM & simkaarten'
      },
      activity: {
        title: 'Tours & activiteiten',
        description: 'Boek lokale tours, ervaringen en activiteiten in één keer via Klook.',
        ctaLabel: 'Bekijk tours & activiteiten'
      },
      attraction: {
        title: 'Attractietickets',
        description:
          'Sla de wachtrij over bij pretparken, bezienswaardigheden en tentoonstellingen met vooraf geboekte tickets.',
        ctaLabel: 'Bekijk attractietickets'
      }
    },
    footerText:
      "Travel Sloth — lijkt traag, maar niets ontgaat ons. Deze site werkt met affiliate marketing: prijzen, verzekeringsvoorwaarden en annuleringsbeleid kunnen verschillen per platform en lokale aanbieder, controleer daarom altijd het laatste boekingsscherm.",
    comingSoonNote:
      'De stadsgidsen worden momenteel vertaald naar het Nederlands. Je kunt intussen direct boeken via de categorieën hierboven.'
  },
  de: {
    brandName: 'Travel Sloth',
    brandTagline: 'Travel Sloth',
    heroLead:
      'Wirkt gemütlich, prüft aber alles ganz genau. Travel Sloth checkt vor der Buchung die wichtigen Details bei Mietwagen, Flügen und mehr.',
    ctaPrimaryLabel: 'Mietwagen ansehen',
    ctaPrimaryHref: AFFILIATE_LINKS.rentcar,
    languageLabel: 'Sprache',
    categorySectionEyebrow: 'Buchungskategorien',
    categorySectionHeading: 'Wähle zuerst eine Kategorie',
    categories: {
      rentcar: {
        title: 'Mietwagen',
        description: 'Prüfe Versicherung, Kaution und kostenlose Stornierung, bevor du einen Mietwagen im Ausland buchst.',
        ctaLabel: 'Mietwagenangebote ansehen'
      },
      transport: {
        title: 'Transport',
        description:
          'Vom Flughafentransfer bis zu Fähren und Kreuzfahrten – finde die passende Fortbewegung für deine Reise.',
        ctaLabel: 'Transportoptionen vergleichen'
      },
      flight: {
        title: 'Flüge',
        description: 'Vergleiche Flugpreise sofort auf Trip.com – einfach Strecke und Datum eingeben.',
        ctaLabel: 'Flüge suchen'
      },
      esim: {
        title: 'eSIM & SIM-Karten',
        description:
          'Regle deine mobilen Daten schon vor der Landung. Manche eSIMs sind sofort aktiv, keine Abholung am Flughafen nötig.',
        ctaLabel: 'eSIM & SIM-Karten ansehen'
      },
      activity: {
        title: 'Touren & Aktivitäten',
        description: 'Buche lokale Touren, Erlebnisse und Aktivitäten gesammelt über Klook.',
        ctaLabel: 'Touren & Aktivitäten ansehen'
      },
      attraction: {
        title: 'Eintrittskarten',
        description:
          'Überspringe die Warteschlange bei Freizeitparks, Sehenswürdigkeiten und Ausstellungen mit vorab gebuchten Tickets.',
        ctaLabel: 'Eintrittskarten ansehen'
      }
    },
    footerText:
      'Travel Sloth – wirkt gemütlich, lässt aber nichts aus. Diese Seite arbeitet mit Affiliate-Marketing: Preise, Versicherungsbedingungen und Stornoregeln können je nach Plattform und lokalem Anbieter variieren. Bitte prüfe daher immer den finalen Buchungsbildschirm.',
    comingSoonNote:
      'Die Städteguides werden nach und nach ins Deutsche übersetzt. Bis dahin kannst du direkt über die Kategorien oben buchen.'
  }
};

export function getDictionary(locale: DictionaryLocale): Dictionary {
  return dictionaries[locale];
}
