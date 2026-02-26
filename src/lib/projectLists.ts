import type { ProjectCardProps, SideProjectCardProps } from '@/types/projects';

export const projectLists: ProjectCardProps[] = [
  {
    title: 'Moving (무빙)',
    subtitle: '이사 전문가와 사용자를 연결하는 매칭 플랫폼',
    imageSrc: '/bg/bg_moving.png',
    logoSrc: '/logo/logo_moving.png',
    href: '/projects/moving',
    links: [
      { type: 'fe', href: 'https://github.com/fs08-moving-f5/fs08-moving-f5-fe' },
      { type: 'be', href: 'https://github.com/fs08-moving-f5/fs08-moving-f5-be' },
      { type: 'demo', href: 'https://www.gomoving.shop' },
      { type: 'api', href: 'https://api.gomoving.shop/docs' },
    ],
    role: 'Team Lead, PM, Devops',
    keywords: ['운영 관점', '성능·구조', '기술적 판단'],
    period: '25. 11. 25. - 26. 01. 26.',
    techStack: [
      'TypeScript',
      'Next.js',
      'Tanstack Query',
      'Zustand',
      'TailwindCSS',
      'Vercel',
      'Express',
      'Prisma',
      'PostgreSQL',
      'Ubuntu',
      'Nginx',
      'Docker',
      'Github Actions',
      'OpenAPI',
      'AWS',
      'Jest',
    ],
  },
  {
    title: 'Docthrough (독스루)',
    subtitle: '함께 번역하며 배우는 협업형 문서 학습 플랫폼',
    imageSrc: '/bg/bg_docthrough.png',
    logoSrc: '/logo/logo_docthrough.png',
    href: '/projects/docthrough',
    links: [
      { type: 'fe', href: 'https://github.com/fs08-docthrough-team2/fs08-docthrough-team2-fe' },
      { type: 'be', href: 'https://github.com/fs08-docthrough-team2/fs08-docthrough-team2-be' },
      { type: 'demo', href: 'https://fs08-docthrough-team2-fe.vercel.app/' },
      { type: 'api', href: 'https://fs08-docthrough.onrender.com/api-docs/' },
    ],
    role: 'Team Lead, PM, FE Lead, Devops',
    keywords: ['UX 설계', '협업 중심', '프론트엔드 리딩'],
    period: '25. 10. 17. - 25. 11. 11.',
    techStack: ['JavaScript', 'Next.js', 'Tanstack Query', 'Zustand', 'SCSS', 'Vercel', 'Render'],
  },
  {
    title: '공부의 숲',
    subtitle: '자기주도 학습의 지속성을 높이는 학습 관리 서비스',
    imageSrc: '/bg/bg_studyforest.png',
    logoSrc: '/logo/logo_studyforest.png',
    href: '/projects/studyforest',
    links: [
      { type: 'fe', href: 'https://github.com/MinJun916/fs08-studyforest-team1-fe' },
      { type: 'be', href: 'https://github.com/MinJun916/fs08-studyforest-team1-be' },
      { type: 'demo', href: 'https://fs08-studyforest-team1-fe.vercel.app/' },
      { type: 'api', href: 'https://studyforest-n1at.onrender.com/api-docs/' },
    ],
    role: 'Team Lead, PM, FE Lead, BE Lead, Devops',
    keywords: ['문제 정의', '서비스 구조', '기본기'],
    period: '25. 08. 26. - 25. 09. 12.',
    techStack: ['JavaScript', 'React', 'Express', 'Prisma', 'PostgreSQL', 'Vercel', 'Render'],
  },
];

export const sideProjectLists: SideProjectCardProps[] = [
  {
    title: '디스코드 자동화 봇',
    description:
      '팀 프로젝트 과정에서 반복되는 커뮤니케이션과 운영 업무를 자동화하기 위해 직접 설계·개발한 디스코드 봇',
    techStack: ['TypeScript', 'Discord.js'],
    repository: 'https://github.com/MinJun916/discord-automated-bot',
  },
  {
    title: '포트폴리오 사이트',
    description:
      '나의 문제 해결 방식과 기술적 판단 과정을 효과적으로 전달하기 위해 직접 설계·구현한 개인 포트폴리오 웹사이트',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    repository: 'https://github.com/MinJun916/portfolio',
  },
];

export type EtcProjectItem = SideProjectCardProps & { slug: string };

export const etcProjectLists: EtcProjectItem[] = [
  {
    slug: 'openclaw',
    title: 'OpenClaw',
    description: 'OpenClaw 관련 프로젝트입니다. 상세 내용은 추후 업데이트 예정입니다.',
    techStack: [],
    repository: 'https://github.com/openclaw/openclaw',
    href: '/projects/etc/openclaw',
  },
];

export const getEtcProjectBySlug = (slug: string): EtcProjectItem | undefined =>
  etcProjectLists.find((p) => p.slug === slug);
