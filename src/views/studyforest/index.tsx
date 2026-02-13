import ProjectContribution from '@/components/projects/projectContribution';
import ProjectHero from '@/components/projects/projectHero';
import ProjectOverview from '@/components/projects/projectOverview';
import ProjectTroubleShooting from '@/components/projects/projectTroubleShooting';
import { STUDYFOREST_SUMMARY } from '@/lib/summary/studyforest';

const ProjectStudyforestPage = () => (
  <>
    <ProjectHero projectName="studyforest" />
    <ProjectOverview overview={STUDYFOREST_SUMMARY.overview} />
    <ProjectContribution contribution={STUDYFOREST_SUMMARY.contribution} />
    <ProjectTroubleShooting troubleShooting={STUDYFOREST_SUMMARY.troubleShooting} />
  </>
);

export default ProjectStudyforestPage;
