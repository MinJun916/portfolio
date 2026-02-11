import { parseBold } from '@/lib/parseBold';

export type ProjectOverviewProps = {
  overview: { title: string; detail: string[] };
};

const ProjectOverview = ({ overview }: ProjectOverviewProps) => {
  const { title, detail } = overview;

  return (
    <section className="bg-primary-subtle flex min-h-[calc(100dvh-3.5rem)] w-full flex-shrink-0 snap-start snap-always items-center px-4 py-12 sm:min-h-[calc(100dvh-4rem)] sm:px-6 sm:py-16 md:px-10 md:py-20">
      <div className="mx-auto w-full max-w-[42rem] text-left">
        <h2 className="text-foreground mb-6 text-xl font-semibold tracking-tight sm:mb-8 sm:text-2xl md:text-3xl">
          {title}
        </h2>
        <div className="text-muted-foreground space-y-5 text-base leading-[1.8] break-keep sm:text-lg sm:leading-[1.85] md:text-[1.0625rem] md:leading-[1.85]">
          {detail.map((para, i) => (
            <p key={i}>{parseBold(para)}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
