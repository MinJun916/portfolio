import Image from 'next/image';
import { Github, Globe, Server } from 'lucide-react';
import type { ProjectLink } from '@/types/projects';

const linkConfig: Record<ProjectLink['type'], { label: string; icon: typeof Github }> = {
  fe: { label: 'FE', icon: Github },
  be: { label: 'BE', icon: Github },
  demo: { label: 'Demo', icon: Globe },
  api: { label: 'API', icon: Server },
};

const LINK_ORDER: ProjectLink['type'][] = ['fe', 'be', 'demo', 'api'];

type ProjectHeroHeaderProps = {
  title: string;
  logoSrc?: string;
  links: ProjectLink[];
};

const ProjectHeroHeader = ({ title, logoSrc, links }: ProjectHeroHeaderProps) => {
  const linkByType = Object.fromEntries(links.map((l) => [l.type, l.href])) as Partial<
    Record<ProjectLink['type'], string>
  >;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 sm:gap-5">
        {logoSrc ? (
          <div className="relative size-14 shrink-0 overflow-hidden rounded-xl sm:size-16">
            <Image src={logoSrc} alt="" fill className="object-cover" sizes="64px" />
          </div>
        ) : (
          <div className="bg-primary-foreground/10 text-primary-foreground flex size-14 shrink-0 items-center justify-center rounded-xl text-xl font-semibold sm:size-16 sm:text-2xl">
            {title.charAt(0)}
          </div>
        )}
        <h2 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          {title}
        </h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {LINK_ORDER.map((type) => {
          const href = linkByType[type];
          if (!href) return null;
          const { label, icon: Icon } = linkConfig[type];
          return (
            <a
              key={type}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground border-foreground/10 hover:border-foreground/20 bg-background/50 inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors"
            >
              <Icon className="size-4" />
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectHeroHeader;
