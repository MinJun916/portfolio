import type { ProjectCardProps, SideProjectCardProps } from '@/types/projects';

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
