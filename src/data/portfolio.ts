const lineIcon = (paths: string) =>
  `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

export const strengths = [
  {
    title: 'フロントエンド実装・高度UI開発',
    text: '地図・SVG・CMSデータ・インタラクションを組み合わせた、複雑なUI実装を担当。要件が曖昧な状態からでも実現方法を検討し、保守・運用できる形まで落とし込む。',
    icon: lineIcon('<path d="M32 8 8 20l24 12 24-12L32 8Z"/><path d="M8 32l24 12 24-12"/><path d="M8 44l24 12 24-12"/>'),
  },
  {
    title: '長期視点での設計力',
    text: '一度作って終わりではなく、改修・運用・再利用を見据えた設計を重視。HTMLテンプレート、コンポーネント設計、データ構造、責務分離を整理し、長く扱えるフロントエンドを構築する。',
    icon: lineIcon('<path d="M42 36c6-4 10-11 10-18C52 8 43 2 32 2S12 8 12 18c0 7 4 14 10 18"/><path d="M24 42h16"/><path d="M26 50h12"/><path d="M30 58h4"/>'),
  },
  {
    title: '要件整理・技術判断',
    text: '社外とのやりとりや進行経験を通じて、要望をそのまま受け取るのではなく、実装・運用・スケジュールの観点から整理。フロントエンドとしての実現可能性を判断し、必要な技術選定や仕様調整を行う。',
    icon: lineIcon('<path d="M32 58s18-17 18-34A18 18 0 1 0 14 24c0 17 18 34 18 34Z"/><circle cx="32" cy="24" r="6"/>'),
  },
  {
    title: '開発環境整備・仕組みづくり',
    text: 'Git導入、ブランチ運用、HTMLテンプレート整備など、制作体制の変化に合わせた開発環境を整備。個人の頑張りに依存しすぎない、チームで継続できる開発フローをつくる。',
    icon: lineIcon('<circle cx="16" cy="12" r="5"/><circle cx="48" cy="20" r="5"/><circle cx="18" cy="48" r="5"/><path d="M16 17v26"/><path d="M21 48h10c8 0 13-5 13-13V25"/>'),
  },
  {
    title: '技術リード・メンバー支援',
    text: 'メンバーの実装確認、技術相談、進め方の整理を担当。自分が前に出るだけでなく、周囲が安心して開発できるように支える。',
    icon: lineIcon('<circle cx="32" cy="18" r="8"/><circle cx="14" cy="28" r="5"/><circle cx="50" cy="28" r="5"/><path d="M18 52v-4c0-8 6-14 14-14s14 6 14 14v4"/><path d="M4 52v-3c0-6 4-10 10-10"/><path d="M60 52v-3c0-6-4-10-10-10"/>'),
  },
];

export const studies = [
  {
    slug: 'traffic-prediction',
    number: '01',
    title: 'Traffic Prediction Visualization',
    text: '渋滞予測データを地図上に可視化し、リアルタイムに状況把握できるシステム。',
    variant: 'traffic' as const,
  },
  {
    slug: 'route-visualization',
    number: '02',
    title: 'Real-time Route Visualization',
    text: '本番・迂回ルートの現在の所要時間を可視化。動的データと静的データを分離した設計。',
    variant: 'route' as const,
  },
  {
    slug: 'route-checker-chatbot',
    number: '03',
    title: 'Route Checker Chatbot',
    text: 'チャット形式で最適な迂回ルートを提案。対話型 UI で運転時の体験を支援。',
    variant: 'chat' as const,
  },
];

export const histories = [
  {
    title: '2016-2017',
    text: 'フロントエンドエンジニアとして、HTML / CSS / JavaScript / WordPressを中心に、大手企業案件を通じて実務に必要な基礎力を身につける。',
  },
  {
    title: '2018-2019',
    text: '社外とのやりとりや進行管理を担当し、案件と人を動かす経験を積む。',
  },
  {
    title: '2020-2021',
    text: 'Git導入、ブランチ運用、HTMLテンプレート整備など、チーム開発の土台を整える。同時にReact / Vueなど、モダンフロントエンドの学習と検証を進める。',
  },
  {
    title: '2022-2023',
    text: 'メンバーの実装確認や技術相談を通じて、チームを支える役割を担う。実装者としてだけでなく、品質や進め方を支える立場へ広げる。',
  },
  {
    title: '2024-',
    text: 'React / TypeScriptを軸に、これまでの実装力・設計力・調整力を再統合。地図、データ連携、インタラクションを含む複雑なUIを、保守・運用できる形で実装する力を磨く。',
  }
];
