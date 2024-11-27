import { IPrize, Prizes } from '@/entities/prize';
import { ESymphonyLevels } from '@/shared/model/types';

export class ComposedPrizes {
  private prizesList = Object.values(Prizes);
  private securityPrizes: IPrize[];
  private mdrPrizes: IPrize[];
  private edrPrizes: IPrize[];
  private xdrPrizes: IPrize[];
  list: IPrize[] = [];
  constructor() {
    this.separatePrizesByType();
    this.composePrizes();
  }
  private separatePrizesByType() {
    this.securityPrizes = this.prizesList.filter(
      (prize) => prize.type === ESymphonyLevels.SECURITY,
    );
    this.mdrPrizes = this.prizesList.filter((prize) => prize.type === ESymphonyLevels.MDR);
    this.edrPrizes = this.prizesList.filter((prize) => prize.type === ESymphonyLevels.EDR);
    this.xdrPrizes = this.prizesList.filter((prize) => prize.type === ESymphonyLevels.XDR);
  }
  private composePrizes() {
    while (
      this.securityPrizes.length ||
      this.mdrPrizes.length ||
      this.edrPrizes.length ||
      this.xdrPrizes.length
    ) {
      if (this.securityPrizes.length) this.list.push(this.securityPrizes.shift());
      if (this.mdrPrizes.length > this.edrPrizes.length) {
        this.list.push(this.mdrPrizes.shift());
        if (this.xdrPrizes.length) {
          this.list.push(this.xdrPrizes.shift());
        } else if (this.edrPrizes.length) {
          this.list.push(this.edrPrizes.shift());
        }
        if (this.mdrPrizes.length) {
          this.list.push(this.mdrPrizes.shift());
        }
      } else {
        this.list.push(this.edrPrizes.shift());
        if (this.xdrPrizes.length) {
          this.list.push(this.xdrPrizes.shift());
        } else if (this.mdrPrizes.length) {
          this.list.push(this.mdrPrizes.shift());
        }
        if (this.edrPrizes.length) {
          this.list.push(this.edrPrizes.shift());
        }
      }
      if (this.securityPrizes.length) this.list.push(this.securityPrizes.shift());
    }
  }
}
