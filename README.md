# MinJun Shin · Portfolio

개인 포트폴리오 사이트입니다. 메인 페이지와 프로젝트 상세(무빙, 공부의 숲, 독스루)를 포함합니다.

## 구성

- **메인** — Hero, About, Tech Stack, Experience, Projects, Footer
- **프로젝트 목록** (`/projects`) — 프로젝트 카드 그리드
- **프로젝트 상세** (`/projects/moving`, `/projects/studyforest`, `/projects/docthrough`) — 개요, 기여, 트러블슈팅, 회고, 팀원 피어 리뷰, 기술 스택, 목차(TOC)

## 기술 스택

- **Framework** — Next.js 16 (App Router)
- **UI** — React 19, Tailwind CSS 4, shadcn/ui, Ant Design Icons
- **기타** — TypeScript, tech-stack-icons, Sonner (toast)

## 로컬 실행

이 프로젝트는 **pnpm**을 패키지 매니저로 사용합니다.

```bash
# 의존성 설치
pnpm install

# 개발 서버 (http://localhost:3000)
pnpm dev
```

## 스크립트

| 명령어        | 설명               |
| ------------- | ------------------ |
| `pnpm dev`    | 개발 서버 실행     |
| `pnpm build`  | 프로덕션 빌드      |
| `pnpm start`  | 빌드 결과물 실행   |
| `pnpm lint`   | ESLint 실행        |
| `pnpm format` | Prettier 포맷 적용 |

## 프로젝트 구조 (요약)

```
src/
├── app/              # 라우트·레이아웃
├── components/       # 공통·홈·프로젝트 컴포넌트
├── views/            # 페이지별 뷰 (moving, studyforest, docthrough)
└── lib/              # 유틸, summary 데이터
```

배포는 Vercel 등 Next.js 호환 플랫폼에서 빌드 후 배포하면 됩니다.

---

© 2026 MinJun Shin. All rights reserved.
