type ProjectHeroSectionProps = {
  children: React.ReactNode;
};

const ProjectHeroSection = ({ children }: ProjectHeroSectionProps) => (
  <section className="bg-primary flex min-h-[100dvh] w-full flex-shrink-0 snap-start snap-always items-center px-4 py-10 sm:px-6 md:px-8">
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
      {children}
    </div>
  </section>
);

export default ProjectHeroSection;
