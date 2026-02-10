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

const LINK_ORDER: ProjectLink['type'][] = ['fe', 'be'];

const SideProjectCard = ({ title, imageSrc, links, description, techStack }: ProjectCardProps) => {
  const linkByType = Object.fromEntries(links.map((l) => [l.type, l.href])) as Partial<
    Record<ProjectLink['type'], string>
  >;

  return (
    <article className="border-border bg-card flex overflow-hidden rounded-lg border shadow-sm">
      {/* 왼쪽: 이미지 */}
      <div className="bg-muted relative h-full min-h-[100px] w-[120px] flex-shrink-0 sm:w-[140px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      </div>

      {/* 오른쪽: 텍스트 */}
      <div className="flex min-w-0 flex-1 flex-col justify-between p-3 sm:p-3.5">
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-wrap items-center gap-1.5">
            <h3 className="text-foreground text-sm font-bold">{title}</h3>
            <div className="flex flex-wrap gap-1">
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
                      className={`inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[10px] font-medium transition-colors sm:text-xs ${config.className}`}
                    >
                      <Icon className="size-2.5 sm:size-3" />
                      {config.label}
                    </a>
                  );
                }
                return (
                  <span
                    key={type}
                    aria-disabled
                    className="border-border bg-muted/50 text-muted-foreground inline-flex cursor-default items-center gap-0.5 rounded border px-1.5 py-0.5 text-[10px] font-medium sm:text-xs"
                  >
                    <Icon className="size-2.5 sm:size-3" />
                    {config.label}
                  </span>
                );
              })}
            </div>
          </div>

          <p className="text-foreground/90 line-clamp-2 text-xs leading-relaxed">{description}</p>
        </div>

        <div className="mt-2 flex flex-wrap gap-1">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="border-border bg-muted text-muted-foreground rounded border px-1.5 py-0.5 text-[10px] sm:text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default SideProjectCard;
