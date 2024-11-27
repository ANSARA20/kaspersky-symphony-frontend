import { MotionConfigProps, TargetAndTransition } from 'framer-motion';

import { CardsMt, CardsZIndexes } from '../config/cards-card-styles';
import { CardsTransitionParams } from '../config/transition-params';

export class PrizeCardAnimation implements Partial<MotionConfigProps> {
  layout: true;
  transition = CardsTransitionParams;
  animate: TargetAndTransition;
  initial: TargetAndTransition = {
    opacity: 0,
    filter: 'blur(10px)',
    marginTop: 100,
  };
  exit: TargetAndTransition;
  constructor(currentIndex: number, isNext: boolean) {
    this.getAnimate(currentIndex);
    this.getExit(isNext);
  }
  private getAnimate(currentIndex: number) {
    this.animate = {
      opacity: 1,
      filter: 'blur(0px)',
      zIndex: CardsZIndexes[currentIndex],
      marginTop: CardsMt[currentIndex],
      marginLeft: currentIndex === 0 ? 0 : -64,
    };
  }
  private getExit(isNext: boolean) {
    this.exit = {
      x: isNext ? -40 : 600,
      ...this.initial,
    };
  }
}
