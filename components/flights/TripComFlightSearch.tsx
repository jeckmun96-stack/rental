export function TripComFlightSearch() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-line bg-white">
      <div className="relative w-full" style={{ aspectRatio: '899 / 199' }}>
        <iframe
          src="https://kr.trip.com/partners/ad/S18490621?Allianceid=5309788&SID=322897044&trip_sub1="
          title="트립닷컴 항공권 검색"
          scrolling="no"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>
  );
}
