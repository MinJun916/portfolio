import ProjectHero from '@/components/projects/projectHero';
import ProjectOverview from '@/components/projects/projectOverview';
import { STUDYFOREST_SUMMARY } from '@/lib/summary/studyforest';

const ProjectStudyforestPage = () => (
  <>
    <ProjectHero projectName="studyforest" />
    <ProjectOverview overview={STUDYFOREST_SUMMARY.overview} />
  </>
);

export default ProjectStudyforestPage;
