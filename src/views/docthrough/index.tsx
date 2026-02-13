import ProjectHero from '@/components/projects/projectHero';
import ProjectOverview from '@/components/projects/projectOverview';
import { DOCTHROUGH_SUMMARY } from '@/lib/summary/docthrough';

const ProjectDocthroughPage = () => (
  <>
    <ProjectHero projectName="docthrough" />
    <ProjectOverview overview={DOCTHROUGH_SUMMARY.overview} />
  </>
);

export default ProjectDocthroughPage;
