import ProjectCard from '@/components/ProjectCard';
import SideProjectCard from '@/components/SideProjectCard';
import { projectLists, sideProjectLists } from '@/lib/projectLists';

const Projects = () => {
  return (
    <section className="bg-primary-subtle w-full flex-shrink-0 snap-start">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[1200px] flex-col justify-center px-6 py-10 sm:px-8 sm:py-12">
        <div className="w-full">
          <h2 className="text-foreground mb-2 text-left text-2xl font-bold sm:text-3xl">
            Projects
          </h2>
          <p className="text-foreground/80 mb-6 text-left text-sm leading-relaxed sm:text-base">
            풀스택 개발 기술을 활용하여 성능과 UX, 최적화에 중점을 두고 개발한 주요 프로젝트입니다.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {projectLists.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <h2 className="text-foreground mt-10 mb-4 text-left text-xl font-bold sm:text-2xl">
          Side Project
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {sideProjectLists.map((project) => (
            <SideProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
