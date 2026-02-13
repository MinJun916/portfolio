import ProjectContribution from '@/components/projects/projectContribution';
import ProjectFooter from '@/components/projects/projectFooter';
import ProjectHero from '@/components/projects/projectHero';
import ProjectOverview from '@/components/projects/projectOverview';
import ProjectReview from '@/components/projects/projectReview';
import ProjectTechStack from '@/components/projects/projectTechStack';
import ProjectTroubleShooting from '@/components/projects/projectTroubleShooting';
import { DOCTHROUGH_SUMMARY } from '@/lib/summary/docthrough';

const ProjectDocthroughPage = () => (
  <>
    <ProjectHero projectName="docthrough" />
    <ProjectOverview overview={DOCTHROUGH_SUMMARY.overview} />
    <ProjectContribution contribution={DOCTHROUGH_SUMMARY.contribution} />
    <ProjectTroubleShooting troubleShooting={DOCTHROUGH_SUMMARY.troubleShooting} />
    <ProjectReview review={DOCTHROUGH_SUMMARY.review} />
    <ProjectTechStack techStack={DOCTHROUGH_SUMMARY.techStack} />
    <ProjectFooter />
  </>
);

export default ProjectDocthroughPage;
