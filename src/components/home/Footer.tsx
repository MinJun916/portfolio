'use client';

import { GithubOutlined, MailOutlined } from '@ant-design/icons';
import AnimateInView from '@/components/shared/AnimateInView';
import { showToast } from '@/components/shared/Sonner';

const EMAIL = 'ed125248@gmail.com';
const GITHUB_URL = 'https://github.com/MinJun916';

const Footer = () => {
  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    showToast({ type: 'success', title: '이메일 주소가 복사되었습니다.' });
  };

  return (
    <footer
      id="contact"
      className="bg-primary flex min-h-[calc(100vh-3.5rem)] w-full flex-shrink-0 snap-start flex-col sm:min-h-[calc(100vh-4rem)]"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col px-4 py-10 sm:px-6 sm:py-16 md:px-10">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="flex w-full max-w-[480px] flex-col items-center gap-6 px-2 sm:gap-8">
            <AnimateInView delay={0} variant="fade-up">
              <div className="space-y-2 sm:space-y-3">
                <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
                  Let&apos;s work together
                </h2>
                <p className="text-foreground/80 text-sm leading-relaxed sm:text-base md:text-lg">
                  문제의 본질을 이해하고, 운영까지 고려해 설계합니다.
                </p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                궁금한 점이 있으시면 언제든 편하게 연락주세요.
                <br />
                최대한 빠르게 답변 드리겠습니다.
              </p>

              <div className="grid w-full grid-cols-2 gap-3 pt-2 sm:max-w-[360px] sm:gap-4">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="border-foreground/[0.08] hover:border-foreground/15 flex flex-col items-center justify-center gap-2 rounded-xl border bg-white/90 py-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:py-6"
                >
                  <MailOutlined className="text-foreground/70 text-2xl sm:text-3xl" />
                  <span className="text-foreground text-sm font-medium">이메일 복사</span>
                  <span className="text-muted-foreground font-mono text-[10px] sm:text-xs">
                    {EMAIL}
                  </span>
                </button>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-foreground/[0.08] text-foreground hover:border-foreground/15 flex flex-col items-center justify-center gap-2 rounded-xl border bg-white/90 py-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:py-6"
                  aria-label="GitHub"
                >
                  <GithubOutlined className="text-2xl sm:text-3xl" />
                  <span className="text-sm font-medium">GitHub</span>
                  <span className="text-muted-foreground text-[10px] sm:text-xs">프로필 보기</span>
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
