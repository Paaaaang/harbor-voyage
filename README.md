# SPARROW ✨ 바다를 향한 하루의 준비

SPARROW는 낮에는 편안한 휴식의 카페, 밤에는 몰입감 있는 사교의 펍으로 변화하는 **시간대 전환형 프리미엄 문화공간**의 웹사이트입니다.

## 🌟 프로젝트 개요

- **브랜드**: SPARROW (스패로우)
- **컨셉**: 도심 속에서 낮과 밤, 두 개의 일상을 경험할 수 있는 특별한 공간
- **포지션**: Premium Day & Night Experience, Urban Cultural Space
- **스토리**: 바다로 나서기 전 선원들이 모이는 항구에서, 특별한 순간을 만들어가는 공간

## 🎨 디자인 시스템

### 브랜드 컬러 (2025 리뉴얼)
- **라이트 모드 (Day)**: 따뜻한 햇살 느낌
  - Primary: `#E07A5F` (코랄 오렌지)
  - Secondary: `#F2CC8F` (골든 옐로우)
  - Background: `#FFFEF9` (따뜻한 화이트)
- **다크 모드 (Night)**: 
  - Primary: `#FFD166` (골드)
  - Secondary: `#3BB4C1` (네온 블루)
  - Background: `#0D1B2A` (딥 네이비)

### 타이포그래피
- **로고/브랜드**: Playfair Display (스타일리시한 세리프)
- **헤드라인**: Poppins (모던 산세리프)
- **본문**: Inter, Noto Sans KR (가독성 최적화)

## 🛠 기술 스택

### Frontend
- **Framework**: Next.js 14.2.31 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (커스텀 컬러 시스템)
- **Animation**: Framer Motion (프리미엄 인터랙션)
- **Icons**: Lucide React
- **Date Picker**: React DatePicker (모던 UI)

### 고급 기능
- ✅ 리퀴드 글래스 네비게이션 (`backdrop-blur-xl`)
- ✅ 커스텀 커서 시스템 (성능 최적화)
- ✅ 카카오맵 API 통합
- ✅ 그라데이션 타이포그래피
- ✅ 통합 메뉴 토글 시스템
- ✅ 반응형 DatePicker 커스터마이징

## 📱 섹션 구성

1. **Hero**: 그라데이션 브랜드 로고와 시간대별 컨셉
2. **About**: SPARROW 브랜드 스토리와 공간 철학
3. **Menu**: 낮/밤 메뉴 슬라이딩 탭 시스템
4. **Events**: 모던한 예약 시스템 (커스텀 DatePicker)
5. **Gallery**: 인터랙티브 갤러리 (라이트박스)
6. **Contact**: 카카오맵 + 연락처 통합 시스템

## 🚀 시작하기

### 필요 조건
- Node.js 18+ 
- npm 또는 yarn

### 설치 및 실행

1. 저장소 클론
```bash
git clone https://github.com/Paaaaang/harbor-voyage.git
cd harbor-voyage
```

2. 의존성 설치
```bash
npm install
```

3. 환경 변수 설정 (선택사항)
```bash
# .env.local 파일 생성
NEXT_PUBLIC_KAKAO_MAP_KEY=your_kakao_map_key
```

4. 개발 서버 실행
```bash
npm run dev
```

5. 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 빌드 및 배포

```bash
# 정적 사이트 빌드
npm run export

# Surge.sh 배포
npm run deploy
```

## 📁 프로젝트 구조

```
harbor-voyage/
├── src/
│   ├── app/
│   │   ├── globals.css          # 글로벌 스타일 + DatePicker 커스텀
│   │   ├── layout.tsx           # 메타데이터 + SEO 최적화
│   │   └── page.tsx             # 메인 페이지
│   └── components/
│       ├── layout/
│       │   ├── Header.tsx       # 리퀴드 글래스 네비게이션
│       │   └── Footer.tsx       # 브랜드 일관성
│       ├── sections/
│       │   ├── Hero.tsx         # 그라데이션 로고
│       │   ├── About.tsx        # SPARROW 스토리
│       │   ├── Menu.tsx         # 슬라이딩 메뉴 탭
│       │   ├── Events.tsx       # 모던 예약 시스템
│       │   ├── Gallery.tsx      # 인터랙티브 갤러리
│       │   └── Contact.tsx      # 카카오맵 통합
│       ├── CustomCursor.tsx     # 성능 최적화된 커서
│       ├── KakaoMap.tsx         # 지도 컴포넌트
│       └── ThemeProvider.tsx    # 테마 관리
├── public/
├── tailwind.config.js           # 브랜드 컬러 시스템
├── next.config.js              # Static Export 설정
└── vercel.json                 # 배포 최적화
```

## 🎯 주요 혁신 기능

### 🌟 프리미엄 UI/UX
- **리퀴드 글래스**: `backdrop-blur-xl` 효과의 네비게이션
- **그라데이션 타이포그래피**: 브랜드 로고에 적용된 동적 그라데이션
- **커스텀 커서**: `requestAnimationFrame` 기반 성능 최적화
- **모던 DatePicker**: 브랜드 컬러 매칭된 커스텀 스타일

### 🔄 테마 전환 시스템
- 시스템 테마 자동 감지
- 독립적인 메뉴 토글 (자동 전환 버그 수정)
- 로컬스토리지 설정 저장
- 부드러운 전환 애니메이션 (0.8s ease)

### 📱 반응형 최적화
- 모바일 퍼스트 설계
- 네비게이션 레이아웃 최적화 (로고-메뉴-버튼 분산배치)
- 터치 친화적 인터랙션

## 🌐 배포 정보

### 라이브 사이트
- **메인 URL**: [https://sparrow-cafe.surge.sh](https://sparrow-cafe.surge.sh)
- **특징**: 로그인 불필요, 전세계 CDN 지원
- **호스팅**: Surge.sh (10개국 글로벌 서버)

### 배포 명령어
```bash
# 빌드 및 배포
npm run export && npm run deploy
```

## 🔧 커스터마이징

### 브랜드 컬러 변경
`tailwind.config.js`에서 컬러 시스템 수정:

```javascript
colors: {
  light: {
    bg: '#FFFEF9',           // 따뜻한 화이트
    primary: '#E07A5F',      // 코랄 오렌지
    secondary: '#F2CC8F',    // 골든 옐로우
  },
  dark: {
    bg: '#0D1B2A',          // 딥 네이비
    primary: '#FFD166',      // 골드
    secondary: '#3BB4C1',    // 네온 블루
  }
}
```

### DatePicker 스타일링
`globals.css`에서 커스텀 스타일 수정 가능

## 📊 성능 최적화

### 기술적 최적화
- **이미지**: Next.js 자동 최적화 + `unoptimized: true`
- **CSS**: Tailwind Purge로 미사용 스타일 제거
- **JavaScript**: 코드 스플리팅 + Lazy Loading
- **커서**: `requestAnimationFrame` 기반 최적화
- **애니메이션**: `passive` 이벤트 리스너

### SEO & 접근성
- Open Graph 메타데이터 완성
- 시맨틱 HTML 구조
- ARIA 라벨 적용
- 키보드 네비게이션 지원

## 🎨 브랜드 가이드라인

### 로고 사용법
- **메인 로고**: "SPARROW" (Playfair Display, 그라데이션)
- **서브 로고**: "S" (원형 배경)
- **색상**: 라이트/다크 모드별 그라데이션 적용

### 톤앤매너
- **키워드**: 프리미엄, 따뜻함, 모던, 세련됨
- **브랜드 메시지**: "바다를 향한 하루의 준비"
- **타겟**: 도시 생활을 즐기는 2030 세대

## 📋 변경 이력

### v2.0.0 (2025.08) - SPARROW 리브랜딩
- ✅ Harbor & Voyage → SPARROW 브랜드 전환
- ✅ 따뜻한 햇살 컬러 시스템 도입
- ✅ 리퀴드 글래스 네비게이션 구현
- ✅ 그라데이션 타이포그래피 적용
- ✅ 모던한 DatePicker 통합
- ✅ 카카오맵 API 연동
- ✅ 커스텀 커서 성능 최적화

### v1.0.0 (2025.08) - 초기 런칭
- 기본 랜딩 페이지 구현
- 라이트/다크 테마 시스템
- 반응형 디자인 적용

## 📞 연락처

- **이메일**: hello@sparrow.kr
- **웹사이트**: [https://sparrow-cafe.surge.sh](https://sparrow-cafe.surge.sh)
- **GitHub**: [https://github.com/Paaaaang/harbor-voyage](https://github.com/Paaaaang/harbor-voyage)

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

**SPARROW** ✨ *바다를 향한 하루의 준비, 특별한 순간을 만들어가는 공간* 🌅🌙
