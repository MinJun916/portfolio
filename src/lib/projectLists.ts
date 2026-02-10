import type { ProjectCardProps } from '@/types/projects';

export const projectLists: ProjectCardProps[] = [
  {
    title: 'Moving (무빙)',
    imageSrc: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    links: [
      { type: 'fe', href: 'https://github.com' },
      { type: 'be', href: 'https://github.com' },
      { type: 'demo', href: 'https://example.com' },
      { type: 'api', href: 'https://example.com/docs' },
    ],
    description:
      '기사님과 고객을 연결하는 이사 견적 비교 및 매칭 플랫폼입니다. 신뢰할 수 있는 견적 관리와 실시간 배차 기능을 제공합니다.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Zustand',
      'React Query',
      'TailwindCSS',
      'Prisma',
      'PostgreSQL',
      'AWS S3',
      'OAuth',
    ],
  },
  {
    title: 'Project B',
    imageSrc: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    links: [
      { type: 'fe', href: 'https://github.com' },
      { type: 'be', href: 'https://github.com' },
      { type: 'demo', href: 'https://example.com' },
      { type: 'api', href: '#' },
    ],
    description: '풀스택으로 구현한 웹 서비스입니다. 반응형 UI와 API 설계를 담당했습니다.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Project C',
    imageSrc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    links: [
      { type: 'fe', href: 'https://github.com' },
      { type: 'be', href: 'https://github.com' },
      { type: 'demo', href: '#' },
      { type: 'api', href: 'https://example.com/docs' },
    ],
    description: '팀 프로젝트로 기획부터 배포까지 참여한 서비스입니다.',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'Docker', 'AWS'],
  },
];

export const sideProjectLists: ProjectCardProps[] = [
  {
    title: '포트폴리오 사이트',
    imageSrc: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
    links: [
      { type: 'fe', href: 'https://github.com' },
      { type: 'be', href: '#' },
      { type: 'demo', href: '#' },
      { type: 'api', href: '#' },
    ],
    description:
      'Next.js와 Tailwind로 만든 개인 포트폴리오입니다. 스냅 스크롤과 반응형 레이아웃을 적용했습니다.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: '미니 유틸 앱',
    imageSrc: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    links: [
      { type: 'fe', href: 'https://github.com' },
      { type: 'be', href: '#' },
      { type: 'demo', href: 'https://example.com' },
      { type: 'api', href: '#' },
    ],
    description: '간단한 변환·계산 도구를 모아둔 웹 앱입니다. 클라이언트 사이드만으로 동작합니다.',
    techStack: ['React', 'Vite', 'TypeScript'],
  },
];
