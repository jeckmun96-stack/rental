# 여행늘보 MVP

여행늘보(Travel Sloth)는 해외여행 예약 전에 꼭 확인해야 할 렌터카, 이동수단, 항공권, 이심/유심, 투어, 입장권 정보를 정리하는 제휴 마케팅 기반 여행 예약 가이드입니다.

자체 예약·결제 서비스가 아니라, 각 카테고리의 정보와 체크포인트를 제공하고 Klook, Trip.com 등 제휴 링크로 연결합니다.

## 실행

```bash
pnpm install
pnpm dev
```

로컬 주소는 `http://localhost:3000`입니다.

## 빌드

```bash
pnpm build
```

Cloudflare Workers 배포용 빌드는 OpenNext를 사용합니다.

```bash
pnpm run deploy:cloudflare
```

## 배포

현재 Cloudflare Workers로 배포합니다.

- Worker: `rentcar-tip-coupon`
- Production URL: `https://rentcar.tipcoupon.com`
- Workers.dev URL: `https://rentcar-tip-coupon.jeckmun96.workers.dev`
- Route: `rentcar.tipcoupon.com/*`

Cloudflare 설정 파일은 `wrangler.jsonc`, OpenNext 설정은 `open-next.config.ts`에서 관리합니다.

## 주요 페이지

- `/`
- `/rentcar`
- `/rentcar/[country]/[city]`
- `/checklist`
- `/compare`
- `/flights`
- `/faq`
- `/en`
- `/ja`
- `/zh`
- `/nl`
- `/de`
- `/api/track-click`

## 데이터 수정 위치

제휴 링크:

```txt
lib/data/affiliateLinks.ts
```

메인 카테고리 카드:

```txt
lib/data/categoryCards.ts
```

도시별 렌터카 가이드:

```txt
lib/data/cities.ts
```

렌터카 상품 카드:

```txt
lib/data/offers.ts
```

다국어 문구:

```txt
lib/i18n/dictionaries.ts
```

## 환경변수

검색엔진용 sitemap과 robots의 기준 도메인은 `SITE_URL`로 제어합니다.

```env
SITE_URL=https://rentcar.tipcoupon.com
```

Cloudflare 운영 환경에서는 필요한 값들을 Wrangler secret 또는 Cloudflare dashboard variables/secrets로 관리합니다. `.env.local`은 로컬 전용이며 Git에 올리지 않습니다.

## 클릭 추적 API

예약 버튼은 `/api/track-click`으로 클릭 정보를 보낸 뒤 제휴 링크를 엽니다. 추적 저장소가 없어도 사용자 이동은 막지 않습니다.

요청 예시:

```json
{
  "citySlug": "osaka",
  "countrySlug": "japan",
  "platform": "klook",
  "offerId": "offer-osaka-klook-suv"
}
```

## 운영 메모

- `.wrangler`, `.open-next`, `.next`, `tsconfig.tsbuildinfo`는 로컬/빌드 산출물이므로 Git에 올리지 않습니다.
- Cloudflare DNS의 `rentcar.tipcoupon.com` 레코드는 프록시 상태여야 Worker route가 적용됩니다.
- Next.js 이미지는 Cloudflare Images binding 없이 동작하도록 `images.unoptimized`를 사용합니다.
- Next.js 14 배포는 OpenNext Cloudflare의 unsupported-version 플래그를 사용합니다. 추후 Next.js 메이저 업그레이드 시 스크립트를 같이 정리하는 것이 좋습니다.

## 아직 구현하지 않은 것

- 실시간 렌터카 가격 API 연동
- 관리자 페이지
- 회원가입/로그인
- 자체 결제
- Supabase 필수 저장
