'use client';

import { useEffect, useState } from 'react';

const SCROLL_THRESHOLD = 400;

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="맨 위로"
      className="border-foreground/15 fixed right-6 bottom-6 z-50 flex size-11 cursor-pointer items-center justify-center rounded-full border bg-white text-neutral-800 shadow-md transition-all hover:scale-105 hover:bg-neutral-50 hover:shadow-lg active:scale-95 sm:right-8 sm:bottom-8 sm:size-12"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="sm:h-7 sm:w-7"
        aria-hidden
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
