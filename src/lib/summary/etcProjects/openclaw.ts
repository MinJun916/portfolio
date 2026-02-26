export type ChangelogEntry = {
  date?: string;
  /** 제목 (예: 날짜 | 제목 형식의 제목 부분) */
  title?: string;
  /** 어떤 이유로 */
  reason: string;
  /** 어떻게 했고 */
  action: string;
  /** 어떤 결과를 얻었다 */
  result: string;
};

export const OPENCLAW_CHANGELOG: ChangelogEntry[] = [
  {
    date: '2026.02.18',
    title: '프로젝트 착수 및 초기 인프라 설계',
    reason: '**LLM 기반 지능형 에이전트** 시스템 구축을 위해 **OpenClaw** 프레임워크 도입.',
    action:
      '개인 서버를 **메인 호스트**로 설정하고, **SSH**를 통한 원격 제어 환경 구축으로 개발 유연성 확보.',
    result:
      '에이전트의 **메모리 확장** 및 **외부 스킬(Skills)** 연동을 통해 업무 효율 극대화 토대 마련.',
  },
  {
    date: '2026.02.20',
    title: '보안 강화를 위한 컨테이너 환경 구축 시도',
    reason:
      '보안 이슈 방지를 위해 독립된 리눅스 사용자 환경 내 **Docker** 컨테이너 기반 구축 성공.',
    action:
      '컨테이너 환경에서의 **시스템 유지보수 편의성** 및 **프레임워크 호환성**을 면밀히 검토.',
    result: '',
  },
  {
    date: '2026.02.22',
    title: 'Native 인프라 마이그레이션 및 보안 고도화',
    reason:
      '운영 효율성과 버전 업데이트 대응력을 높이기 위해 **NPM 기반 Native** 환경으로 마이그레이션 수행.',
    action:
      '**최소 권한 원칙(Least Privilege)**에 따라 리눅스 격리 사용자로 시스템을 분리하여 **보안 안정성** 강화.',
    result: '프레임워크의 **코어 기능**을 직접 제어할 수 있는 최적화된 실행 환경 확립.',
  },
  {
    date: '2026.02.26',
    title: '리소스 및 성능 최적화 (Token & Cost Tuning)',
    reason: '실시간 모니터링 중 **대규모 컨텍스트 호출**로 인한 **API 토큰 한도** 근접 현상 포착.',
    action: '컨텍스트 전략 수정: **maxHistoryShare** 및 **softThresholdTokens** 임계값 정밀 튜닝.',
    result:
      '추론 성능은 유지하면서 토큰 소모량을 기존 대비 약 **85%** 이상 절감 (**70만 → 8만** 수준), **지속 가능한 운영 구조** 완성.',
  },
];
