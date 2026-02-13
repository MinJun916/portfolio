import ProjectSection from '@/components/projects/ProjectSection';
import AnimateInView from '@/components/shared/AnimateInView';
import { parseBold } from '@/lib/parseBold';

export type ProjectOverviewProps = {
  overview: { title: string; detail: string[] };
};

const ProjectOverview = ({ overview }: ProjectOverviewProps) => (
  <ProjectSection title={overview.title} maxWidth="wide" align="center">
    <AnimateInView delay={0} variant="fade-up">
      <div className="text-muted-foreground space-y-5 text-base leading-[1.8] break-keep sm:text-lg sm:leading-[1.85] md:text-[1.0625rem] md:leading-[1.85]">
        {overview.detail.map((para, i) => (
          <p key={i}>{parseBold(para)}</p>
        ))}
      </div>
    </AnimateInView>
  </ProjectSection>
);

export default ProjectOverview;
