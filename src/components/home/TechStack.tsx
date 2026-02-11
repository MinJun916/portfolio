import TechIcon from '@/components/home/TechIcon';
import AnimateInView from '@/components/shared/AnimateInView';

const TechStack = () => {
  return (
    <section className="bg-primary-subtle w-full flex-shrink-0 snap-start">
      <div className="mx-auto flex min-h-[calc(100vh-3.5rem)] w-full max-w-[1200px] flex-col justify-center px-4 py-10 sm:min-h-[calc(100vh-4rem)] sm:px-6 sm:py-16 md:px-10">
        <div className="w-full">
          <AnimateInView delay={0}>
            <h2 className="text-foreground mb-8 text-xl font-bold sm:mb-12 sm:text-2xl md:text-3xl">
              Tech Stack
            </h2>
          </AnimateInView>

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-12">
            <AnimateInView delay={60}>
              <div>
                <h3 className="text-foreground mb-4 text-xs font-semibold tracking-[0.2em] uppercase">
                  Frontend
                </h3>
                <ul className="flex flex-wrap gap-3">
                  <TechIcon iconName="typescript">TypeScript</TechIcon>
                  <TechIcon>JavaScript</TechIcon>
                  <TechIcon iconName="html5">HTML5</TechIcon>
                  <TechIcon iconName="css3">CSS3</TechIcon>
                  <TechIcon iconName="tailwindcss">Tailwind CSS</TechIcon>
                  <TechIcon iconName="react">React</TechIcon>
                  <TechIcon iconName="nextjs">Next.js</TechIcon>
                  <TechIcon>Zustand</TechIcon>
                  <TechIcon iconName="tanstack">TanStack Query</TechIcon>
                </ul>
              </div>
            </AnimateInView>

            <AnimateInView delay={120}>
              <div>
                <h3 className="text-foreground mb-4 text-xs font-semibold tracking-[0.2em] uppercase">
                  Backend
                </h3>
                <ul className="flex flex-wrap gap-3">
                  <TechIcon iconName="nodejs">Node.js</TechIcon>
                  <TechIcon iconName="expressjs">Express</TechIcon>
                </ul>
              </div>
            </AnimateInView>

            <AnimateInView delay={180}>
              <div>
                <h3 className="text-foreground mb-4 text-xs font-semibold tracking-[0.2em] uppercase">
                  Database
                </h3>
                <ul className="flex flex-wrap gap-3">
                  <TechIcon iconName="prisma">Prisma</TechIcon>
                  <TechIcon iconName="postgresql">PostgreSQL</TechIcon>
                  <TechIcon iconName="mongodb">MongoDB</TechIcon>
                </ul>
              </div>
            </AnimateInView>

            <AnimateInView delay={240}>
              <div>
                <h3 className="text-foreground mb-4 text-xs font-semibold tracking-[0.2em] uppercase">
                  DevOps & Infra
                </h3>
                <ul className="flex flex-wrap gap-3">
                  <TechIcon iconName="docker">Docker</TechIcon>
                  <TechIcon>Nginx</TechIcon>
                  <TechIcon iconName="ubuntu">Ubuntu</TechIcon>
                  <TechIcon iconName="aws">AWS</TechIcon>
                </ul>
              </div>
            </AnimateInView>

            <AnimateInView delay={300}>
              <div>
                <h3 className="text-foreground mb-4 text-xs font-semibold tracking-[0.2em] uppercase">
                  Tools
                </h3>
                <ul className="flex flex-wrap gap-3">
                  <TechIcon iconName="notion">Notion</TechIcon>
                  <TechIcon>Discord</TechIcon>
                  <TechIcon iconName="git">Git</TechIcon>
                  <TechIcon iconName="github">GitHub</TechIcon>
                </ul>
              </div>
            </AnimateInView>

            <AnimateInView delay={360}>
              <div>
                <h3 className="text-foreground mb-4 text-xs font-semibold tracking-[0.2em] uppercase">
                  Other Tools
                </h3>
                <ul className="flex flex-wrap gap-3">
                  <TechIcon>Final Cut Pro 11</TechIcon>
                  <TechIcon iconName="ps">Adobe Photoshop</TechIcon>
                  <TechIcon iconName="figma">Figma</TechIcon>
                </ul>
              </div>
            </AnimateInView>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
