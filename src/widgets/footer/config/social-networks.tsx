import { C } from '@/shared/assets/icons/c';
import { Dzen } from '@/shared/assets/icons/dzen';
import { TG } from '@/shared/assets/icons/tg';
import { VK } from '@/shared/assets/icons/vk';
import { X } from '@/shared/assets/icons/x';
import { YouTube } from '@/shared/assets/icons/youtube';

interface IFooterSocialNetworks {
  icon: React.ReactNode;
  href: string;
}

export const FooterSocialNetworks: IFooterSocialNetworks[] = [
  {
    icon: <TG size={24} />,
    href: 'https://t.me/kasperskylab_ru',
  },
  {
    icon: <YouTube />,
    href: 'https://www.youtube.com/@KasperskyRussia',
  },
  {
    icon: <VK />,
    href: 'https://vk.com/kaspersky',
  },
  {
    icon: <X />,
    href: 'https://twitter.com/Kaspersky_ru',
  },
  {
    icon: <Dzen />,
    href: 'https://dzen.ru/kaspersky_ru',
  },
  {
    icon: <C />,
    href: 'https://forum.kasperskyclub.ru/',
  },
];
