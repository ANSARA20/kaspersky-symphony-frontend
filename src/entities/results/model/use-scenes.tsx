import { create } from 'zustand';

import { EResultsScenes } from './scenes';
import { TResultPrize } from './prize';

interface ScenesStore {
  scene: EResultsScenes;
  prize: TResultPrize | null;
  setScene: (scene: EResultsScenes) => void;
  setPrize: (prize: TResultPrize) => void;
}

export const useScenes = create<ScenesStore>()((set) => ({
  scene: 'wheel' as EResultsScenes.WHEEL,
  prize: null,
  setScene: (scene) => set(() => ({ scene })),
  setPrize: (prize) => set(() => ({ prize })),
}));
