import ProjectContribution from '@/components/projects/projectContribution';
import ProjectFooter from '@/components/projects/projectFooter';
import ProjectHero from '@/components/projects/projectHero';
import ProjectOverview from '@/components/projects/projectOverview';
import ProjectReview from '@/components/projects/projectReview';
import ProjectTechStack from '@/components/projects/projectTechStack';
import ProjectTroubleShooting from '@/components/projects/projectTroubleShooting';
import { STUDYFOREST_SUMMARY } from '@/lib/summary/studyforest';

const ProjectStudyforestPage = () => (
  <>
    <ProjectHero projectName="studyforest" />
    <ProjectOverview overview={STUDYFOREST_SUMMARY.overview} />
    <ProjectContribution contribution={STUDYFOREST_SUMMARY.contribution} />
    <ProjectTroubleShooting troubleShooting={STUDYFOREST_SUMMARY.troubleShooting} />
    <ProjectReview review={STUDYFOREST_SUMMARY.review} />
    <ProjectTechStack techStack={STUDYFOREST_SUMMARY.techStack} />
    <ProjectFooter />
  </>
);

export default ProjectStudyforestPage;
