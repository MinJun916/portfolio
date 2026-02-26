import Link from 'next/link';

import { parseBold } from '@/lib/parseBold';
import { getEtcProjectBySlug } from '@/lib/projectLists';
import { OPENCLAW_CHANGELOG } from '@/lib/summary/etcProjects/openclaw';

const ProjectOpenClawPage = () => {
  const project = getEtcProjectBySlug('openclaw');
  if (!project) return null;

  return (
    <section className="bg-primary-subtle flex min-h-[calc(100dvh-3.5rem)] w-full flex-col sm:min-h-[calc(100dvh-4rem)]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 md:gap-12 md:px-8 md:py-20">
        <div className="flex flex-col gap-6">
          <h1 className="text-foreground m-0 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {project.title}
          </h1>
          <p className="text-foreground/85 max-w-[640px] text-base leading-relaxed sm:text-lg">
            {project.description}
          </p>
          {project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="border-border bg-muted text-muted-foreground rounded border px-2 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mx-auto w-full max-w-3xl">
          <h2 className="text-foreground mb-6 text-left text-xl font-bold sm:mb-10 sm:text-2xl md:text-3xl">
            Changelog
          </h2>
          <div className="relative">
            {OPENCLAW_CHANGELOG.map((entry, i) => (
              <div key={i} className="group relative">
                <div
                  className="bg-foreground/20 absolute top-14 bottom-0 left-6 w-[2px]"
                  aria-hidden
                />
                <div
                  className="border-foreground/50 bg-background absolute top-6 left-4 z-10 flex size-4 items-center justify-center rounded-full border-2"
                  aria-hidden
                >
                  <div className="bg-foreground/80 size-2 rounded-full" />
                </div>
                <div className="mb-8 ml-12">
                  <div className="border-border/60 bg-primary/20 rounded-lg border shadow-sm">
                    <div className="p-6">
                      {(entry.date || entry.title) && (
                        <div className="text-muted-foreground mb-3 space-y-0.5 text-xs font-medium sm:text-sm">
                          {entry.date && <span className="block">{entry.date}</span>}
                          {entry.title && (
                            <span className="text-foreground/90 block font-semibold sm:text-sm">
                              {entry.title}
                            </span>
                          )}
                        </div>
                      )}
                      <div className="text-foreground space-y-2 text-sm leading-relaxed sm:text-base">
                        <p>{parseBold(entry.reason)}</p>
                        <p>{parseBold(entry.action)}</p>
                        {entry.result ? <p>{parseBold(entry.result)}</p> : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/projects"
          className="text-foreground hover:border-foreground/15 border-foreground/[0.08] inline-flex w-fit items-center gap-2 rounded-xl border bg-white/90 px-5 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
        >
          프로젝트 목록으로
        </Link>
      </div>
    </section>
  );
};

export default ProjectOpenClawPage;
