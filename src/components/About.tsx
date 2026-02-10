import AnimateInView from '@/components/AnimateInView';

const About = () => {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-3.5rem)] w-full max-w-[1200px] flex-shrink-0 snap-start flex-col justify-center px-4 py-12 sm:min-h-[calc(100vh-4rem)] sm:px-6 sm:py-16 md:px-10">
      <div className="w-full max-w-[720px]">
        <AnimateInView delay={0}>
          <h2 className="text-foreground mb-8 text-left text-xl font-bold sm:mb-12 sm:text-2xl md:text-3xl">
            About me
          </h2>
        </AnimateInView>
        <div className="flex flex-col gap-6 text-left break-keep sm:gap-8">
          <AnimateInView delay={80}>
            <p className="text-foreground/90 text-[15px] leading-[1.85] sm:text-base md:text-lg md:leading-[1.9]">
              저는 문제를 그대로 받아들이기보다,{' '}
              <strong className="text-foreground font-semibold">
                왜 이 문제가 발생했는지부터 정의하는
              </strong>{' '}
              개발자입니다. 기능을 구현하는 과정에서도 단순히 &ldquo;동작하는 것&rdquo;에 그치지
              않고, 이 선택이{' '}
              <strong className="text-foreground font-semibold">사용자 경험과 운영 환경</strong>에서
              어떤 영향을 미치는지를 기준으로 판단해 왔습니다.
            </p>
          </AnimateInView>
          <AnimateInView delay={160}>
            <p className="text-foreground/90 text-[15px] leading-[1.85] sm:text-base md:text-lg md:leading-[1.9]">
              프로젝트를 진행하며 프론트엔드와 백엔드를 넘나들며 개발했고, 배포·운영 환경까지 직접
              구성해보며{' '}
              <strong className="text-foreground font-semibold">
                개발과 운영은 분리될 수 없다는 관점
              </strong>
              을 갖게 되었습니다. 이 경험을 통해 기술 선택은 익숙함이 아니라{' '}
              <strong className="text-foreground font-semibold">
                상황과 목적에 맞는 이유 있는 결정
              </strong>
              이어야 한다는 원칙을 세우게 되었습니다.
            </p>
          </AnimateInView>
          <AnimateInView delay={240}>
            <p className="text-foreground/90 text-[15px] leading-[1.85] sm:text-base md:text-lg md:leading-[1.9]">
              또한 팀 프로젝트에서는 개인의 구현 속도보다{' '}
              <strong className="text-foreground font-semibold">
                팀 전체의 안정성과 합의된 방향성
              </strong>
              을 우선시하며, 기술적 선택의 배경을 공유하고 조율하는 역할을 맡아왔습니다. 앞으로도
              저는{' '}
              <strong className="text-foreground font-semibold">
                문제의 본질을 이해하고, 판단의 이유를 설명할 수 있으며, 실제 운영까지 고려해
                설계하는
              </strong>{' '}
              개발자로 성장하고자 합니다.
            </p>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
};

export default About;
