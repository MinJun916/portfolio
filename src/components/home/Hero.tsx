import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-primary flex min-h-[calc(100vh-3.5rem)] flex-shrink-0 snap-start flex-col items-center justify-center px-4 py-12 sm:min-h-[calc(100vh-4rem)] sm:px-6 sm:py-20">
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-6 text-center sm:gap-8">
        {/* 작게: End-to-end */}
        <p
          className="hero-fade-in text-muted-foreground text-sm font-medium sm:text-base"
          style={{ animationDelay: '0.1s' }}
        >
          End-to-end Full-stack Developer
        </p>

        {/* 중심: 3가지 키워드 */}
        <h1
          className="hero-fade-in text-foreground text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl md:tracking-tighter"
          style={{ animationDelay: '0.2s' }}
        >
          Problem · Judgment · Operation
        </h1>

        {/* 잘 보이게: 설명 */}
        <p
          className="hero-fade-in text-foreground max-w-[440px] text-lg leading-relaxed sm:text-xl"
          style={{ animationDelay: '0.35s' }}
        >
          &ldquo;문제의 본질을 이해하고, <br /> 운영까지 고려해 설계하는 개발자입니다.&rdquo;
        </p>

        <Link
          href="/projects"
          className="hero-fade-in text-foreground hover:border-foreground/15 border-foreground/[0.08] mt-2 inline-flex items-center gap-1.5 rounded-xl border bg-white/90 px-4 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:gap-2 sm:px-5 sm:py-3 sm:text-base"
          style={{ animationDelay: '0.5s' }}
        >
          전체 프로젝트 보기
          <ChevronRight className="size-4 shrink-0 sm:size-4.5" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
