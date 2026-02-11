'use client';

import { toast } from 'sonner';

export type SonnerType = 'success' | 'error' | 'info' | 'warning';

export const showToast = ({ type, title }: { type: SonnerType; title: string }) => {
  toast[type](title, {
    position: 'top-center',
  });
};
