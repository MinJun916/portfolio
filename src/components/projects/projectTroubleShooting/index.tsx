import { parseBold } from '@/lib/parseBold';

export type TroubleShootingSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
  paragraphsAfterList?: string[];
  steps?: { title: string; list: string[] }[];
};

export type TroubleShootingCase = {
  caseTitle: string;
  sections: TroubleShootingSection[];
  /** 'zigzag' = primary cards 좌우 번갈아 배치, 미지정 시 2x2 그리드(회색/흰색/primary 카드) */
  layout?: 'grid' | 'zigzag';
};

export type ProjectTroubleShootingProps = {
  troubleShooting: {
    title: string;
    cases: TroubleShootingCase[];
  };
};

const BlockContent = ({
  block,
  align = 'left',
  variant = 'default',
}: {
  block: TroubleShootingSection;
  align?: 'left' | 'right';
  variant?: 'default' | 'primary';
}) => {
  const isPrimary = variant === 'primary';
  const listCls = isPrimary
    ? 'text-primary-foreground/90 marker:text-primary-foreground/60 list-outside list-disc space-y-2 pl-5 sm:pl-6'
    : 'text-foreground/80 marker:text-foreground/50 list-outside list-disc space-y-2 pl-5 sm:pl-6';
  const listClsRight = isPrimary
    ? 'text-primary-foreground/90 marker:text-primary-foreground/60 list-inside space-y-2 pr-5 sm:pr-6 list-disc text-right'
    : 'text-foreground/80 marker:text-foreground/50 list-inside space-y-2 pr-5 sm:pr-6 list-disc text-right';
  const paraCls = isPrimary
    ? 'text-primary-foreground/90 break-keep text-[15px] leading-[1.85] sm:text-base sm:leading-[1.9]'
    : 'text-foreground/80 break-keep text-[15px] leading-[1.85] sm:text-base sm:leading-[1.9]';
  const stepTitleCls = isPrimary
    ? 'text-primary-foreground text-[15px] font-medium sm:text-base'
    : 'text-foreground/90 text-[15px] font-medium sm:text-base';

  return (
    <div className="space-y-5">
      {block.paragraphs?.map((para, j) => (
        <p key={j} className={paraCls}>
          {parseBold(para)}
        </p>
      ))}
      {block.list && (
        <ul className={align === 'right' ? listClsRight : listCls}>
          {block.list.map((item, j) => (
            <li key={j} className="pl-1 text-[15px] leading-[1.8] break-keep sm:pl-0 sm:text-base">
              {parseBold(item)}
            </li>
          ))}
        </ul>
      )}
      {block.paragraphsAfterList?.map((para, j) => (
        <p key={j} className={paraCls}>
          {parseBold(para)}
        </p>
      ))}
      {block.steps?.map((step, j) => (
        <div key={j} className="space-y-3 pt-2">
          <p className={stepTitleCls}>{step.title}</p>
          <ul className={align === 'right' ? listClsRight : listCls}>
            {step.list.map((item, k) => (
              <li key={k} className="pl-1 text-[15px] leading-[1.8] break-keep sm:text-base">
                {parseBold(item)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const TroubleShootingZigzagCase = ({
  caseTitle,
  sections,
}: {
  caseTitle: string;
  sections: TroubleShootingSection[];
}) => (
  <>
    <h3 className="text-foreground mb-10 text-xl font-semibold tracking-tight sm:mb-12 sm:text-2xl">
      {caseTitle}
    </h3>
    <div className="space-y-12 sm:space-y-14">
      {sections.map((block, i) => {
        const isLeft = i % 2 === 0;
        return (
          <div key={i} className={`flex w-full justify-start ${!isLeft ? 'sm:justify-end' : ''}`}>
            <article
              className={`border-primary/30 bg-primary relative w-full max-w-[42rem] rounded-xl border p-5 sm:p-6 ${isLeft ? 'text-left' : 'text-right'}`}
            >
              <h4 className="text-foreground mb-3 text-base font-semibold tracking-tight sm:mb-4 sm:text-lg">
                {block.title}
              </h4>
              <div className={!isLeft ? 'sm:flex sm:flex-col sm:items-end' : ''}>
                <BlockContent block={block} align={isLeft ? 'left' : 'right'} />
              </div>
            </article>
          </div>
        );
      })}
    </div>
  </>
);

const TroubleShootingGridCase = ({
  caseTitle,
  sections,
}: {
  caseTitle: string;
  sections: TroubleShootingSection[];
}) => (
  <>
    <h3 className="text-foreground mb-10 text-lg font-semibold tracking-tight sm:mb-12 sm:text-xl">
      {caseTitle}
    </h3>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-8">
      {sections.map((block, i) => {
        const isLast = i === sections.length - 1;
        const isGrayCard = i <= 1;
        const isPrimaryCard = isLast;
        const cardClass = isPrimaryCard
          ? 'border-primary/30 bg-primary'
          : isGrayCard
            ? 'border-gray-300 bg-gray-200 dark:border-gray-600 dark:bg-gray-700'
            : 'border-primary-foreground/10 bg-white dark:bg-primary-foreground/5';
        return (
          <article
            key={i}
            className={`relative rounded-xl border p-5 sm:p-6 ${cardClass} ${isLast ? 'sm:col-span-2' : ''}`}
          >
            <h3 className="text-foreground border-primary-foreground/20 mb-5 border-b pb-2 text-base font-semibold tracking-tight sm:mb-6 sm:text-lg">
              {block.title}
            </h3>
            <BlockContent block={block} />
          </article>
        );
      })}
    </div>
  </>
);

const ProjectTroubleShooting = ({ troubleShooting }: ProjectTroubleShootingProps) => {
  const { title, cases: caseList } = troubleShooting;

  return (
    <section className="bg-primary-subtle flex min-h-[calc(100dvh-3.5rem)] w-full flex-shrink-0 snap-start snap-always items-start px-4 py-16 sm:min-h-[calc(100dvh-4rem)] sm:px-6 sm:py-20 md:px-10 md:py-24">
      <div className="mx-auto w-full max-w-6xl text-left">
        <h2 className="text-foreground mb-12 text-xl font-semibold tracking-tight sm:mb-14 sm:text-2xl md:mb-16 md:text-3xl">
          {title}
        </h2>

        <div className="space-y-16 sm:space-y-20">
          {caseList.map((cas, caseIndex) => {
            const useZigzag = cas.layout === 'zigzag';
            return (
              <div key={caseIndex} className={!useZigzag ? 'w-full max-w-5xl' : undefined}>
                {useZigzag ? (
                  <TroubleShootingZigzagCase caseTitle={cas.caseTitle} sections={cas.sections} />
                ) : (
                  <TroubleShootingGridCase caseTitle={cas.caseTitle} sections={cas.sections} />
                )}
                {caseIndex < caseList.length - 1 && (
                  <hr className="border-primary-foreground/10 mt-16 sm:mt-20" aria-hidden />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectTroubleShooting;
