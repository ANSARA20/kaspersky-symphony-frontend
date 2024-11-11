import { ESymphonyLevels } from '@/shared/model/types';

export const PrizesBg: Record<ESymphonyLevels, string> = {
  [ESymphonyLevels.SECURITY]: 'bg-primary-200',
  [ESymphonyLevels.MDR]: 'bg-tretiary',
  [ESymphonyLevels.EDR]: 'bg-secondary',
  [ESymphonyLevels.XDR]: 'bg-default',
};
