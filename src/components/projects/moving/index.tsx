import ProjectHero from '@/components/projects/projectHero';
import ProjectOverview from '@/components/projects/projectOverview';
import { MOVING_SUMMARY } from '@/lib/summary/moving';

const ProjectMovingPage = () => (
  <>
    <ProjectHero projectName="moving" />
    <ProjectOverview summary={MOVING_SUMMARY} />
  </>
);

export default ProjectMovingPage;
