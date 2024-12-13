import { IFormattedSpin, ISpinDto } from '@/entities/spin';

export const formatSpins = (spins: ISpinDto[]): IFormattedSpin[] => {
  return spins.map((spin) => ({
    id: spin.id,
    date: new Date(spin.date).toLocaleString(),
    prizeId: spin.prizeId,
    prizeType: spin.prize.type,
    userId: spin.userId,
  }));
};
