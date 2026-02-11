import { projectLists } from '@/lib/projectLists';
import OverviewSection from './OverviewSection';
import OverviewHeader from './OverviewHeader';
import OverviewMeta from './OverviewMeta';
import OverviewImage from './OverviewImage';

type OverviewProps = {
  projectName: string;
};

const Overview = ({ projectName }: OverviewProps) => {
  const project = projectLists.find((p) => p.href === `/projects/${projectName}`);
  if (!project) return null;

  const { title, subtitle, imageSrc, logoSrc, period, role, techStack, links } = project;

  return (
    <OverviewSection>
      <div className="space-y-8 text-left sm:space-y-10 md:space-y-12">
        <OverviewHeader title={title} logoSrc={logoSrc ?? imageSrc} links={links} />
        <p className="text-muted-foreground max-w-[42rem] text-base leading-[1.8] sm:text-lg sm:leading-[1.8]">
          {subtitle ?? '—'}
        </p>
        <OverviewMeta period={period} role={role} techStack={techStack} />
      </div>
      <OverviewImage imageSrc={imageSrc} />
    </OverviewSection>
  );
};

export default Overview;
