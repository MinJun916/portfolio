import {
  Code,
  Palette,
  ProfessionalTimeline,
  type TimelineItemData,
} from '@/components/ui/timeline2';
import AnimateInView from '@/components/AnimateInView';

const EXPERIENCE_DATA: TimelineItemData[] = [
  {
    id: 'youthvoice',
    title: '유스온보딩 프로젝트',
    type: '(사)유스보이스',
    duration: '2023.10 – 2024.02',
    icon: Palette,
    responsibilities: [
      '청소년 대상 온보딩 프로젝트에 참여해 웹드라마·셀프 인터뷰 영상 제작 경험',
      "'내가 무엇을 원하고 어떤 삶을 살고 싶은지'를 주제로 자기 이해와 방향성 탐색",
      '이후 문제를 외부에서 주어지는 것이 아닌 스스로 정의하는 사고 방식의 출발점',
    ],
    skills: [],
  },
  {
    id: 'daegu-youth-project',
    title: '대구광역시 청년도전지원사업 참여',
    type: '고용노동부',
    duration: '2024.06 – 2024.12',
    icon: Palette,
    responsibilities: [
      '다양한 활동과 네트워킹, 진로·취업 탐색 프로그램에 참여하며 자기 성찰의 시간 경험',
      '내가 좋아하는 것과 잘 맞는 환경이 무엇인지 정리',
      '진로를 구조적으로 고민하고 선택하는 태도를 형성',
    ],
    skills: [],
  },
  {
    id: 'foreigner-sharehouse',
    title: '외국인 쉐어하우스 한 달 살기 및 SNS 기획·운영',
    type: 'Borderless House KR',
    duration: '2025.01 – 2025.02',
    icon: Palette,
    responsibilities: [
      '외국인 쉐어하우스에서 거주하며 문화 교류 및 언어 교환 경험',
      '내부 홍보를 위한 SNS 콘텐츠를 직접 기획·제작·운영',
      '사용자 반응을 기준으로 방향을 조정하며 피드백 기반 개선 경험 축적',
    ],
    skills: [],
  },
  {
    id: 'online-shopping-mall',
    title: '온라인 의류 쇼핑몰 운영 및 사무 보조',
    type: 'Iyen',
    duration: '2025.05 – 2025.06',
    icon: Palette,
    responsibilities: [
      '주문·재고·정산 등 전산 업무를 엑셀 기반 수작업으로 처리하며 운영 전반 경험',
      '반복적이고 비효율적인 업무 구조에서 자동화·구조화의 필요성을 인식',
      '"문제를 기술로 구조적으로 해결하고 싶다"는 개발자 진로의 결정적 계기',
    ],
    skills: [],
  },
  {
    id: 'codeit-fullstack-bootcamp',
    title: '코드잇 풀스택 부트캠프',
    type: '코드잇',
    duration: '2025.06 – 2026.01',
    icon: Code,
    responsibilities: [
      '프론트엔드·백엔드·배포를 아우르는 실무형 풀스택 개발 과정 수료',
      '문제 정의 → 기술 판단 → 운영 관점까지 고려한 프로젝트 수행',
      '현재의 개발 방식과 브랜딩(Problem · Judgment · Operation)을 확립',
    ],
    skills: [],
  },
];

const Experience = () => {
  return (
    <section className="w-full flex-shrink-0 snap-start">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-10 sm:px-6 sm:py-16 md:px-10">
        <div className="mx-auto max-w-3xl">
          <AnimateInView delay={0}>
            <h2 className="text-foreground mb-6 text-left text-xl font-bold sm:mb-10 sm:text-2xl md:text-3xl">
              Experience
            </h2>
          </AnimateInView>
          <AnimateInView delay={80}>
            <ProfessionalTimeline
              data={EXPERIENCE_DATA}
              defaultExpandedIds={EXPERIENCE_DATA.map((d) => d.id)}
              expandMode="multi"
            />
          </AnimateInView>
        </div>
      </div>
    </section>
  );
};

export default Experience;
