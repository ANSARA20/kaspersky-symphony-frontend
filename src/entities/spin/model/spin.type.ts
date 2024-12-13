export interface ISpin {
  id: number;
  date: string;
  prizeId: string;
  userId: number;
}

export interface ISpinDto extends ISpin {
  prize: { type: string };
}
export interface IFormattedSpin extends ISpin {
  prizeType: string;
}
