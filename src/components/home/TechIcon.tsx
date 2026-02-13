import StackIcon from 'tech-stack-icons';

import type { IconName } from 'tech-stack-icons';

type TechIconProps = {
  children: React.ReactNode;
  iconName?: string;
};

const TechIcon = ({ children, iconName }: TechIconProps) => {
  return (
    <li className="border-border/60 bg-background/90 text-foreground hover:border-primary hover:bg-primary/20 flex cursor-default items-center gap-2 rounded-lg border px-4 py-2 text-sm leading-snug transition-all duration-200 hover:scale-[1.03] hover:shadow-md">
      {iconName && <StackIcon name={iconName as IconName} className="size-5 shrink-0" />}
      <span>{children}</span>
    </li>
  );
};

export default TechIcon;
