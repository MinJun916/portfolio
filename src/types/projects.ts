export type ProjectLink = {
  type: 'fe' | 'be' | 'demo' | 'api';
  href: string;
};

export type ProjectCardProps = {
  title: string;
  /** 제목 밑 부제목 (한 줄 요약) */
  subtitle?: string;
  imageSrc?: string;
  links: ProjectLink[];
  /** 담당 역할 (예: Team Lead, FE Lead, BE Lead) */
  role: string;
  /** 키워드 (예: #문제정의 #서비스 구조) */
  keywords: string[];
  /** 프로젝트 기간 (예: 25. 08. 26. - 25. 09. 12.) */
  period: string;
  techStack: string[];
};

export type SideProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  repository?: string;
};
