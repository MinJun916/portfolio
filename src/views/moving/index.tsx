import ProjectHero from '@/components/projects/projectHero';
import ProjectOverview from '@/components/projects/projectOverview';
import ProjectContribution from '@/components/projects/projectContribution';
import ProjectTroubleShooting from '@/components/projects/projectTroubleShooting';
import { MOVING_SUMMARY } from '@/lib/summary/moving';

const ProjectMovingPage = () => (
  <>
    <ProjectHero projectName="moving" />
    <ProjectOverview overview={MOVING_SUMMARY.overview} />
    <ProjectContribution contribution={MOVING_SUMMARY.contribution} />
    <ProjectTroubleShooting troubleShooting={MOVING_SUMMARY.troubleShooting} />
  </>
);

export default ProjectMovingPage;
