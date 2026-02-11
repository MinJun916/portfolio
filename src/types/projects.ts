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
};
