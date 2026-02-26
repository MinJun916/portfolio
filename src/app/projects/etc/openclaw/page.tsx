import ProjectOpenClawPage from '@/views/openclaw';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OpenClaw | 신민준 포트폴리오',
  description: 'OpenClaw 관련 프로젝트입니다.',
};

const OpenClawPage = () => {
  return <ProjectOpenClawPage />;
};

export default OpenClawPage;
