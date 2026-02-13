import ProjectTableOfContents from '@/components/projects/ProjectTableOfContents';
import ScrollToTopButton from '@/components/projects/ScrollToTopButton';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ProjectTableOfContents />
      <ScrollToTopButton />
    </>
  );
}
