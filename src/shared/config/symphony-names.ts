import { ESymphonyLevels } from '../model/types';

export const SymphonyNames: Record<ESymphonyLevels, string> = {
  [ESymphonyLevels.SECURITY]: 'Symphony Security',
  [ESymphonyLevels.EDR]: 'Symphony EDR',
  [ESymphonyLevels.MDR]: 'Symphony MDR',
  [ESymphonyLevels.XDR]: 'Symphony XDR',
};
