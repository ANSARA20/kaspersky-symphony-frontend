import { ResultsForm } from '../ui/form';
import { ResultsWheel } from '../ui/wheel';

export enum EResultsScenes {
  WHEEL = 'wheel',
  FORM = 'form',
  PRIZE = 'prize',
}

export const ResultsScenes: Record<EResultsScenes, React.ReactNode> = {
  [EResultsScenes.WHEEL]: <ResultsWheel />,
  [EResultsScenes.FORM]: <ResultsForm />,
  [EResultsScenes.PRIZE]: <ResultsWheel />,
};
