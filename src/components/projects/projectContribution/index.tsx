import ProjectSection from '@/components/projects/ProjectSection';
import AnimateInView from '@/components/shared/AnimateInView';
import { parseBold } from '@/lib/parseBold';

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
  <ProjectSection
    id="section-contribution"
    title={contribution.title}
    maxWidth="wide"
    titleClassName="mb-8 sm:mb-10"
  >
    <div className="space-y-12 sm:space-y-14">
      {contribution.items.map((item, i) => {
        const isLeft = i % 2 === 0;
        return (
          <AnimateInView key={i} delay={i * 80} variant="fade-up">
            <div className={`flex w-full min-w-0 justify-start ${!isLeft ? 'sm:justify-end' : ''}`}>
              <article
                className={`border-primary/30 bg-primary before:border-t-border after:border-t-primary relative w-full max-w-[42rem] min-w-0 rounded-2xl border p-5 text-left before:absolute before:top-full before:h-0 before:w-0 before:border-[14px] before:border-transparent after:absolute after:top-[calc(100%-1px)] after:h-0 after:w-0 after:border-[12px] after:border-transparent sm:p-6 ${isLeft ? 'before:left-[1.25rem] after:left-[1.25rem] sm:before:left-[1.75rem] sm:after:left-[1.75rem]' : 'before:right-[1.25rem] after:right-[1.25rem] sm:before:right-[1.75rem] sm:after:right-[1.75rem]'}`}
              >
                <h3
                  className={`text-foreground mb-3 text-base font-semibold tracking-tight sm:mb-4 sm:text-lg ${!isLeft ? 'sm:text-right' : ''}`}
                >
                  {item.title}
                </h3>
                <div className="text-foreground/80 space-y-2 text-base leading-[1.8] break-keep sm:leading-[1.85] md:text-[1.0625rem]">
                  {item.paragraphs.map((para, j) => (
                    <p key={j}>{parseBold(para)}</p>
                  ))}
                </div>
              </article>
            </div>
          </AnimateInView>
        );
      })}
    </div>
  </ProjectSection>
);

export default ProjectContribution;
