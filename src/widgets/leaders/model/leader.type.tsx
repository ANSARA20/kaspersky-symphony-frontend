import { EPrizeIds } from '@/entities/prize';

export interface ILeader {
  id: number;
  name: string;
  phone: string;
  prizeId: EPrizeIds;
}
