import Socks from '@/shared/assets/images/prizes/socks.png';
import Broom from '@/shared/assets/images/prizes/broom.png';
import Bear from '@/shared/assets/images/prizes/bear.png';
import Hoodie from '@/shared/assets/images/prizes/hoodie.png';
import PromoCode from '@/shared/assets/images/prizes/promo_code.png';
import { IPrize } from '@/entities/prize';
import { ESymphonyLevels } from '@/shared/model/types';

export const WheelPrizes: IPrize[] = [
  {
    name: 'Носки',
    feature: 'теплые',
    type: ESymphonyLevels.SECURITY,
    image: Socks,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
  },
  {
    name: 'Веник',
    feature: 'банный',
    type: ESymphonyLevels.MDR,
    image: Broom,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
  },
  {
    name: 'Худи',
    feature: 'клевое',
    type: ESymphonyLevels.XDR,
    image: Hoodie,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
  },
  {
    name: 'Кнопка',
    feature: 'антистрессовая',
    type: ESymphonyLevels.EDR,
    image: Bear,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
  },
  {
    name: 'Промокод',
    feature: 'полезный',
    type: ESymphonyLevels.SECURITY,
    image: PromoCode,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
  },
  {
    name: 'Набор для чистки',
    feature: 'теплые',
    type: ESymphonyLevels.SECURITY,
    image: Socks,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
  },
  {
    name: 'Коврик',
    feature: 'банный',
    type: ESymphonyLevels.MDR,
    image: Broom,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
  },
  {
    name: 'Наклейки',
    feature: 'клевое',
    type: ESymphonyLevels.XDR,
    image: Hoodie,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
  },
  {
    name: 'Брелок',
    feature: 'антистрессовая',
    type: ESymphonyLevels.EDR,
    image: Bear,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
  },
  {
    name: 'Блокнот',
    feature: 'полезный',
    type: ESymphonyLevels.SECURITY,
    image: PromoCode,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
  },
];
