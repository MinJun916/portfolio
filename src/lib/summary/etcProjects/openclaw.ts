export type ChangelogEntry = {
  date?: string;
  /** 어떤 이유로 */
  reason: string;
  /** 어떻게 했고 */
  action: string;
  /** 어떤 결과를 얻었다 */
  result: string;
};

export const OPENCLAW_CHANGELOG: ChangelogEntry[] = [
  {
    date: '2025.01.15',
    reason: '진입 장벽을 낮추고 일관된 명령 구조를 만들고 싶어서',
    action: 'CLI 기본 스켈레톤을 도입했고',
    result: '새 명령 추가 시 동일한 패턴으로 확장할 수 있게 되었습니다.',
  },
  {
    date: '2025.01.22',
    reason: '운영 설정을 읽고 수정하기 쉽게 하려고',
    action: '설정 파일을 YAML 기반으로 전환했고',
    result: '주석과 계층 구조로 설정 의도가 명확해졌습니다.',
  },
  {
    date: '2025.02.01',
    reason: '초기 실행 시간을 줄이고 필요한 기능만 메모리에 올리려고',
    action: '플러그인 로딩을 지연 로딩으로 바꿨고',
    result: '기동 시간이 짧아지고 메모리 사용량이 줄었습니다.',
  },
  {
    date: '2025.02.10',
    reason: '사용자가 다음 행동을 스스로 결정할 수 있게 하려고',
    action: '에러 메시지에 복구 힌트를 넣었고',
    result: '오류 발생 시 대응 방법을 바로 확인할 수 있게 되었습니다.',
  },
];
