import { create } from 'zustand';

import { EResultsScenes } from './scenes';
import { TResultPrize } from './prize';

interface ScenesStore {
  scene: EResultsScenes;
  prize: TResultPrize | null;
  isShowPrizeCard: boolean;
  isShowPrizeAnimation: boolean;
  setScene: (scene: EResultsScenes) => void;
  setPrize: (prize: TResultPrize) => void;
  setIsShowPrizeCard: (value: boolean) => void;
  setIsShowPrizeAnimation: (value: boolean) => void;
}

export const useScenes = create<ScenesStore>()((set) => ({
  scene: 'prize' as EResultsScenes,
  prize: null,
  isShowPrizeCard: false,
  isShowPrizeAnimation: false,
  setScene: (scene) => set(() => ({ scene })),
  setPrize: (prize) => set(() => ({ prize })),
  setIsShowPrizeCard: (isShowPrizeCard) => set(() => ({ isShowPrizeCard })),
  setIsShowPrizeAnimation: (isShowPrizeAnimation) => set(() => ({ isShowPrizeAnimation })),
}));
