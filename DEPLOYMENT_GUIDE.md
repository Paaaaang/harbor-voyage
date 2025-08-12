# Harbor & Voyage 배포 가이드

## Vercel 배포 방법 (추천)

### 1. GitHub 저장소 생성
1. [GitHub.com](https://github.com) 로그인
2. "New repository" 클릭
3. 저장소 이름: `harbor-voyage` 입력
4. Public 선택
5. "Create repository" 클릭

### 2. 로컬 프로젝트를 GitHub에 업로드
터미널에서 다음 명령어 실행:
```bash
cd C:\Users\smhrd\Desktop\Web\harbor-voyage
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/harbor-voyage.git
git push -u origin main
```

### 3. Vercel 배포
1. [Vercel.com](https://vercel.com) 방문
2. "Sign up" → "Continue with GitHub" 클릭
3. "Import Project" 클릭
4. harbor-voyage 저장소 선택
5. "Deploy" 클릭
6. 배포 완료! 자동으로 URL 생성됨

### 4. 자동 업데이트
- 이후 코드 변경 시 GitHub에 push만 하면 자동으로 배포됩니다

## 대안: Netlify 배포

### 드래그 앤 드롭 방식
1. `npm run build` 실행
2. `out` 폴더 생성 확인
3. [Netlify.com](https://netlify.com) 방문
4. `out` 폴더를 드래그 앤 드롭
5. 즉시 배포 완료!

## 환경 변수 (필요시)
배포 시 환경 변수가 필요한 경우:
- Vercel: Settings → Environment Variables
- Netlify: Site settings → Environment variables

## 커스텀 도메인 (선택사항)
- 무료 서브도메인: `your-project.vercel.app`
- 커스텀 도메인: 설정에서 추가 가능

## 성능 최적화
현재 프로젝트는 이미 최적화되어 있습니다:
✅ Next.js 14 (최신)
✅ 코드 스플리팅
✅ 이미지 최적화
✅ TypeScript
✅ Tailwind CSS
