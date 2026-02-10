'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type AnimateInViewProps = {
  children: ReactNode;
  /** 애니메이션 지연(ms). stagger 효과용 */
  delay?: number;
  /** 'fade-up' | 'fade' */
  variant?: 'fade-up' | 'fade';
  /** 루트 마진 (viewport 들어오기 전 트리거). 기본값은 모바일/데스크톱에서 다름 */
  rootMargin?: string;
  className?: string;
};

const MOBILE_BREAKPOINT = 640;

const AnimateInView = ({
  children,
  delay = 0,
  variant = 'fade-up',
  rootMargin: rootMarginProp,
  className = '',
}: AnimateInViewProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mobile = typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT;
    const rootMargin = rootMarginProp ?? (mobile ? '0px 0px -10% 0px' : '0px 0px -80px 0px');
    const threshold = mobile ? 0.02 : 0.1;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { rootMargin, threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMarginProp]);

  const baseClass = variant === 'fade-up' ? 'animate-in-view' : 'animate-in-view-fade';

  return (
    <div
      ref={ref}
      className={`${baseClass} ${inView ? 'in-view' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimateInView;
