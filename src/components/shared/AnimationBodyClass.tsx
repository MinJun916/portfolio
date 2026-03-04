'use client';

import { useEffect } from 'react';

import { useAnimationStore } from '@/stores/useAnimationStore';

/** 스토어의 애니메이션 on/off를 body 클래스(animations-off)와 동기화 */
export default function AnimationBodyClass() {
  const enabled = useAnimationStore((s) => s.enabled);

  useEffect(() => {
    if (enabled) {
      document.body.classList.remove('animations-off');
    } else {
      document.body.classList.add('animations-off');
    }
  }, [enabled]);

  return null;
}
