import type { City } from '@/types/city';

export const cities: City[] = [
  {
    id: 'japan-osaka',
    countrySlug: 'japan',
    citySlug: 'osaka',
    countryNameKo: '일본',
    cityNameKo: '오사카',
    heroTitle: '오사카 렌터카 예약 가이드',
    heroLead:
      '간사이공항 픽업부터 교토·고베 근교 이동까지, 한국인이 오사카에서 렌터카를 빌릴 때 먼저 확인해야 할 면허·보험·보증금 정보를 한눈에 정리했습니다.',
    metaTitle: '오사카 렌터카 예약 가이드 | 국제운전면허증·보험·공항 픽업 비교',
    metaDescription:
      '오사카 렌터카 예약 전 국제운전면허증, 보험 포함 여부, 보증금, 간사이공항 픽업 가능 상품을 비교해보세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '일본은 한국 운전면허증만으로 운전할 수 없습니다. 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하는 것이 안전합니다.',
    drivingCaution:
      '일본은 좌측통행, 우핸들 차량이 기본입니다. 초반에는 차선 위치와 우회전 대기 방식이 헷갈릴 수 있어 도심보다 공항 외곽에서 출발하는 일정이 편합니다.',
    airportPickupAvailable: true,
    insuranceNote:
      '기본 자차면책보험이 포함된 상품과 현장 추가 보험 상품이 나뉠 수 있습니다. 예약 화면에서 면책금과 NOC 보상 여부를 꼭 확인하세요.',
    depositNote:
      '일본 렌터카는 보증금이 낮거나 없는 상품도 있지만, 일부 플랫폼은 신용카드 확인을 요구할 수 있습니다.',
    freeCancellationNote:
      '무료 취소 가능 상품은 출발 24~48시간 전까지 조건이 붙는 경우가 많습니다. 예약 버튼 이동 후 취소 가능 시점을 확인하세요.',
    vendorComparisonNote:
      '오사카는 간사이공항 인수와 시내 반납 조건이 일정에 큰 영향을 줍니다. 가격만 보지 말고 ETC 카드, 보험 포함, 영업시간을 함께 확인하세요.',
    relatedCitySlugs: ['japan-fukuoka', 'japan-tokyo', 'usa-hawaii', 'taiwan-taipei'],
    isPublished: true
  },
  {
    id: 'japan-fukuoka',
    countrySlug: 'japan',
    citySlug: 'fukuoka',
    countryNameKo: '일본',
    cityNameKo: '후쿠오카',
    heroTitle: '후쿠오카 렌터카 예약 가이드',
    heroLead:
      '후쿠오카는 유후인·벳푸·다자이후까지 이동하는 여행자가 많아 렌터카 활용도가 높은 도시입니다. 공항 픽업과 보험 조건을 중심으로 비교해보세요.',
    metaTitle: '후쿠오카 렌터카 예약 가이드 | 유후인·벳푸 여행 렌트카 비교',
    metaDescription:
      '후쿠오카 렌터카 예약 전 국제운전면허증, 유후인·벳푸 이동, 공항 픽업, 보험 포함 여부를 확인하세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '일본 운전에는 국제운전면허증, 국내 운전면허증, 여권을 함께 지참하는 것이 기본입니다.',
    drivingCaution:
      '후쿠오카 시내는 대중교통이 편하지만 유후인·벳푸·아소산 방향은 렌터카가 유리합니다. 산간 도로는 날씨 변화가 있어 일정에 여유를 두세요.',
    airportPickupAvailable: true,
    insuranceNote:
      '장거리 운전이 많다면 기본 보험뿐 아니라 휴차보상료 관련 조건까지 확인하는 것이 좋습니다.',
    depositNote:
      '보증금 정책은 플랫폼·차량 등급별로 다릅니다. 해외 결제 가능한 신용카드를 준비하세요.',
    freeCancellationNote:
      '무료 취소 상품이라도 현지 업체 규정에 따라 마감 시간이 다를 수 있습니다.',
    vendorComparisonNote:
      '후쿠오카는 소형차 수요가 많아 성수기에는 가격이 빠르게 오릅니다. 유후인·벳푸 일정은 조기 예약 기준으로 차량 등급과 취소 조건을 함께 보세요.',
    relatedCitySlugs: ['japan-osaka', 'japan-tokyo', 'vietnam-danang'],
    isPublished: true
  },
  {
    id: 'japan-tokyo',
    countrySlug: 'japan',
    citySlug: 'tokyo',
    countryNameKo: '일본',
    cityNameKo: '도쿄',
    heroTitle: '도쿄 렌터카 예약 가이드',
    heroLead:
      '도쿄 도심만 여행한다면 대중교통이 편하지만, 후지산·하코네·가와구치코 일정이라면 렌터카가 선택지가 될 수 있습니다.',
    metaTitle: '도쿄 렌터카 예약 가이드 | 후지산·하코네 여행 렌트카 비교',
    metaDescription:
      '도쿄 렌터카 예약 전 국제운전면허증, 도심 운전 주의사항, 공항 픽업, 보험 조건을 비교해보세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '일본은 국제운전면허증과 국내 운전면허증을 함께 준비해야 합니다.',
    drivingCaution:
      '도쿄 도심은 교통량과 주차비 부담이 큽니다. 나리타·하네다 공항 출발 후 외곽 일정으로 바로 이동하는 코스가 더 편합니다.',
    airportPickupAvailable: true,
    insuranceNote:
      '수도권 장거리 이동은 고속도로 이용 가능성이 높으므로 보험, ETC 카드, 긴급출동 조건을 함께 보세요.',
    depositNote:
      '신용카드 보증 또는 현장 확인이 있을 수 있어 대표 운전자 명의 카드를 준비하세요.',
    freeCancellationNote:
      '성수기에는 무료 취소 상품이 먼저 마감될 수 있어 취소 가능 상품을 우선 확인하세요.',
    vendorComparisonNote:
      '도쿄는 공항 픽업 여부와 반납 지점이 특히 중요합니다. 공항 반납 추가비와 영업시간을 비교하세요.',
    relatedCitySlugs: ['japan-osaka', 'japan-fukuoka', 'usa-hawaii'],
    isPublished: true
  },
  {
    id: 'usa-hawaii',
    countrySlug: 'usa',
    citySlug: 'hawaii',
    countryNameKo: '미국',
    cityNameKo: '하와이',
    heroTitle: '하와이 렌터카 예약 가이드',
    heroLead:
      '하와이는 공항 픽업 렌터카 수요가 매우 높은 지역입니다. 보험, 주차비, 추가 운전자, 보증금 조건을 같이 확인해야 실제 비용을 줄일 수 있습니다.',
    metaTitle: '하와이 렌터카 예약 가이드 | 보험·보증금·공항 픽업 비교',
    metaDescription:
      '하와이 렌터카 예약 전 국제운전면허증, 보험, 보증금, 공항 픽업, 추가 운전자 비용을 비교해보세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '미국 주별 규정은 다를 수 있으므로 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하는 것을 권장합니다.',
    drivingCaution:
      '하와이는 우측통행입니다. 와이키키 주변은 주차비가 비싸고 일방통행이 많아 숙소 주차 조건을 먼저 확인하세요.',
    airportPickupAvailable: true,
    insuranceNote:
      '미국 렌터카는 책임보험, 자차손해면책, 대인·대물 보장 범위가 상품별로 다릅니다. 카드사 렌터카 보험 혜택과 중복 여부도 확인하세요.',
    depositNote:
      '대부분 신용카드 보증금 홀드가 있을 수 있습니다. 체크카드는 거절되거나 추가 서류를 요구받을 수 있습니다.',
    freeCancellationNote:
      '플랫폼 예약 상품은 무료 취소 조건이 있는 경우가 많지만, 현지 업체·요금제별로 차이가 있습니다.',
    vendorComparisonNote:
      '하와이는 공항 지점, 숙소 주차비, 추가 운전자 요금이 총비용에 크게 반영됩니다. 차량 가격과 현장 추가 비용을 따로 계산해보세요.',
    relatedCitySlugs: ['usa-guam', 'japan-osaka', 'thailand-bangkok', 'australia-sydney'],
    isPublished: true
  },
  {
    id: 'usa-guam',
    countrySlug: 'usa',
    citySlug: 'guam',
    countryNameKo: '미국령 괌',
    cityNameKo: '괌',
    heroTitle: '괌 렌터카 예약 가이드',
    heroLead:
      '괌은 가족여행과 쇼핑 동선 때문에 렌터카 만족도가 높은 여행지입니다. 공항 픽업, 카시트, 보험 포함 여부를 중심으로 비교하세요.',
    metaTitle: '괌 렌터카 예약 가이드 | 공항 픽업·보험·가족여행 렌트카 비교',
    metaDescription:
      '괌 렌터카 예약 전 국제운전면허증, 공항 픽업, 보험, 카시트, 보증금 조건을 확인해보세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '괌 여행 시에는 국제운전면허증과 국내 운전면허증, 여권을 함께 챙기는 것이 안전합니다.',
    drivingCaution:
      '괌은 우측통행입니다. 주요 관광지 이동은 어렵지 않지만 스콜과 야간 도로 시야를 주의하세요.',
    airportPickupAvailable: true,
    insuranceNote:
      '가족여행은 사고 발생 시 일정 차질이 크기 때문에 기본 보험뿐 아니라 면책금 조건을 자세히 확인하세요.',
    depositNote:
      '차량 등급과 업체에 따라 신용카드 보증금 홀드가 발생할 수 있습니다.',
    freeCancellationNote:
      '성수기와 연휴에는 무료 취소 상품이 빨리 사라질 수 있어 일정이 확정되면 빠르게 비교하세요.',
    vendorComparisonNote:
      '괌은 공항 접근성, 카시트 옵션, 반납 편의성이 중요합니다. 단순 최저가보다 옵션 포함 여부를 보세요.',
    relatedCitySlugs: ['usa-hawaii', 'japan-fukuoka', 'vietnam-danang'],
    isPublished: true
  },
  {
    id: 'vietnam-danang',
    countrySlug: 'vietnam',
    citySlug: 'danang',
    countryNameKo: '베트남',
    cityNameKo: '다낭',
    heroTitle: '다낭 렌터카 예약 가이드',
    heroLead:
      '다낭은 직접 운전 렌터카보다 기사 포함 차량이나 공항 이동 상품을 선택하는 여행자가 많습니다. 예약 전 운전 가능 여부와 상품 형태를 구분하세요.',
    metaTitle: '다낭 렌터카 예약 가이드 | 공항 이동·기사 포함 차량 비교',
    metaDescription:
      '다낭 렌터카 예약 전 직접 운전 가능 여부, 기사 포함 차량, 공항 픽업, 보험 조건을 확인하세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '베트남은 일반적인 해외 렌터카와 운전 조건이 다를 수 있습니다. 한국 여행자는 기사 포함 차량 또는 공항 이동 상품을 먼저 확인하는 편이 안전합니다.',
    drivingCaution:
      '오토바이 교통량이 많고 도로 흐름이 한국과 달라 초보자 직접 운전은 권장하지 않습니다. 바나힐·호이안 이동은 기사 포함 상품이 편합니다.',
    airportPickupAvailable: true,
    insuranceNote:
      '기사 포함 차량과 렌터카 상품은 보험 구조가 다릅니다. 상품 상세에서 포함 범위와 사고 시 대응 방식을 확인하세요.',
    depositNote:
      '직접 운전형보다 기사 포함 차량은 보증금 부담이 낮은 경우가 많지만, 플랫폼별 취소·변경 규정이 중요합니다.',
    freeCancellationNote:
      '공항 이동·차량 투어 상품은 출발 전 무료 취소 가능 시간이 명확히 표시되는 상품을 우선 보세요.',
    vendorComparisonNote:
      '다낭은 직접 운전보다 기사 포함 차량이나 공항 이동 상품이 현실적인 경우가 많습니다. 이동 거리, 대기 시간, 취소 가능 시간을 먼저 확인하세요.',
    relatedCitySlugs: ['thailand-bangkok', 'japan-fukuoka', 'usa-guam'],
    isPublished: true
  },
  {
    id: 'thailand-bangkok',
    countrySlug: 'thailand',
    citySlug: 'bangkok',
    countryNameKo: '태국',
    cityNameKo: '방콕',
    heroTitle: '방콕 렌터카 예약 가이드',
    heroLead:
      '방콕은 도심 교통 체증이 심해 일정에 따라 렌터카와 기사 포함 차량을 구분해서 선택해야 합니다. 공항 픽업, 파타야 이동, 보험 조건을 함께 확인하세요.',
    metaTitle: '방콕 렌터카 예약 가이드 | 공항 픽업·파타야 이동·보험 비교',
    metaDescription:
      '방콕 렌터카 예약 전 국제운전면허증, 도심 운전, 공항 픽업, 파타야 이동, 보험 조건을 비교하세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '태국 운전에는 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하는 것이 안전합니다.',
    drivingCaution:
      '태국은 좌측통행이며 방콕 도심은 체증이 심합니다. 시내 관광보다 외곽 이동이나 파타야 일정에서 렌터카 활용도가 높습니다.',
    airportPickupAvailable: true,
    insuranceNote:
      '보험 포함 상품이라도 자기부담금이 남을 수 있습니다. 현장 추가 보험 권유가 있을 수 있어 예약 전 조건을 확인하세요.',
    depositNote:
      '신용카드 보증금 홀드가 있을 수 있습니다. 운전자 본인 명의 카드가 필요한 상품이 많습니다.',
    freeCancellationNote:
      '여행 일정 변동이 잦다면 무료 취소 가능 상품을 먼저 필터링해서 보는 것이 좋습니다.',
    vendorComparisonNote:
      '방콕은 도심 체증이 심해 직접 운전과 기사 포함 차량의 장단점이 분명합니다. 파타야 등 외곽 이동이 있는지에 따라 선택 기준을 달리하세요.',
    relatedCitySlugs: ['vietnam-danang', 'usa-hawaii', 'japan-osaka', 'thailand-phuket'],
    isPublished: true
  },
  {
    id: 'taiwan-taipei',
    countrySlug: 'taiwan',
    citySlug: 'taipei',
    countryNameKo: '대만',
    cityNameKo: '타이베이',
    heroTitle: '타이베이 렌터카 예약 가이드',
    heroLead:
      '타오위안공항 픽업부터 지우펀·예류·이란 근교 이동까지, 한국인이 타이베이에서 렌터카를 빌릴 때 먼저 확인해야 할 면허·보험·보증금 정보를 정리했습니다.',
    metaTitle: '타이베이 렌터카 예약 가이드 | 국제운전면허증·보험·공항 픽업 비교',
    metaDescription:
      '타이베이 렌터카 예약 전 국제운전면허증, 보험 포함 여부, 보증금, 타오위안공항 픽업 가능 상품을 비교해보세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '대만은 한국 국제운전면허증을 인정합니다. 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하세요.',
    drivingCaution:
      '대만은 우측통행이지만 스쿠터 통행량이 매우 많습니다. 타이베이 시내보다는 공항 외곽에서 출발해 지우펀·이란 방향으로 이동하는 일정이 편합니다.',
    airportPickupAvailable: true,
    insuranceNote:
      '기본 보험과 현장 추가 보험(갑식/을식) 조건이 나뉘는 경우가 많습니다. 예약 화면에서 면책금 범위를 꼭 확인하세요.',
    depositNote:
      '차량 등급에 따라 신용카드 보증금 홀드가 발생할 수 있습니다. 운전자 본인 명의 카드를 준비하세요.',
    freeCancellationNote:
      '무료 취소 가능 상품도 출발 24~48시간 전까지 조건이 붙는 경우가 많습니다. 예약 전 취소 마감 시점을 확인하세요.',
    vendorComparisonNote:
      '타이베이는 타오위안공항 인수와 시내 반납 조건이 일정에 영향을 줍니다. ETC 결제 방식과 보험 포함 여부를 함께 확인하세요.',
    relatedCitySlugs: ['thailand-bangkok', 'malaysia-kuala-lumpur', 'japan-osaka'],
    isPublished: true
  },
  {
    id: 'thailand-phuket',
    countrySlug: 'thailand',
    citySlug: 'phuket',
    countryNameKo: '태국',
    cityNameKo: '푸켓',
    heroTitle: '푸켓 렌터카 예약 가이드',
    heroLead:
      '푸켓은 파통·카론·카타 비치 이동과 팡아·크라비 근교 여행까지 렌터카 활용도가 높은 지역입니다. 공항 픽업과 보험 조건을 중심으로 비교해보세요.',
    metaTitle: '푸켓 렌터카 예약 가이드 | 파통·카론 비치 이동 렌트카 비교',
    metaDescription:
      '푸켓 렌터카 예약 전 국제운전면허증, 비치 이동, 공항 픽업, 보험 포함 여부를 확인하세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '태국 운전에는 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하는 것이 안전합니다.',
    drivingCaution:
      '태국은 좌측통행이며 푸켓은 산길과 좁은 해안도로가 많습니다. 야간 운전과 우기철 도로 상태에 주의하세요.',
    airportPickupAvailable: true,
    insuranceNote:
      '보험 포함 상품이라도 자기부담금이 남을 수 있습니다. 현장 추가 보험 권유가 있을 수 있어 예약 전 조건을 확인하세요.',
    depositNote:
      '신용카드 보증금 홀드가 있을 수 있습니다. 운전자 본인 명의 카드가 필요한 상품이 많습니다.',
    freeCancellationNote:
      '여행 일정 변동이 잦다면 무료 취소 가능 상품을 먼저 필터링해서 보는 것이 좋습니다.',
    vendorComparisonNote:
      '푸켓은 공항 픽업 지점과 비치 반납 조건이 총비용에 영향을 줍니다. 가격만 보지 말고 보험 포함 여부와 반납 지점을 함께 확인하세요.',
    relatedCitySlugs: ['thailand-bangkok', 'vietnam-danang', 'malaysia-kuala-lumpur'],
    isPublished: true
  },
  {
    id: 'malaysia-kuala-lumpur',
    countrySlug: 'malaysia',
    citySlug: 'kuala-lumpur',
    countryNameKo: '말레이시아',
    cityNameKo: '쿠알라룸푸르',
    heroTitle: '쿠알라룸푸르 렌터카 예약 가이드',
    heroLead:
      'KLIA공항 픽업부터 겐팅하이랜드·말라카 근교 이동까지, 쿠알라룸푸르에서 렌터카를 빌릴 때 먼저 확인해야 할 면허·보험·보증금 정보를 정리했습니다.',
    metaTitle: '쿠알라룸푸르 렌터카 예약 가이드 | 겐팅·말라카 여행 렌트카 비교',
    metaDescription:
      '쿠알라룸푸르 렌터카 예약 전 국제운전면허증, 겐팅하이랜드·말라카 이동, 공항 픽업, 보험 조건을 확인하세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '말레이시아는 국제운전면허증과 국내 운전면허증, 여권을 함께 지참하는 것이 기본입니다.',
    drivingCaution:
      '말레이시아는 좌측통행입니다. 쿠알라룸푸르 시내는 고가도로와 톨게이트(터치앤고) 구간이 많아 사전에 결제 수단을 확인하세요.',
    airportPickupAvailable: true,
    insuranceNote:
      '기본 보험뿐 아니라 톨게이트 자동결제 카드(터치앤고) 대여 여부와 면책금 조건을 함께 확인하세요.',
    depositNote:
      '차량 등급과 업체에 따라 신용카드 보증금 홀드가 발생할 수 있습니다.',
    freeCancellationNote:
      '무료 취소 상품이라도 현지 업체 규정에 따라 마감 시간이 다를 수 있습니다.',
    vendorComparisonNote:
      '쿠알라룸푸르는 KLIA 인수 지점과 톨게이트 결제 방식이 일정에 영향을 줍니다. 가격과 함께 톨 결제 수단 포함 여부를 확인하세요.',
    relatedCitySlugs: ['taiwan-taipei', 'thailand-phuket', 'australia-sydney'],
    isPublished: true
  },
  {
    id: 'australia-sydney',
    countrySlug: 'australia',
    citySlug: 'sydney',
    countryNameKo: '호주',
    cityNameKo: '시드니',
    heroTitle: '시드니 렌터카 예약 가이드',
    heroLead:
      '시드니공항 픽업부터 블루마운틴·헌터밸리 근교 이동까지, 시드니에서 렌터카를 빌릴 때 먼저 확인해야 할 면허·보험·보증금 정보를 정리했습니다.',
    metaTitle: '시드니 렌터카 예약 가이드 | 블루마운틴·헌터밸리 여행 렌트카 비교',
    metaDescription:
      '시드니 렌터카 예약 전 국제운전면허증, 블루마운틴·헌터밸리 이동, 공항 픽업, 보험, 나이 제한 조건을 확인하세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '호주는 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하는 것이 안전합니다.',
    drivingCaution:
      '호주는 좌측통행입니다. 시드니 시내는 주차비 부담이 크고 장거리 구간은 캥거루 등 야생동물 출몰에 주의해야 합니다.',
    airportPickupAvailable: true,
    insuranceNote:
      '기본 보험, 자차손해면책, 자기부담금 범위가 상품별로 다릅니다. 미성년 운전자·젊은 운전자 추가 요금도 함께 확인하세요.',
    depositNote:
      '신용카드 보증금 홀드가 있을 수 있으며, 만 25세 미만은 추가 조건이 붙는 경우가 많습니다.',
    freeCancellationNote:
      '플랫폼 예약 상품은 무료 취소 조건이 있는 경우가 많지만, 현지 업체·요금제별로 차이가 있습니다.',
    vendorComparisonNote:
      '시드니는 공항 지점, 장거리 주행 거리 제한, 추가 운전자 요금이 총비용에 크게 반영됩니다. 차량 가격과 현장 추가 비용을 따로 계산해보세요.',
    relatedCitySlugs: ['malaysia-kuala-lumpur', 'usa-hawaii', 'usa-guam'],
    isPublished: true
  }
];

export function getPublishedCities() {
  return cities.filter((city) => city.isPublished);
}

export function getCityBySlug(countrySlug: string, citySlug: string) {
  return getPublishedCities().find(
    (city) => city.countrySlug === countrySlug && city.citySlug === citySlug
  );
}

export function getCityById(id: string) {
  return getPublishedCities().find((city) => city.id === id);
}

export function getCitiesByCountry() {
  return getPublishedCities().reduce<Record<string, City[]>>((acc, city) => {
    const key = city.countryNameKo;
    acc[key] = acc[key] ?? [];
    acc[key].push(city);
    return acc;
  }, {});
}

export function getRelatedCities(cityIds: string[]) {
  return cityIds
    .map((id) => getCityById(id))
    .filter((city): city is City => Boolean(city));
}
