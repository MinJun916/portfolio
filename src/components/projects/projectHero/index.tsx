import { projectLists } from '@/lib/projectLists';
import ProjectHeroSection from './ProjectHeroSection';
import ProjectHeroHeader from './ProjectHeroHeader';
import ProjectHeroMeta from './ProjectHeroMeta';
import ProjectHeroImage from './ProjectHeroImage';

type ProjectHeroProps = {
  projectName: string;
};

const ProjectHero = ({ projectName }: ProjectHeroProps) => {
  const project = projectLists.find((p) => p.href === `/projects/${projectName}`);
  if (!project) return null;

  const { title, subtitle, imageSrc, logoSrc, period, role, techStack, links } = project;

  return (
    <ProjectHeroSection>
      <div className="space-y-8 text-left sm:space-y-10 md:space-y-12">
        <ProjectHeroHeader title={title} logoSrc={logoSrc ?? imageSrc} links={links} />
        <p className="text-muted-foreground max-w-[42rem] text-base leading-[1.8] sm:text-lg sm:leading-[1.8]">
          {subtitle ?? '—'}
        </p>
        <ProjectHeroMeta period={period} role={role} techStack={techStack} />
      </div>
      <ProjectHeroImage imageSrc={imageSrc} />
    </ProjectHeroSection>
  );
};

export default ProjectHero;
