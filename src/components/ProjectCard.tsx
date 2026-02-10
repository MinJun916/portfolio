'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, Globe, Server, type LucideIcon } from 'lucide-react';
import type { ProjectLink, ProjectCardProps } from '@/types/projects';
import KeywordChip from '@/components/KeywordChip';

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

const ProjectCard = ({
  title,
  subtitle,
  imageSrc,
  href = '#',
  links,
  role,
  keywords,
  period,
  techStack,
}: ProjectCardProps) => {
  const linkByType = Object.fromEntries(links.map((l) => [l.type, l.href])) as Partial<
    Record<ProjectLink['type'], string>
  >;

  return (
    <Link
      href={href}
      className="border-border bg-card flex h-full min-h-[560px] flex-col overflow-hidden rounded-lg border shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:opacity-95 hover:shadow-md"
    >
      {/* 위: 이미지 영역 */}
      <div className="bg-muted relative aspect-[2/1] w-full flex-shrink-0 overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain object-center"
          />
        ) : null}
      </div>

      {/* 아래: 텍스트 정보 영역 */}
      <div className="flex flex-1 flex-col gap-3 p-3 sm:gap-4 sm:p-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-foreground text-lg font-bold sm:text-xl">{title}</h2>
          {subtitle && <p className="text-muted-foreground text-sm leading-snug">{subtitle}</p>}
          <div className="flex flex-wrap gap-1.5">
            {LINK_ORDER.map((type) => {
              const config = linkConfig[type];
              const Icon = config.icon;
              const linkHref = linkByType[type];
              const isActive = linkHref && linkHref !== '#';

              if (isActive) {
                return (
                  <span
                    key={type}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(linkHref, '_blank', 'noopener,noreferrer');
                    }}
                    className={`inline-flex cursor-pointer items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium transition-colors sm:px-2.5 sm:py-1 ${config.className}`}
                  >
                    <Icon className="size-3 sm:size-3.5" />
                    {config.label}
                  </span>
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

        {/* 본문: Role, Keywords, 기간 */}
        <div className="flex flex-1 flex-col justify-start gap-2.5 text-sm sm:gap-4">
          <div>
            <p className="text-muted-foreground mb-0.5 text-xs font-semibold tracking-wider uppercase">
              Role
            </p>
            <p className="text-foreground/90 leading-snug">{role}</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-0.5 text-xs font-semibold tracking-wider uppercase">
              Keywords
            </p>
            <p className="text-foreground/90 flex flex-wrap gap-1.5 leading-snug">
              {keywords.map((kw) => (
                <KeywordChip key={kw} keyword={kw} />
              ))}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground mb-0.5 text-xs font-semibold tracking-wider uppercase">
              기간
            </p>
            <p className="text-foreground/90 leading-snug">{period}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-2">
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
    </Link>
  );
};

export default ProjectCard;
