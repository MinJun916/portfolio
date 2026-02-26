export type ProjectLink = {
  type: 'fe' | 'be' | 'demo' | 'api';
  href: string;
};

export type ProjectCardProps = {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  logoSrc?: string;
  href?: string;
  links: ProjectLink[];
  role: string;
  keywords: string[];
  period: string;
  techStack: string[];
};

export type SideProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  repository?: string;
  /** 카드 클릭 시 이동할 경로 (있으면 카드 전체가 링크) */
  href?: string;
};
