import ProjectSection from '@/components/projects/ProjectSection';
import AnimateInView from '@/components/shared/AnimateInView';
import { parseBold } from '@/lib/parseBold';

export type ProjectReviewProps = {
  review: { title: string; detail: string[] };
};

const ProjectReview = ({ review }: ProjectReviewProps) => (
  <ProjectSection id="section-review" title={review.title} maxWidth="wide" align="center">
    <AnimateInView delay={0} variant="fade-up">
      <div className="text-foreground/80 space-y-5 text-base leading-[1.8] break-keep sm:text-lg sm:leading-[1.85] md:text-[1.0625rem] md:leading-[1.85]">
        {review.detail.map((para, i) => (
          <p key={i}>{parseBold(para)}</p>
        ))}
      </div>
    </AnimateInView>
  </ProjectSection>
);

export default ProjectReview;
