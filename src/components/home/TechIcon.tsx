import Image from 'next/image';
import StackIcon from 'tech-stack-icons';

import type { IconName } from 'tech-stack-icons';

/** public/techIcon 커스텀 SVG (라이브러리에 없는 아이콘) */
const CUSTOM_ICON_SRC: Record<string, string> = {
  javascript: '/techIcon/javascript-icon.svg',
  zustand: '/techIcon/zustand-icon.svg',
  nginx: '/techIcon/nginx-icon.svg',
  discord: '/techIcon/discord-icon.svg',
  fcpx: '/techIcon/fcpx-icon.svg',
};

type TechIconProps = {
  children: React.ReactNode;
  iconName?: string;
};

const TechIcon = ({ children, iconName }: TechIconProps) => {
  const customSrc = iconName ? CUSTOM_ICON_SRC[iconName] : undefined;
  const icon =
    customSrc != null ? (
      <Image src={customSrc} alt="" width={20} height={20} className="size-5 shrink-0" />
    ) : iconName ? (
      <StackIcon name={iconName as IconName} className="size-5 shrink-0" />
    ) : null;

  return (
    <li className="border-border/60 bg-background/90 text-foreground hover:border-primary hover:bg-primary/20 flex cursor-default items-center gap-2 rounded-lg border px-4 py-2 text-sm leading-snug transition-all duration-200 hover:scale-[1.03] hover:shadow-md">
      {icon}
      <span>{children}</span>
    </li>
  );
};

export default TechIcon;
