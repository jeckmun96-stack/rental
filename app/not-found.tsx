import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-bold text-accent">404</p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-ink">페이지를 찾을 수 없습니다</h1>
      <p className="mt-4 text-subInk">지원하지 않는 도시이거나 주소가 변경되었습니다.</p>
      <Link
        href="/rentcar"
        className="mt-8 inline-flex rounded-2xl bg-accent px-5 py-3 text-sm font-bold text-white"
      >
        도시별 렌터카 보기
      </Link>
    </div>
  );
}
