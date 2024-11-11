import clsx from 'clsx';

import { IPrize, PrizeCard, Prizes } from '@/entities/prize';
import { ESymphonyLevels } from '@/shared/model/types';
import { View } from '@/shared/ui/view';

export class PrizesCards {
  private PrizesList = Object.values(Prizes);
  private securityPrizes: IPrize[];
  private mdrPrizes: IPrize[];
  private edrPrizes: IPrize[];
  private xdrPrizes: IPrize[];
  private prizesForSlides: IPrize[][] = [];
  slides: React.ReactNode[] = [];

  constructor(setHoveredPrize: (type: null | ESymphonyLevels) => void) {
    this.separatePrizesByType();
    this.composePrizes();
    this.generateSlides(setHoveredPrize);
  }

  private separatePrizesByType() {
    this.securityPrizes = this.PrizesList.filter(
      (prize) => prize.type === ESymphonyLevels.SECURITY,
    );
    this.mdrPrizes = this.PrizesList.filter((prize) => prize.type === ESymphonyLevels.MDR);
    this.edrPrizes = this.PrizesList.filter((prize) => prize.type === ESymphonyLevels.EDR);
    this.xdrPrizes = this.PrizesList.filter((prize) => prize.type === ESymphonyLevels.XDR);
  }

  private composePrizes() {
    while (
      this.securityPrizes.length ||
      this.mdrPrizes.length ||
      this.edrPrizes.length ||
      this.xdrPrizes.length
    ) {
      const prizesForSlide = this.composePrizesForOneSlide();

      this.prizesForSlides.push(prizesForSlide);
    }
  }
  private composePrizesForOneSlide() {
    const prizesForSlide = [];

    if (this.securityPrizes.length) prizesForSlide.push(this.securityPrizes.shift());
    if (this.mdrPrizes.length > this.edrPrizes.length) {
      prizesForSlide.push(this.mdrPrizes.shift());
      if (this.xdrPrizes.length) {
        prizesForSlide.push(this.xdrPrizes.shift());
      } else if (this.edrPrizes.length) {
        prizesForSlide.push(this.edrPrizes.shift());
      }
      if (this.mdrPrizes.length) {
        prizesForSlide.push(this.mdrPrizes.shift());
      }
    } else {
      prizesForSlide.push(this.edrPrizes.shift());
      if (this.xdrPrizes.length) {
        prizesForSlide.push(this.xdrPrizes.shift());
      } else if (this.mdrPrizes.length) {
        prizesForSlide.push(this.mdrPrizes.shift());
      }
      if (this.edrPrizes.length) {
        prizesForSlide.push(this.edrPrizes.shift());
      }
    }
    if (this.securityPrizes.length) prizesForSlide.push(this.securityPrizes.shift());

    return prizesForSlide;
  }

  private generateSlides(setHoveredPrize: (type: null | ESymphonyLevels) => void) {
    this.slides = this.prizesForSlides.map((prizesForSlide) => {
      let position = prizesForSlide.length > 3 ? 0 : 1;
      const k = Math.floor(Math.sqrt(prizesForSlide.length));

      return (
        <View key={prizesForSlide[0].name} className='px-8 pb-8' width='fit'>
          {prizesForSlide.map((prize, index) => {
            if (index <= k) {
              position += 1;
            } else {
              position -= 1;
            }

            const cardStyle = this.generateCardStyle(position, index, k);

            return this.renderCard(prize, setHoveredPrize, cardStyle);
          })}
        </View>
      );
    });
  }

  private renderCard(
    prize: IPrize,
    setHoveredPrize: (type: null | ESymphonyLevels) => void,
    cardStyle: string,
  ) {
    return (
      <View
        key={prize.name}
        className={cardStyle}
        onMouseOut={() => setHoveredPrize(null)}
        onMouseOver={() => setHoveredPrize(prize.type)}
      >
        <PrizeCard {...prize} />
      </View>
    );
  }

  private generateCardStyle(position: number, index: number, k: number) {
    return clsx('-ml-16 first:ml-0', {
      'z-10 mt-20': position === 1,
      'z-20 mt-8': position === 2,
      'z-30': position === 3,
      '-rotate-[4deg]': index <= k && position === 1,
      '-rotate-2': index <= k && position === 2,
      'rotate-2': index > k && position === 2,
      'rotate-[4deg]': index > k && position === 1,
    });
  }
}
