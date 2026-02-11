import ProjectHero from '@/components/projects/projectHero';
import ProjectOverview from '@/components/projects/projectOverview';
import ProjectContribution from '@/components/projects/projectContribution';
import { MOVING_SUMMARY } from '@/lib/summary/moving';

const ProjectMovingPage = () => (
  <>
    <ProjectHero projectName="moving" />
    <ProjectOverview overview={MOVING_SUMMARY.overview} />
    <ProjectContribution contribution={MOVING_SUMMARY.contribution} />
  </>
);

export default ProjectMovingPage;
