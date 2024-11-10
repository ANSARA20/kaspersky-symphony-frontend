import { ResultsScenes } from '../model/scenes';
import { useScenes } from '../model/use-scenes';

export const ResultsSceneController = () => {
  const { scene } = useScenes();

  console.log(scene);

  return <>{ResultsScenes[scene]}</>;
};
