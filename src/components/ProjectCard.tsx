import { Github, Globe, Server, type LucideIcon } from 'lucide-react';
import type { ProjectLink, ProjectCardProps } from '@/types/projects';

const linkConfig: Record<
  ProjectLink['type'],
  { label: string; icon: LucideIcon; className: string }
> = {
  fe: {
    label: 'FE',
    icon: Github,
    className: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  },
  be: {
    label: 'BE',
    icon: Github,
    className: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  },
  demo: {
    label: 'Demo',
    icon: Globe,
    className: 'bg-foreground/10 text-foreground hover:bg-foreground/15',
  },
  api: {
    label: 'API',
    icon: Server,
    className: 'bg-foreground/10 text-foreground hover:bg-foreground/15',
  },
};

const LINK_ORDER: ProjectLink['type'][] = ['fe', 'be', 'demo', 'api'];

const ProjectCard = ({ title, imageSrc, links, description, techStack }: ProjectCardProps) => {
  const linkByType = Object.fromEntries(links.map((l) => [l.type, l.href])) as Partial<
    Record<ProjectLink['type'], string>
  >;

  return (
    <article className="border-border bg-card flex h-full min-h-[620px] flex-col overflow-hidden rounded-lg border shadow-sm">
      {/* 위: 이미지 영역 */}
      <div className="bg-muted relative aspect-[2/1] w-full flex-shrink-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      </div>

      {/* 아래: 텍스트 정보 영역 */}
      <div className="flex flex-1 flex-col gap-3 p-3 sm:gap-4 sm:p-4">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-foreground text-lg font-bold sm:text-xl">{title}</h2>
          <div className="flex flex-wrap gap-1.5">
            {LINK_ORDER.map((type) => {
              const config = linkConfig[type];
              const Icon = config.icon;
              const href = linkByType[type];
              const isActive = href && href !== '#';

              if (isActive) {
                return (
                  <a
                    key={type}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium transition-colors sm:px-2.5 sm:py-1 ${config.className}`}
                  >
                    <Icon className="size-3 sm:size-3.5" />
                    {config.label}
                  </a>
                );
              }
              return (
                <span
                  key={type}
                  aria-disabled
                  className="border-border bg-muted/50 text-muted-foreground inline-flex cursor-default items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium sm:px-2.5 sm:py-1"
                >
                  <Icon className="size-3 sm:size-3.5" />
                  {config.label}
                </span>
              );
            })}
          </div>
        </div>

        <p className="text-foreground/90 line-clamp-4 text-sm leading-relaxed">{description}</p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="border-border bg-muted text-muted-foreground rounded-md border px-2 py-0.5 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
