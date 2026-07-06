import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white">팁</span>
          <span>렌트카팁쿠폰</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-subInk md:flex">
          <Link href="/rentcar" className="hover:text-accent">
            렌터카 가이드
          </Link>
          <Link href="/rentcar#popular-cities" className="hover:text-accent">
            인기 도시
          </Link>
          <Link href="/checklist" className="hover:text-accent">
            예약 전 체크리스트
          </Link>
          <Link href="/compare" className="hover:text-accent">
            이동수단 비교
          </Link>
          <Link href="/hotels" className="hover:text-accent">
            호텔
          </Link>
          <Link href="/faq" className="hover:text-accent">
            FAQ
          </Link>
        </nav>
        <Link
          href="/rentcar"
          className="rounded-xl bg-ink px-4 py-2 text-sm font-bold text-white transition hover:bg-accent"
        >
          렌터카 보기
        </Link>
      </div>
    </header>
  );
}
