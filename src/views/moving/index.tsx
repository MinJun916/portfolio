import ProjectContribution from '@/components/projects/projectContribution';
import ProjectFooter from '@/components/projects/projectFooter';
import ProjectHero from '@/components/projects/projectHero';
import ProjectOverview from '@/components/projects/projectOverview';
import ProjectReview from '@/components/projects/projectReview';
import ProjectTechStack from '@/components/projects/projectTechStack';
import ProjectTroubleShooting from '@/components/projects/projectTroubleShooting';
import { MOVING_SUMMARY } from '@/lib/summary/moving';

const ProjectMovingPage = () => (
  <>
    <ProjectHero projectName="moving" />
    <ProjectOverview overview={MOVING_SUMMARY.overview} />
    <ProjectContribution contribution={MOVING_SUMMARY.contribution} />
    <ProjectTroubleShooting troubleShooting={MOVING_SUMMARY.troubleShooting} />
    <ProjectReview review={MOVING_SUMMARY.review} />
    <ProjectTechStack techStack={MOVING_SUMMARY.techStack} />
    <ProjectFooter />
  </>
);

export default ProjectMovingPage;
