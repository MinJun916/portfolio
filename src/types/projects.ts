export type ProjectLink = {
  type: 'fe' | 'be' | 'demo' | 'api';
  href: string;
};

export type ProjectCardProps = {
  title: string;
  imageSrc?: string;
  links: ProjectLink[];
  description: string;
  techStack: string[];
};

export type SideProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  repository?: string;
};
