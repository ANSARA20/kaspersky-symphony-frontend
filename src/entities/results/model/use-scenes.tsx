import { create } from 'zustand';

import { EResultsScenes } from './scenes';

interface ScenesStore {
  scene: EResultsScenes;
  setScene: (scene: EResultsScenes) => void;
}

export const useScenes = create<ScenesStore>()((set) => ({
  scene: 'wheel' as EResultsScenes.WHEEL,
  setScene: (scene) => set(() => ({ scene })),
}));
