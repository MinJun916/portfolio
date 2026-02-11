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

const ProjectContribution = ({ contribution }: ProjectContributionProps) => {
  const { title, items } = contribution;

  return (
    <section className="bg-primary-subtle flex min-h-[calc(100dvh-3.5rem)] w-full flex-shrink-0 snap-start snap-always items-start px-4 py-12 sm:min-h-[calc(100dvh-4rem)] sm:px-6 sm:py-16 md:px-10 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-foreground mb-8 text-xl font-semibold tracking-tight sm:mb-10 sm:text-2xl md:text-3xl">
          {title}
        </h2>
        <div className="space-y-10 sm:space-y-12">
          {items.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className={`flex justify-start ${!isLeft ? 'sm:justify-end' : ''}`}>
                <div
                  className={`w-full max-w-[42rem] sm:text-left ${!isLeft ? 'sm:text-right' : ''}`}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectContribution;
