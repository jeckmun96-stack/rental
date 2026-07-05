# 해외렌트랩 MVP

해외렌트랩(Global Rent Lab)은 해외여행을 준비하는 한국인이 도시별 렌터카 예약 조건을 확인하고, 트립닷컴과 클룩 제휴 링크로 이동할 수 있게 만든 SEO형 렌터카 정보 사이트입니다.

이 MVP는 자체 예약·결제 서비스가 아닙니다. 실시간 API 없이 로컬 mock data와 제휴 링크 버튼으로 구성되어 있습니다.

## 설치 방법

```bash
npm install
```

환경변수 예시는 아래처럼 복사해둘 수 있습니다. 1차 MVP는 환경변수가 없어도 동작합니다.

```bash
cp .env.example .env.local
```

## 로컬 실행 방법

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`을 열면 됩니다.

## 빌드 방법

```bash
npm run build
```

Vercel도 같은 방식으로 Next.js 프로젝트를 빌드합니다.

## 주요 페이지

- `/`
- `/rentcar`
- `/rentcar/japan/osaka`
- `/rentcar/japan/fukuoka`
- `/rentcar/japan/tokyo`
- `/rentcar/usa/hawaii`
- `/rentcar/usa/guam`
- `/rentcar/vietnam/danang`
- `/rentcar/thailand/bangkok`
- `/checklist`
- `/compare`
- `/faq`
- `/api/track-click`

## 제휴 링크 수정 위치

제휴 링크는 아래 파일에서 수정합니다.

```txt
lib/data/affiliateLinks.ts
```

트립닷컴과 클룩에서 발급받은 실제 링크를 `tripcom`, `klook` 값에 그대로 넣으세요. 제휴 파라미터를 임의로 삭제하거나 바꾸지 않는 것이 중요합니다.

## 도시 데이터 수정 위치

도시별 SEO 문구, 면허 안내, 보험 안내, 보증금 안내는 아래 파일에서 관리합니다.

```txt
lib/data/cities.ts
```

렌터카 카드의 차량명, 예상 가격, 보험 포함 여부, 무료 취소 여부는 아래 파일에서 관리합니다.

```txt
lib/data/offers.ts
```

## Vercel 배포 방법

1. GitHub에 새 저장소를 만들고 이 프로젝트 코드를 push합니다.
2. Vercel에서 `Add New Project`를 누릅니다.
3. GitHub 저장소를 선택합니다.
4. Framework Preset은 `Next.js`로 둡니다.
5. Build Command는 `npm run build`를 사용합니다.
6. 배포 후 제공되는 Vercel URL로 페이지를 확인합니다.

## Cloudflare 서브도메인 연결 방법

도메인이 `tipcoupon.com`이고 서브도메인을 `rentcar.tipcoupon.com`으로 쓰는 구성을 추천합니다. 본 도메인은 기존 사이트나 다른 프로젝트에 남겨두고, 렌터카 MVP만 독립적으로 운영하기 좋습니다.

Vercel:

```txt
Project Settings -> Domains -> rentcar.tipcoupon.com 추가
```

Cloudflare DNS:

```txt
Type: CNAME
Name: rentcar
Target: cname.vercel-dns.com
Proxy status: DNS only
TTL: Auto
```

배포 도메인을 연결한 뒤 Vercel 환경변수에 아래 값을 넣으면 sitemap과 robots가 실제 도메인을 사용합니다.

```env
SITE_URL=https://rentcar.tipcoupon.com
```

## 클릭 추적 API

예약 버튼은 먼저 `/api/track-click`에 POST 요청을 보낸 뒤 새 탭으로 제휴 링크를 엽니다. API 요청이 실패해도 사용자의 이동은 막지 않습니다.

요청 예시:

```json
{
  "citySlug": "osaka",
  "countrySlug": "japan",
  "platform": "tripcom",
  "offerId": "offer-osaka-tripcom-compact"
}
```

현재 Supabase 환경변수가 없으면 서버 콘솔에 클릭 로그를 남깁니다. 나중에 Supabase를 연결하면 `supabase/schema.sql`을 참고해 저장 구조를 확장할 수 있습니다.

## 아직 구현하지 않은 것

- 실시간 Trip.com API 연동
- 실시간 Klook API 연동
- 로그인/회원가입
- 자체 결제
- 관리자 페이지
- Supabase 필수 저장

## 다음 단계에서 API 연동하는 방법

1. `lib/rentcar-providers/types.ts`의 provider 타입을 기준으로 mock/live provider를 나눕니다.
2. `RENTCAR_DATA_SOURCE=mock|live` 같은 환경변수로 데이터 소스를 전환합니다.
3. Trip.com, Klook 승인 후 공식 문서 기준으로 서버 전용 API route를 만듭니다.
4. 기존 `lib/data/affiliateLinks.ts`의 딥링크 구조는 보존하고, API 결과에는 제휴 파라미터가 유지되도록 매핑합니다.
