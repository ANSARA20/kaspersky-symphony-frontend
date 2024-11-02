import { ESymphonyLevels } from '@/shared/model/types';

export interface IPrize {
  name: string;
  feature: string;
  type: ESymphonyLevels;
  image: string;
  description: string;
}
