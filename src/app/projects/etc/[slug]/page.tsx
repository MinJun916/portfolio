import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getEtcProjectBySlug } from '@/lib/projectLists';

import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getEtcProjectBySlug(slug);
  if (!project) return { title: 'Project | 신민준 포트폴리오' };
  return {
    title: `${project.title} | 신민준 포트폴리오`,
    description: project.description,
  };
}

const EtcProjectPage = async ({ params }: Props) => {
  const { slug } = await params;
  const project = getEtcProjectBySlug(slug);
  if (!project) notFound();

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

export default EtcProjectPage;
