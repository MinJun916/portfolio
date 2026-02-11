type MaxWidth = 'narrow' | 'default' | 'wide';
type PaddingVariant = 'default' | 'large';

const MAX_WIDTH_CLASS: Record<MaxWidth, string> = {
  narrow: 'max-w-[42rem]',
  default: 'max-w-5xl',
  wide: 'max-w-6xl',
};

const PADDING_CLASS: Record<PaddingVariant, string> = {
  default: 'py-12 sm:py-16 md:py-20',
  large: 'py-16 sm:py-20 md:py-24',
};

export type ProjectSectionProps = {
  title?: string;
  maxWidth?: MaxWidth;
  align?: 'start' | 'center';
  padding?: PaddingVariant;
  sectionClassName?: string;
  titleClassName?: string;
  children: React.ReactNode;
};

const SECTION_BASE =
  'flex min-h-[calc(100dvh-3.5rem)] w-full flex-shrink-0 snap-start snap-always px-4 sm:min-h-[calc(100dvh-4rem)] sm:px-6 md:px-10';
const TITLE_BASE = 'text-foreground text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl';

const ALIGN_CLASS = { start: 'items-start', center: 'items-center' } as const;

const ProjectSection = ({
  title,
  maxWidth = 'default',
  align = 'start',
  padding = 'default',
  sectionClassName = '',
  titleClassName = '',
  children,
}: ProjectSectionProps) => (
  <section
    className={`bg-primary-subtle ${SECTION_BASE} ${PADDING_CLASS[padding]} ${ALIGN_CLASS[align]} ${sectionClassName}`.trim()}
  >
    <div className={`mx-auto w-full ${MAX_WIDTH_CLASS[maxWidth]} text-left`}>
      {title != null && (
        <h2 className={`${TITLE_BASE} mb-6 sm:mb-8 ${titleClassName}`.trim()}>{title}</h2>
      )}
      {children}
    </div>
  </section>
);

export default ProjectSection;
