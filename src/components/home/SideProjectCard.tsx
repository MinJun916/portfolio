import { Github } from 'lucide-react';
import type { SideProjectCardProps } from '@/types/projects';

const SideProjectCard = ({ title, description, techStack, repository }: SideProjectCardProps) => {
  const hasRepo = repository && repository !== '#';

  return (
    <article className="border-border bg-card flex overflow-hidden rounded-lg border shadow-sm">
      <div className="flex min-w-0 flex-1 flex-col justify-between p-3 sm:p-3.5">
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-wrap items-center gap-1.5">
            <h3 className="text-foreground text-sm font-bold">{title}</h3>
            {hasRepo ? (
              <a
                href={repository}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[10px] font-medium transition-colors sm:text-xs"
              >
                <Github className="size-2.5 sm:size-3" />
                Repository
              </a>
            ) : (
              <span
                aria-disabled
                className="border-border bg-muted/50 text-muted-foreground inline-flex cursor-default items-center gap-0.5 rounded border px-1.5 py-0.5 text-[10px] font-medium sm:text-xs"
              >
                <Github className="size-2.5 sm:size-3" />
                Repository
              </span>
            )}
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
