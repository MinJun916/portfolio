const About = () => {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[1200px] flex-shrink-0 snap-start flex-col justify-center px-6 py-16 sm:px-10">
      <div className="w-full max-w-[720px]">
        <h2 className="text-foreground mb-12 text-left text-2xl font-bold sm:text-3xl">About me</h2>
        <div className="flex flex-col gap-8 text-left break-keep">
          <p className="text-foreground/90 text-base leading-[1.85] sm:text-lg sm:leading-[1.9]">
            저는 문제를 그대로 받아들이기보다, 왜 이 문제가 발생했는지부터 정의하는 개발자입니다.
            기능을 구현하는 과정에서도 단순히 &ldquo;동작하는 것&rdquo;에 그치지 않고, 이 선택이
            사용자 경험과 운영 환경에서 어떤 영향을 미치는지를 기준으로 판단해 왔습니다.
          </p>
          <p className="text-foreground/90 text-base leading-[1.85] sm:text-lg sm:leading-[1.9]">
            프로젝트를 진행하며 프론트엔드와 백엔드를 넘나들며 개발했고, 배포·운영 환경까지 직접
            구성해보며 개발과 운영은 분리될 수 없다는 관점을 갖게 되었습니다. 이 경험을 통해 기술
            선택은 익숙함이 아니라 상황과 목적에 맞는 이유 있는 결정이어야 한다는 원칙을 세우게
            되었습니다.
          </p>
          <p className="text-foreground/90 text-base leading-[1.85] sm:text-lg sm:leading-[1.9]">
            또한 팀 프로젝트에서는 개인의 구현 속도보다 팀 전체의 안정성과 합의된 방향성을
            우선시하며, 기술적 선택의 배경을 공유하고 조율하는 역할을 맡아왔습니다. 앞으로도 저는
            문제의 본질을 이해하고, 판단의 이유를 설명할 수 있으며, 실제 운영까지 고려해 설계하는
            개발자로 성장하고자 합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
