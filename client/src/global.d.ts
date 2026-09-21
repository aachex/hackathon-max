// src/global.d.ts
export {};

interface MAXWebAPPInstance {
  ready: () => void;
  expand: () => void;
  close: () => void;
  isExpanded: boolean;
  toggleExpand: () => void;
  initData: string;
}

declare global {
  interface Window {
    MAXWebAPP?: MAXWebAPPInstance;
  }
}