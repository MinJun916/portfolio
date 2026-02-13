type ProjectHeroMetaProps = {
  period: string;
  role: string;
  techStack: string[];
};

const ProjectHeroMeta = ({ period, role, techStack }: ProjectHeroMetaProps) => (
  <div className="border-foreground/10 space-y-7 border-t pt-7 sm:space-y-8 sm:pt-8">
    <div>
      <p className="text-muted-foreground mb-2 text-xs font-semibold tracking-wider uppercase sm:text-sm">
        기간
      </p>
      <p className="text-foreground/80 text-[15px] leading-[1.6] sm:text-base">{period}</p>
    </div>
    <div>
      <p className="text-muted-foreground mb-2 text-xs font-semibold tracking-wider uppercase sm:text-sm">
        역할
      </p>
      <p className="text-foreground/80 text-[15px] leading-[1.6] sm:text-base">{role}</p>
    </div>
    <div>
      <p className="text-muted-foreground mb-2.5 text-xs font-semibold tracking-wider uppercase sm:text-sm">
        기술 스택
      </p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="border-foreground/10 bg-primary-foreground/5 text-foreground/80 rounded-md border px-2.5 py-1 text-[13px] leading-snug"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectHeroMeta;
