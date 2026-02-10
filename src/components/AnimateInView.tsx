'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type AnimateInViewProps = {
  children: ReactNode;
  /** 애니메이션 지연(ms). stagger 효과용 */
  delay?: number;
  /** 'fade-up' | 'fade' */
  variant?: 'fade-up' | 'fade';
  /** 루트 마진 (viewport 들어오기 전 트리거). 기본 '0px 0px -80px 0px' */
  rootMargin?: string;
  className?: string;
};

const AnimateInView = ({
  children,
  delay = 0,
  variant = 'fade-up',
  rootMargin = '0px 0px -80px 0px',
  className = '',
}: AnimateInViewProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { rootMargin, threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

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
