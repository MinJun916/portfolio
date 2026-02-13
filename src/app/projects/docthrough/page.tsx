import ProjectDocthroughPage from '@/views/docthrough';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Docthrough | 신민준 포트폴리오',
  description: 'Docthrough 프로젝트 포트폴리오',
};

const DocthroughPage = () => {
  return <ProjectDocthroughPage />;
};

export default DocthroughPage;
