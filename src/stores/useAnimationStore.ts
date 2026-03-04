import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AnimationState = {
  enabled: boolean;
  toggle: () => void;
};

export const useAnimationStore = create<AnimationState>()(
  persist(
    (set) => ({
      enabled: true,
      toggle: () => set((s) => ({ enabled: !s.enabled })),
    }),
    { name: 'portfolio-animations' },
  ),
);
