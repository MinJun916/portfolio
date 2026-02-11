import Link from 'next/link';

const ProjectFooter = () => (
  <footer className="bg-primary flex w-full flex-shrink-0 snap-start snap-always flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20">
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center">
      <Link
        href="/#projects"
        className="text-foreground hover:bg-foreground/10 border-foreground/[0.08] rounded-xl border bg-white/90 px-6 py-3 text-sm font-medium shadow-sm transition-colors sm:px-8 sm:py-3.5 sm:text-base"
      >
        다른 프로젝트 보러 가기
      </Link>
      <p className="text-muted-foreground text-xs">© 2026 MinJun Shin. All rights reserved.</p>
    </div>
  </footer>
);

export default ProjectFooter;
