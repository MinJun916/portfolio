import ProjectSection from '@/components/projects/ProjectSection';
import AnimateInView from '@/components/shared/AnimateInView';
import { parseBold } from '@/lib/parseBold';

import { PROJECT_CONTENT_MAX_WIDTH_CLASS } from '../constants';

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
          <div
            key={i}
            className={`flex w-full min-w-0 justify-start ${!isLeft ? 'sm:justify-end' : ''}`}
          >
            <article className="border-primary/30 bg-primary relative w-full max-w-[42rem] min-w-0 rounded-xl border p-5 text-left sm:p-6">
              <h4
                className={`text-foreground mb-3 text-base font-semibold tracking-tight sm:mb-4 sm:text-lg ${!isLeft ? 'sm:text-right' : ''}`}
              >
                {block.title}
              </h4>
              <BlockContent block={block} align="left" />
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
    <ProjectSection
      id="section-trouble-shooting"
      title={title}
      maxWidth="wide"
      padding="large"
      titleClassName="mb-12 sm:mb-14 md:mb-16"
    >
      <div className="space-y-16 sm:space-y-20">
        {caseList.map((cas, caseIndex) => {
          const useZigzag = cas.layout === 'zigzag';
          return (
            <AnimateInView key={caseIndex} delay={caseIndex * 100} variant="fade-up">
              <div className={!useZigzag ? `w-full ${PROJECT_CONTENT_MAX_WIDTH_CLASS}` : undefined}>
                {useZigzag ? (
                  <TroubleShootingZigzagCase caseTitle={cas.caseTitle} sections={cas.sections} />
                ) : (
                  <TroubleShootingGridCase caseTitle={cas.caseTitle} sections={cas.sections} />
                )}
                {caseIndex < caseList.length - 1 && (
                  <hr className="border-primary-foreground/10 mt-16 sm:mt-20" aria-hidden />
                )}
              </div>
            </AnimateInView>
          );
        })}
      </div>
    </ProjectSection>
  );
};

export default ProjectTroubleShooting;
