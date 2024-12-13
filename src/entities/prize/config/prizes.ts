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
    description: 'Девайс, чтобы париться в бане, а не по пустякам',
    type: ESymphonyLevels.SECURITY,
    image: Broom,
  },
  [EPrizeIds.PROMO_CODE]: {
    name: 'Промокод',
    feature: 'полезный',
    description: 'Обязательно пригодится',
    type: ESymphonyLevels.SECURITY,
    image: PromoCode,
  },
  [EPrizeIds.DOG_TOY]: {
    name: 'Собачка',
    feature: 'мягкая',
    description: 'Маленький антистресс-помощник',
    type: ESymphonyLevels.SECURITY,
    image: DogToy,
  },
  [EPrizeIds.KEY_CHAIN]: {
    name: 'Брелок',
    feature: 'яркий',
    description: 'Самый стильный обвес',
    type: ESymphonyLevels.SECURITY,
    image: KeyChain,
  },
  [EPrizeIds.ENTER_BUTTON]: {
    name: 'Кнопка',
    feature: 'антистрессовая',
    description: 'Спасение от беспокойств в онлайне',
    type: ESymphonyLevels.MDR,
    image: EnterButton,
  },
  [EPrizeIds.SOCKS]: {
    name: 'Носки',
    feature: 'теплые',
    description: 'Держи киберугрозы под контролем, а ноги в тепле',
    type: ESymphonyLevels.MDR,
    image: Socks,
  },
  [EPrizeIds.KEYBOARD_STICKER]: {
    name: 'Наклейки',
    feature: 'на клавиатуру',
    description: 'Самые важные кнопки клавиатуры точно не потеряются',
    type: ESymphonyLevels.MDR,
    image: KeyboardSticker,
  },
  [EPrizeIds.CLEANING_KIT]: {
    name: 'Набор для чистки',
    feature: 'компьютера',
    description: 'Для опрятных компьютеров',
    type: ESymphonyLevels.EDR,
    image: CleaningKit,
  },
  [EPrizeIds.PHONE_STAND]: {
    name: 'Подставка',
    feature: 'под телефон',
    description: 'Чтобы скроллить было еще удобнее',
    type: ESymphonyLevels.EDR,
    image: PhoneStand,
  },
  [EPrizeIds.MOUSE_PAD]: {
    name: 'Коврик',
    feature: 'для мышки',
    description: 'Верный спутник в мире технологий',
    type: ESymphonyLevels.EDR,
    image: MousePad,
  },
  [EPrizeIds.NOTEBOOK]: {
    name: 'Блокнот',
    feature: 'стильный',
    description: 'Твой бумажный сервер',
    type: ESymphonyLevels.EDR,
    image: Notebook,
  },
  [EPrizeIds.CAP]: {
    name: 'Бейсболка',
    feature: 'с вышивкой',
    description: 'Стильная защита от солнечных лучей',
    type: ESymphonyLevels.EDR,
    image: Cap,
  },
  [EPrizeIds.HOODIE]: {
    name: 'Худи',
    feature: 'Клевое',
    description: 'Как доспехи, только мягче',
    type: ESymphonyLevels.XDR,
    image: Hoodie,
  },
};
