import { IPrize } from '@/entities/prize';
import { ESymphonyLevels } from '@/shared/model/types';
import Hoodie from '@/shared/assets/images/prizes/hoodie.png';
import DogToy from '@/shared/assets/images/prizes/dog_toy.png';
import EnterButton from '@/shared/assets/images/prizes/enter_button.png';
import Socks from '@/shared/assets/images/prizes/socks.png';
import CleaningKit from '@/shared/assets/images/prizes/cleaning_kit.png';
import MousePad from '@/shared/assets/images/prizes/mouse_pad.png';
import Notebook from '@/shared/assets/images/prizes/notebook.png';
import Cap from '@/shared/assets/images/prizes/cap.png';
import Broom from '@/shared/assets/images/prizes/broom.png';
import PromoCode from '@/shared/assets/images/prizes/promo_code.png';

export const WheelPrizes: IPrize[] = [
  {
    name: 'Худи',
    feature: 'клевое',
    type: ESymphonyLevels.XDR,
    image: Hoodie,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
  },
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
    name: 'Кнопка',
    feature: 'антистрессовая',
    type: ESymphonyLevels.EDR,
    image: EnterButton,
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
    feature: 'компьютера',
    type: ESymphonyLevels.EDR,
    image: CleaningKit,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
  },
  {
    name: 'Коврик',
    feature: 'для мышки',
    type: ESymphonyLevels.EDR,
    image: MousePad,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
  },
  {
    name: 'Блокнот',
    feature: 'стильный',
    type: ESymphonyLevels.EDR,
    image: Notebook,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
  },
  {
    name: 'Бейсболка',
    feature: 'с вышивкой',
    type: ESymphonyLevels.EDR,
    image: Cap,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
  },
  {
    name: 'Собачка',
    feature: 'мягкая',
    type: ESymphonyLevels.SECURITY,
    image: DogToy,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
  },
];
