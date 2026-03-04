'use client';

import { useAnimationStore } from '@/stores/useAnimationStore';

const AnimationToggle = ({ showLabel = false }: { showLabel?: boolean }) => {
  const enabled = useAnimationStore((s) => s.enabled);
  const toggle = useAnimationStore((s) => s.toggle);

  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] text-muted-foreground leading-none whitespace-nowrap">
        애니메이션 토글
      </span>
      <button
        type="button"
        onClick={toggle}
        role="switch"
        aria-checked={enabled}
        aria-label={enabled ? '애니메이션 끄기' : '애니메이션 켜기'}
        className="text-foreground hover:opacity-90 flex items-center gap-2 transition-opacity"
      >
        <span
          className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none ${enabled ? 'border-primary bg-primary' : 'border-muted-foreground/50 bg-muted-foreground/20'}`}
        >
          <span
            className={`pointer-events-none block size-4 rounded-full shadow-md ring-0 transition ${enabled ? 'translate-x-4 bg-primary-foreground' : 'translate-x-0.5 bg-muted-foreground'}`}
          />
        </span>
        {showLabel && <span className="text-sm font-medium">애니메이션</span>}
      </button>
    </div>
  );
};

export default AnimationToggle;
