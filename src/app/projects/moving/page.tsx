import ProjectMovingPage from '@/views/moving';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moving | 신민준 포트폴리오',
  description: 'Moving 프로젝트 포트폴리오',
};

const MovingPage = () => {
  return <ProjectMovingPage />;
};

export default MovingPage;
