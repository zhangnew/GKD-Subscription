import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chibatching.glyphpredictor',
  name: 'Glyph predictor',
  groups: [
    {
      key: 0,
      name: '开启悬浮窗',
      fastQuery: true,
      actionCd: 5000,
      actionMaximum: 1,
      rules: { matches: '[vid="fab"]' },
    },
  ],
});
