import ProjectCard from '@/components/home/ProjectCard';
import SideProjectCard from '@/components/home/SideProjectCard';
import { projectLists, sideProjectLists } from '@/lib/projectLists';
import AnimateInView from '@/components/shared/AnimateInView';

const Projects = () => {
  return (
    <section id="projects" className="bg-primary-subtle w-full flex-shrink-0 snap-start">
      <div className="mx-auto flex min-h-[calc(100vh-3.5rem)] w-full max-w-[1200px] flex-col justify-center px-4 py-8 sm:min-h-[calc(100vh-4rem)] sm:px-6 sm:py-10 md:px-8 md:py-12">
        <AnimateInView delay={0}>
          <div className="w-full">
            <h2 className="text-foreground mb-1 text-left text-xl font-bold sm:mb-2 sm:text-2xl md:text-3xl">
              Projects
            </h2>
            <p className="text-foreground/80 mb-4 text-left text-xs leading-relaxed sm:mb-6 sm:text-sm md:text-base">
              풀스택 개발 기술을 활용하여 성능과 UX, 최적화에 중점을 두고 개발한 주요
              프로젝트입니다.
            </p>
          </div>
        </AnimateInView>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-5 lg:grid-cols-3">
          {projectLists.map((project, i) => (
            <AnimateInView key={project.title} delay={80 + i * 60}>
              <ProjectCard {...project} />
            </AnimateInView>
          ))}
        </div>

        <AnimateInView delay={0}>
          <h2 className="text-foreground mt-8 text-left text-lg font-bold sm:mt-10 sm:mb-4 sm:text-xl md:text-2xl">
            Side Project
          </h2>
        </AnimateInView>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-4">
          {sideProjectLists.map((project, i) => (
            <AnimateInView key={project.title} delay={80 + i * 80}>
              <SideProjectCard {...project} />
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
