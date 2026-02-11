import { parseBold } from '@/lib/parseBold';
import AnimateInView from '@/components/shared/AnimateInView';
import ProjectSection from '@/components/projects/ProjectSection';
import TechStackIcon from './TechStackIcon';

export type TechStackItem = {
  name: string;
  description: string;
  icon?: string;
  iconVariant?: 'light' | 'dark' | 'grayscale';
};

export type TechStackGroup = {
  groupTitle: string;
  items: TechStackItem[];
};

export type ProjectTechStackProps = {
  techStack: {
    title: string;
    groups: TechStackGroup[];
  };
};

const ProjectTechStack = ({ techStack }: ProjectTechStackProps) => {
  const { title, groups } = techStack;

  return (
    <ProjectSection title={title} maxWidth="default" titleClassName="mb-10 sm:mb-12">
      <div className="space-y-12 sm:space-y-14">
        {groups.map((group, groupIndex) => (
          <AnimateInView key={groupIndex} delay={groupIndex * 60} variant="fade-up">
            <div>
              {groupIndex > 0 && (
                <hr className="border-primary-foreground/15 mb-12 sm:mb-14" aria-hidden />
              )}
              <h3 className="text-foreground mb-6 text-base font-semibold tracking-tight sm:mb-8 sm:text-lg">
                {group.groupTitle}
              </h3>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                {group.items.map((item, i) => (
                  <li
                    key={i}
                    className="border-primary-foreground/10 bg-primary-foreground/5 flex min-w-0 flex-col gap-3 rounded-xl border p-4 sm:p-5"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      {item.icon && (
                        <TechStackIcon
                          icon={item.icon}
                          name={item.name}
                          variant={item.iconVariant ?? 'light'}
                        />
                      )}
                      <p className="text-foreground relative z-0 text-base leading-tight font-bold sm:text-lg">
                        {item.name}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-[1.75] break-keep sm:text-base sm:leading-[1.8]">
                      {parseBold(item.description)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateInView>
        ))}
      </div>
    </ProjectSection>
  );
};

export default ProjectTechStack;
