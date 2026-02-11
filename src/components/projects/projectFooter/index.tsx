'use client';

import Link from 'next/link';
import AnimateInView from '@/components/shared/AnimateInView';
import { PROJECT_CONTENT_MAX_WIDTH_CLASS } from '../constants';

const ProjectFooter = () => (
  <footer className="bg-primary flex w-full max-w-full min-w-0 flex-shrink-0 snap-start snap-always flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20">
    <div
      className={`mx-auto flex w-full min-w-0 flex-col items-center gap-8 text-center ${PROJECT_CONTENT_MAX_WIDTH_CLASS}`}
    >
      <AnimateInView delay={0} variant="fade-up">
        <Link
          href="/#projects"
          className="text-foreground hover:bg-foreground/10 border-foreground/[0.08] inline-block rounded-xl border bg-white/90 px-6 py-3 text-sm font-medium shadow-sm transition-colors sm:px-8 sm:py-3.5 sm:text-base"
        >
          다른 프로젝트 보러 가기
        </Link>
      </AnimateInView>
      <p className="text-xs text-neutral-700">© 2026 MinJun Shin. All rights reserved.</p>
    </div>
  </footer>
);

export default ProjectFooter;
