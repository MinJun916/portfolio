import Footer from '@/components/home/Footer';
import ProjectCard from '@/components/home/ProjectCard';
import SideProjectCard from '@/components/home/SideProjectCard';
import AnimateInView from '@/components/shared/AnimateInView';
import { projectLists, sideProjectLists } from '@/lib/projectLists';

const ProjectsLandingPage = () => {
  return (
    <>
      <section className="bg-primary-subtle flex min-h-[calc(100vh-3.5rem)] w-full flex-shrink-0 snap-start flex-col sm:min-h-[calc(100vh-4rem)]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
          <AnimateInView delay={0}>
            <header className="mb-8 sm:mb-10 md:mb-12">
              <h1 className="text-foreground mb-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                Projects
              </h1>
              <p className="text-foreground/80 max-w-[540px] text-sm leading-relaxed sm:text-base">
                성능과 UX, 운영 관점을 고려해 진행한 주요 프로젝트입니다.
                <br />
                카드를 선택하면 상세 내용을 볼 수 있습니다.
              </p>
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
            <h2 className="text-foreground mt-12 mb-6 text-lg font-bold tracking-tight sm:mt-16 sm:mb-8 sm:text-xl md:text-2xl">
              Side Project
            </h2>
          </AnimateInView>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {sideProjectLists.map((project, i) => (
              <AnimateInView key={project.title} delay={80 + i * 80}>
                <SideProjectCard {...project} />
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProjectsLandingPage;
