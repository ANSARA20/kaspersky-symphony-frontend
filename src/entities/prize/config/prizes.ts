import { EPrizeIds } from '../model/prize-ids.type';
import { IPrize } from '../model/prize.type';

import { ESymphonyLevels } from '@/shared/model/types';
import Hoodie from '@/shared/assets/images/prizes/hoodie.png';
import DogToy from '@/shared/assets/images/prizes/dog_toy.png';
import KeyChain from '@/shared/assets/images/prizes/key_chain.png';
import EnterButton from '@/shared/assets/images/prizes/enter_button.png';
import Socks from '@/shared/assets/images/prizes/socks.png';
import KeyboardSticker from '@/shared/assets/images/prizes/keyboard_sticker.png';
import CleaningKit from '@/shared/assets/images/prizes/cleaning_kit.png';
import PhoneStand from '@/shared/assets/images/prizes/phone_stand.png';
import MousePad from '@/shared/assets/images/prizes/mouse_pad.png';
import Notebook from '@/shared/assets/images/prizes/notebook.png';
import Cap from '@/shared/assets/images/prizes/cap.png';
import Broom from '@/shared/assets/images/prizes/broom.png';
import PromoCode from '@/shared/assets/images/prizes/promo_code.png';

export const Prizes: Record<EPrizeIds, IPrize> = {
  [EPrizeIds.BROOM]: {
    name: 'Веник',
    feature: 'банный',
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
    type: ESymphonyLevels.SECURITY,
    image: Broom,
  },
  [EPrizeIds.PROMO_CODE]: {
    name: 'Промокод',
    feature: 'полезный',
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
    type: ESymphonyLevels.SECURITY,
    image: PromoCode,
  },
  [EPrizeIds.DOG_TOY]: {
    name: 'Собачка',
    feature: 'мягкая',
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
    type: ESymphonyLevels.SECURITY,
    image: DogToy,
  },
  [EPrizeIds.KEY_CHAIN]: {
    name: 'Брелок',
    feature: 'яркий',
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
    type: ESymphonyLevels.SECURITY,
    image: KeyChain,
  },
  [EPrizeIds.ENTER_BUTTON]: {
    name: 'Кнопка',
    feature: 'антистрессовая',
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
    type: ESymphonyLevels.MDR,
    image: EnterButton,
  },
  [EPrizeIds.SOCKS]: {
    name: 'Носки',
    feature: 'теплые',
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
    type: ESymphonyLevels.MDR,
    image: Socks,
  },
  [EPrizeIds.KEYBOARD_STICKER]: {
    name: 'Наклейки',
    feature: 'на клавиатуру',
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
    type: ESymphonyLevels.MDR,
    image: KeyboardSticker,
  },
  [EPrizeIds.CLEANING_KIT]: {
    name: 'Набор для чистки',
    feature: 'компьютера',
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
    type: ESymphonyLevels.EDR,
    image: CleaningKit,
  },
  [EPrizeIds.PHONE_STAND]: {
    name: 'Подставка',
    feature: 'под телефон',
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
    type: ESymphonyLevels.EDR,
    image: PhoneStand,
  },
  [EPrizeIds.MOUSE_PAD]: {
    name: 'Коврик',
    feature: 'для мышки',
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
    type: ESymphonyLevels.EDR,
    image: MousePad,
  },
  [EPrizeIds.NOTEBOOK]: {
    name: 'Блокнот',
    feature: 'стильный',
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
    type: ESymphonyLevels.EDR,
    image: Notebook,
  },
  [EPrizeIds.CAP]: {
    name: 'Бейсболка',
    feature: 'с вышивкой',
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
    type: ESymphonyLevels.EDR,
    image: Cap,
  },
  [EPrizeIds.HOODIE]: {
    name: 'Худи',
    feature: 'Клевое',
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
    type: ESymphonyLevels.XDR,
    image: Hoodie,
  },
};
