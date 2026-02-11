import { parseBold } from '@/lib/parseBold';
import AnimateInView from '@/components/shared/AnimateInView';
import ProjectSection from '@/components/projects/ProjectSection';

export type ContributionItem = {
  title: string;
  paragraphs: string[];
};

export type ProjectContributionProps = {
  contribution: {
    title: string;
    items: ContributionItem[];
  };
};

const ProjectContribution = ({ contribution }: ProjectContributionProps) => (
  <ProjectSection title={contribution.title} maxWidth="wide" titleClassName="mb-8 sm:mb-10">
    <div className="space-y-10 sm:space-y-12">
      {contribution.items.map((item, i) => {
        const isLeft = i % 2 === 0;
        return (
          <AnimateInView key={i} delay={i * 80} variant="fade-up">
            <div className={`flex min-w-0 justify-start ${!isLeft ? 'sm:justify-end' : ''}`}>
              <div
                className={`w-full max-w-[42rem] min-w-0 sm:text-left ${!isLeft ? 'sm:text-right' : ''}`}
              >
                <h3 className="text-foreground mb-3 text-base font-semibold sm:text-lg">
                  {item.title}
                </h3>
                <div className="text-muted-foreground space-y-2 text-base leading-[1.8] break-keep sm:leading-[1.85] md:text-[1.0625rem]">
                  {item.paragraphs.map((para, j) => (
                    <p key={j}>{parseBold(para)}</p>
                  ))}
                </div>
              </div>
            </div>
          </AnimateInView>
        );
      })}
    </div>
  </ProjectSection>
);

export default ProjectContribution;
