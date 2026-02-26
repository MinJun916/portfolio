'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

const TOC_ITEMS: { id: string; label: string }[] = [
  { id: 'section-overview', label: '1. 프로젝트 개요' },
  { id: 'section-contribution', label: '2. 핵심 기여 및 기술적 판단' },
  { id: 'section-trouble-shooting', label: '3. 트러블 슈팅' },
  { id: 'section-review', label: '4. 결과 및 회고' },
  { id: 'section-peer-review', label: '5. 팀원들의 피어 리뷰' },
  { id: 'section-tech-stack', label: '6. 기술 스택' },
];

const ProjectTableOfContents = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname === '/projects' || pathname.startsWith('/projects/etc')) return null;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <div
      className="fixed top-[33.333dvh] right-3 z-40 -translate-y-1/2 sm:right-5"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="relative flex items-center justify-end gap-0">
        {open && (
          <nav
            className="border-border/80 bg-background/95 text-foreground absolute top-0 right-11 min-w-[10rem] rounded-lg border py-2 shadow-lg sm:right-12 sm:min-w-[11rem] sm:py-2.5"
            aria-label="목차"
          >
            <ul className="flex flex-col">
              {TOC_ITEMS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(id)}
                    className="hover:bg-primary/15 hover:text-foreground text-foreground/85 w-full px-4 py-2 text-left text-sm transition-colors first:pt-0 last:pb-0 sm:px-5 sm:py-2.5 sm:text-[15px]"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {open && <div className="w-2 shrink-0" aria-hidden />}
        <button
          type="button"
          aria-label="목차 열기"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="border-foreground/10 text-foreground hover:border-foreground/20 flex size-10 shrink-0 items-center justify-center rounded-xl border bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-md sm:size-11"
        >
          <span className="flex flex-col gap-1.5" aria-hidden>
            <span className="h-0.5 w-4 rounded-full bg-current sm:w-[18px]" />
            <span className="h-0.5 w-4 rounded-full bg-current sm:w-[18px]" />
            <span className="h-0.5 w-4 rounded-full bg-current sm:w-[18px]" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProjectTableOfContents;
