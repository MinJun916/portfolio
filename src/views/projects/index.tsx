import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import Footer from '@/components/home/Footer';
import ProjectCard from '@/components/home/ProjectCard';
import SideProjectCard from '@/components/home/SideProjectCard';
import AnimateInView from '@/components/shared/AnimateInView';
import { etcProjectLists, projectLists, sideProjectLists } from '@/lib/projectLists';

const ProjectsLandingPage = () => {
  return (
    <>
      <section className="bg-primary-subtle flex min-h-[calc(100vh-3.5rem)] w-full flex-shrink-0 snap-start flex-col sm:min-h-[calc(100vh-4rem)]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 md:gap-12 md:px-8 md:py-20">
          <AnimateInView delay={0}>
            <header>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <h1 className="text-foreground m-0 text-2xl leading-tight font-bold tracking-tight sm:text-3xl md:text-4xl">
                    Projects
                  </h1>
                  <p className="text-foreground/80 max-w-[540px] text-sm leading-relaxed sm:text-base">
                    성능과 UX, 운영 관점을 고려해 진행한 주요 프로젝트입니다.
                    <br />
                    카드를 선택하면 상세 내용을 볼 수 있습니다.
                  </p>
                </div>
                <Link
                  href="/"
                  className="text-foreground hover:border-foreground/15 border-foreground/[0.08] inline-flex shrink-0 items-center gap-1.5 rounded-xl border bg-white/90 px-4 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:gap-2 sm:px-5 sm:py-3 sm:text-base"
                >
                  전체 포트폴리오 보러 가기
                  <ChevronRight className="size-4 shrink-0 sm:size-4.5" />
                </Link>
              </div>
            </header>
          </AnimateInView>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {projectLists.map((project, i) => (
              <AnimateInView key={project.title} delay={80 + i * 80}>
                <ProjectCard {...project} />
              </AnimateInView>
            ))}
          </div>

          <AnimateInView delay={0}>
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-col gap-1">
                <h2 className="text-foreground text-lg font-bold tracking-tight sm:text-xl md:text-2xl">
                  Side Project
                </h2>
                <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
                  새로운 도전을 위해 진행한 사이드 프로젝트입니다.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                {sideProjectLists.map((project, i) => (
                  <AnimateInView key={project.title} delay={80 + i * 80}>
                    <SideProjectCard {...project} />
                  </AnimateInView>
                ))}
              </div>
            </div>
          </AnimateInView>

          <AnimateInView delay={0}>
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-col gap-1">
                <h2 className="text-foreground text-lg font-bold tracking-tight sm:text-xl md:text-2xl">
                  Etc...
                </h2>
                <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
                  그 외 참여·실험한 프로젝트나 도구입니다.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                {etcProjectLists.map((project, i) => (
                  <AnimateInView key={project.title} delay={80 + i * 80}>
                    <SideProjectCard {...project} />
                  </AnimateInView>
                ))}
              </div>
            </div>
          </AnimateInView>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProjectsLandingPage;
