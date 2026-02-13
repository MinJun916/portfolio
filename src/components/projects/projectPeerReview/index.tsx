import ProjectSection from '@/components/projects/ProjectSection';
import AnimateInView from '@/components/shared/AnimateInView';
import { PEER_REVIEW_BY_PROJECT } from '@/lib/summary/peerReviews';

export type ProjectPeerReviewProps = {
  projectName: 'studyforest' | 'docthrough' | 'moving';
};

const SECTION_TITLE = '5. 팀원들의 피어 리뷰';
const SECTION_DESCRIPTION = '팀원들이 실제로 작성해준 피어 리뷰입니다.';

const ProjectPeerReview = ({ projectName }: ProjectPeerReviewProps) => {
  const content = PEER_REVIEW_BY_PROJECT[projectName];

  return (
    <ProjectSection
      id="section-peer-review"
      title={SECTION_TITLE}
      maxWidth="wide"
      titleClassName="mb-4 sm:mb-5"
    >
      <AnimateInView delay={0} variant="fade-up">
        <p className="text-foreground/70 mb-8 text-sm sm:mb-10 sm:text-base">
          {SECTION_DESCRIPTION}
        </p>
        <div className="space-y-8 sm:space-y-10">
          <div>
            <h4 className="text-foreground border-primary-foreground/10 mb-3 border-b pb-2 text-base font-semibold sm:mb-4 sm:text-lg">
              [강점]
            </h4>
            <ul className="text-foreground/85 marker:text-foreground/50 list-disc space-y-2 pl-5 sm:pl-6">
              {content.strengths.map((item, i) => (
                <li
                  key={i}
                  className="text-[15px] leading-[1.85] break-keep sm:text-base sm:leading-[1.9]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-foreground border-primary-foreground/10 mb-3 border-b pb-2 text-base font-semibold sm:mb-4 sm:text-lg">
              [보완해야 할 점]
            </h4>
            <ul className="text-foreground/85 marker:text-foreground/50 list-disc space-y-2 pl-5 sm:pl-6">
              {content.improvements.map((item, i) => (
                <li
                  key={i}
                  className="text-[15px] leading-[1.85] break-keep sm:text-base sm:leading-[1.9]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimateInView>
    </ProjectSection>
  );
};

export default ProjectPeerReview;
