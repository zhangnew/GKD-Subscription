import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 233,
  name: '自用规则',
  version: 0,
  author: 'zhangnew',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/zhangnew/GKD-Subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
