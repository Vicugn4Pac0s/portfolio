const lineIcon = (paths: string) =>
  `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

export const strengths = [
  {
    title: 'Architecture',
    text: '責務分離・状態管理・再利用性・保守性を重視した設計。',
    icon: lineIcon('<path d="M32 8 8 20l24 12 24-12L32 8Z"/><path d="M8 32l24 12 24-12"/><path d="M8 44l24 12 24-12"/>'),
  },
  {
    title: 'Product Thinking',
    text: '短期実装だけでなく、継続運用や改善コストを考慮した改善。',
    icon: lineIcon('<path d="M42 36c6-4 10-11 10-18C52 8 43 2 32 2S12 8 12 18c0 7 4 14 10 18"/><path d="M24 42h16"/><path d="M26 50h12"/><path d="M30 58h4"/>'),
  },
  {
    title: 'API Integration',
    text: 'Google Maps API やリアルタイムデータを用いた UI 構築。',
    icon: lineIcon('<path d="M32 58s18-17 18-34A18 18 0 1 0 14 24c0 17 18 34 18 34Z"/><circle cx="32" cy="24" r="6"/>'),
  },
  {
    title: 'Workflow Improvement',
    text: 'Git導入、ブランチ戦略、PR 文化など、チーム開発の土台づくり。',
    icon: lineIcon('<circle cx="16" cy="12" r="5"/><circle cx="48" cy="20" r="5"/><circle cx="18" cy="48" r="5"/><path d="M16 17v26"/><path d="M21 48h10c8 0 13-5 13-13V25"/>'),
  },
  {
    title: 'Team Support',
    text: '下位スタッフの育成・確認・段取り設計を担当。',
    icon: lineIcon('<circle cx="32" cy="18" r="8"/><circle cx="14" cy="28" r="5"/><circle cx="50" cy="28" r="5"/><path d="M18 52v-4c0-8 6-14 14-14s14 6 14 14v4"/><path d="M4 52v-3c0-6 4-10 10-10"/><path d="M60 52v-3c0-6-4-10-10-10"/>'),
  },
];

export const studies = [
  {
    number: '01',
    title: 'Traffic Prediction Visualization',
    text: '渋滞予測データを地図上に可視化し、リアルタイムに状況把握できるシステム。',
    variant: 'traffic' as const,
  },
  {
    number: '02',
    title: 'Real-time Route Visualization',
    text: '本番・迂回ルートの現在の所要時間を可視化。動的データと静的データを分離した設計。',
    variant: 'route' as const,
  },
  {
    number: '03',
    title: 'Route Checker Chatbot',
    text: 'チャット形式で最適な迂回ルートを提案。対話型 UI で運転時の体験を支援。',
    variant: 'chat' as const,
  },
];

export const histories = [
  {
    title: '2016',
    text: '独学で Web 制作会社へ入社。',
  },
  {
    title: 'Early Career',
    text: 'HTML / CSS / JavaScript / PHP を用いた幅広い案件に携わる。WordPress、LP、投票システム、注文フォーム、インタラクティブサイトなど。',
  },
  {
    title: 'Growth',
    text: 'React / TypeScript を中心に、状態管理・設計・API 連携を強化。',
  },
  {
    title: 'Current',
    text: 'リアルタイムデータや地図を用いた、継続運用型フロントエンド開発を担当。',
  },
];
