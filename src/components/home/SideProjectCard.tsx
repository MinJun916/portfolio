'use client';

import { Github } from 'lucide-react';
import Link from 'next/link';

import type { SideProjectCardProps } from '@/types/projects';

const repoButtonClass =
  'bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[10px] font-medium transition-colors sm:text-xs';

const cardContent = (
  title: string,
  description: string,
  techStack: string[],
  repository: string | undefined,
  isCardLink: boolean,
) => {
  const hasRepo = repository && repository !== '#';

  return (
    <div className="flex min-w-0 flex-1 flex-col justify-between p-3 sm:p-3.5">
      <div className="flex flex-col gap-1.5">
        <div className="flex flex-wrap items-center gap-1.5">
          <h3 className="text-foreground text-sm font-bold">{title}</h3>
          {hasRepo ? (
            isCardLink ? (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(repository, '_blank', 'noopener,noreferrer');
                }}
                className={repoButtonClass}
              >
                <Github className="size-2.5 sm:size-3" />
                Repository
              </button>
            ) : (
              <a
                href={repository}
                target="_blank"
                rel="noopener noreferrer"
                className={repoButtonClass}
              >
                <Github className="size-2.5 sm:size-3" />
                Repository
              </a>
            )
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
  );
};

const SideProjectCard = ({
  title,
  description,
  techStack,
  repository,
  href,
}: SideProjectCardProps) => {
  const baseClass = 'border-border bg-card flex overflow-hidden rounded-lg border shadow-sm';
  const linkClass = `${baseClass} transition-colors hover:border-primary-foreground/20 hover:shadow-md`;

  if (href) {
    return (
      <Link href={href} className={`block ${linkClass}`}>
        {cardContent(title, description, techStack, repository, true)}
      </Link>
    );
  }

  return (
    <article className={baseClass}>
      {cardContent(title, description, techStack, repository, false)}
    </article>
  );
};

export default SideProjectCard;
