'use client';

import { GithubOutlined, MailOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { showToast } from '@/components/Sonner';

const EMAIL = 'ed125248@gmail.com';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  return (
    <header className="border-border/60 bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-foreground hover:text-foreground/80 text-lg font-semibold tracking-tight transition-colors"
        >
          MinJun.
        </Link>

        {/* Nav + Social */}
        <nav className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-5">
            <Separator orientation="vertical" className="bg-muted-foreground/40 h-full" />
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/MinJun916"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubOutlined className="text-[18px]" />
            </a>
            <button
              type="button"
              onClick={async () => {
                await navigator.clipboard.writeText(EMAIL);
                showToast({ type: 'success', title: '이메일 주소가 복사되었습니다.' });
              }}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="이메일 주소 복사"
            >
              <MailOutlined className="text-[18px]" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
