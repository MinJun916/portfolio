import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import ProjectCard from '@/components/home/ProjectCard';
import AnimateInView from '@/components/shared/AnimateInView';
import { projectLists } from '@/lib/projectLists';

const Projects = () => {
  return (
    <section id="projects" className="bg-primary-subtle w-full flex-shrink-0 snap-start">
      <div className="mx-auto flex min-h-[calc(100vh-3.5rem)] w-full max-w-[1200px] flex-col justify-center px-4 py-8 sm:min-h-[calc(100vh-4rem)] sm:px-6 sm:py-10 md:px-8 md:py-12">
        <AnimateInView delay={0}>
          <div className="mb-4 flex w-full flex-wrap items-center justify-between gap-6 sm:mb-6">
            <div className="min-w-0 flex-1">
              <h2 className="text-foreground m-0 text-xl leading-tight font-bold sm:text-2xl md:text-3xl">
                Major Projects
              </h2>
              <p className="text-foreground/80 mt-1 mb-0 text-left text-xs leading-relaxed sm:mt-2 sm:text-sm md:text-base">
                풀스택 개발 기술을 활용하여 성능과 UX, 최적화에 중점을 두고 개발한 주요
                프로젝트입니다.
              </p>
            </div>
            <Link
              href="/projects"
              className="text-foreground hover:border-foreground/15 border-foreground/[0.08] inline-flex shrink-0 items-center gap-1.5 rounded-xl border bg-white/90 px-4 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:gap-2 sm:px-5 sm:py-3 sm:text-base"
            >
              전체 프로젝트 보기
              <ChevronRight className="size-4 shrink-0 sm:size-4.5" />
            </Link>
          </div>
        </AnimateInView>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-5 lg:grid-cols-3">
          {projectLists.map((project, i) => (
            <AnimateInView key={project.title} delay={80 + i * 60}>
              <ProjectCard {...project} />
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
