import { Metadata } from 'next';

import ProjectsLandingPage from '@/views/projects';

export const metadata: Metadata = {
  title: 'Projects | 신민준 포트폴리오',
  description: 'Projects | 신민준 포트폴리오',
};

const ProjectsPage = () => {
  return <ProjectsLandingPage />;
};

export default ProjectsPage;
