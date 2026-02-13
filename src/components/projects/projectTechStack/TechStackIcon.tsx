import Image from 'next/image';
import StackIcon from 'tech-stack-icons';

import type { IconName } from 'tech-stack-icons';

/** 라이브러리 없음, public 커스텀 SVG 경로 */
const CUSTOM_ICON_SRC: Record<string, string> = {
  nginx: '/techIcon/nginx-icon.svg',
};

/** 커스텀도 없을 때 텍스트 폴백용 (소문자) */
const FALLBACK_ICON_NAMES = [] as const;

export const TECH_STACK_ICON_SIZE = 56;

const FallbackIconLabel = ({ name }: { name: string }) => {
  const label = name.slice(0, 2).toUpperCase() || name[0]?.toUpperCase() || '?';
  return (
    <span
      className="flex size-full items-center justify-center text-lg leading-none font-bold text-neutral-800"
      aria-hidden
    >
      {label}
    </span>
  );
};

type TechStackIconProps = {
  icon: string;
  name: string;
  variant?: 'light' | 'dark' | 'grayscale';
};

const ICON_BOX_BASE =
  'relative z-10 isolate flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-primary-foreground/10 dark:border-primary-foreground/20 [&_span]:flex [&_span]:items-center [&_span]:justify-center [&_span]:overflow-visible [&_span]:leading-[0] [&_svg]:block [&_svg]:h-full [&_svg]:w-full [&_svg]:shrink-0 [&_svg]:overflow-visible [&_g]:![clip-path:none]';

const TechStackIcon = ({ icon, name, variant = 'light' }: TechStackIconProps) => {
  const isCustom = icon in CUSTOM_ICON_SRC;
  const isFallback = FALLBACK_ICON_NAMES.includes(icon as (typeof FALLBACK_ICON_NAMES)[number]);
  const boxClass = `${ICON_BOX_BASE} ${isCustom || !isFallback ? 'bg-transparent' : 'bg-white shadow-sm dark:bg-white/95'}`;

  return (
    <div className={boxClass} style={{ width: TECH_STACK_ICON_SIZE, height: TECH_STACK_ICON_SIZE }}>
      {isCustom ? (
        <Image
          src={CUSTOM_ICON_SRC[icon]}
          alt=""
          width={TECH_STACK_ICON_SIZE}
          height={TECH_STACK_ICON_SIZE}
          className="size-full object-contain"
        />
      ) : isFallback ? (
        <FallbackIconLabel name={name} />
      ) : (
        <StackIcon
          name={icon as IconName}
          variant={variant}
          style={{ width: TECH_STACK_ICON_SIZE, height: TECH_STACK_ICON_SIZE }}
        />
      )}
    </div>
  );
};

export default TechStackIcon;
