import AnimateInView from '@/components/shared/AnimateInView';
import { projectLists } from '@/lib/projectLists';

import ProjectHeroHeader from './ProjectHeroHeader';
import ProjectHeroImage from './ProjectHeroImage';
import ProjectHeroMeta from './ProjectHeroMeta';
import ProjectHeroSection from './ProjectHeroSection';

type ProjectHeroProps = {
  projectName: string;
};

const ProjectHero = ({ projectName }: ProjectHeroProps) => {
  const project = projectLists.find((p) => p.href === `/projects/${projectName}`);
  if (!project) return null;

  const { title, subtitle, imageSrc, logoSrc, period, role, techStack, links } = project;

  return (
    <ProjectHeroSection>
      <AnimateInView delay={0} variant="fade-up">
        <div className="space-y-8 text-left sm:space-y-10 md:space-y-12">
          <ProjectHeroHeader title={title} logoSrc={logoSrc ?? imageSrc} links={links} />
          <p className="text-foreground/80 max-w-[42rem] text-base leading-[1.8] sm:text-lg sm:leading-[1.8]">
            {subtitle ?? '—'}
          </p>
          <ProjectHeroMeta period={period} role={role} techStack={techStack} />
        </div>
      </AnimateInView>
      <AnimateInView delay={120} variant="fade-up">
        <ProjectHeroImage imageSrc={imageSrc} />
      </AnimateInView>
    </ProjectHeroSection>
  );
};

export default ProjectHero;
