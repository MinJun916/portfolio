import { parseBold } from '@/lib/parseBold';
import AnimateInView from '@/components/shared/AnimateInView';
import ProjectSection from '@/components/projects/ProjectSection';

export type ProjectReviewProps = {
  review: { title: string; detail: string[] };
};

const ProjectReview = ({ review }: ProjectReviewProps) => (
  <ProjectSection title={review.title} maxWidth="narrow" align="center">
    <AnimateInView delay={0} variant="fade-up">
      <div className="text-muted-foreground space-y-5 text-base leading-[1.8] break-keep sm:text-lg sm:leading-[1.85] md:text-[1.0625rem] md:leading-[1.85]">
        {review.detail.map((para, i) => (
          <p key={i}>{parseBold(para)}</p>
        ))}
      </div>
    </AnimateInView>
  </ProjectSection>
);

export default ProjectReview;
