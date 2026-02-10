'use client';

import { GithubOutlined, MailOutlined } from '@ant-design/icons';
import AnimateInView from '@/components/AnimateInView';
import { showToast } from '@/components/Sonner';

const EMAIL = 'ed125248@gmail.com';
const GITHUB_URL = 'https://github.com/MinJun916';

const Footer = () => {
  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    showToast({ type: 'success', title: '이메일 주소가 복사되었습니다.' });
  };

  return (
    <footer className="bg-primary flex min-h-[calc(100vh-4rem)] w-full flex-shrink-0 snap-start flex-col">
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col px-6 py-16 sm:px-10">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="flex max-w-[480px] flex-col items-center gap-8">
            <AnimateInView delay={0} variant="fade-up">
            <div className="space-y-3">
              <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
                Let&apos;s work together
              </h2>
              <p className="text-foreground/80 text-base leading-relaxed sm:text-lg">
                문제의 본질을 이해하고, 운영까지 고려해 설계합니다.
              </p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              궁금한 점이 있으시면 언제든 편하게 연락주세요.
              <br />
              최대한 빠르게 답변 드리겠습니다.
            </p>

            <div className="flex flex-col items-center gap-4 pt-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group border-foreground/[0.08] hover:border-foreground/15 flex w-full max-w-[320px] flex-col items-center gap-2 rounded-xl border bg-white/90 px-6 py-4 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="text-foreground flex items-center gap-2 text-sm font-medium">
                  <MailOutlined className="text-foreground/70" />
                  이메일 보내기
                </span>
                <span className="text-muted-foreground font-mono text-xs">{EMAIL}</span>
              </button>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-foreground/[0.08] text-foreground hover:border-foreground/15 flex size-14 items-center justify-center rounded-xl border bg-white/90 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                aria-label="GitHub"
              >
                <GithubOutlined className="text-2xl" />
              </a>
            </div>
          </AnimateInView>
          </div>
        </div>

        <div className="border-foreground/[0.06] mt-auto border-t pt-8">
          <p className="text-muted-foreground text-center text-xs">
            © 2026 MinJun Shin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
