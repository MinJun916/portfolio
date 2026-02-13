import ProjectStudyforestPage from '@/views/studyforest';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Studyforest | 신민준 포트폴리오',
  description: 'Studyforest 프로젝트 포트폴리오',
};

const StudyforestPage = () => {
  return <ProjectStudyforestPage />;
};

export default StudyforestPage;
