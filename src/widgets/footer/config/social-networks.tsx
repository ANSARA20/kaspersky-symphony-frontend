import { RutubeIcon } from '@/shared/assets/icons/rutube';
import { TG } from '@/shared/assets/icons/tg';
import { VK } from '@/shared/assets/icons/vk';

interface IFooterSocialNetworks {
  icon: React.ReactNode;
  href: string;
}

export const FooterSocialNetworks: IFooterSocialNetworks[] = [
  {
    icon: <VK />,
    href: 'https://vk.com/kaspersky?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_socialmedia_sm-team___ks____4d9cd66aa14f98a3',
  },
  {
    icon: <TG size={23} />,
    href: 'https://t.me/kasperskyb2b?utm_source=affiliate&utm_medium=referral&utm_campaign=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_socialmedia_sm-team___ks____e5b48245a373f542',
  },
  {
    icon: <TG size={23} />,
    href: 'https://t.me/kasperskylab_ru?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_socialmedia_sm-team___ks____646f1a0fe9b66ee3',
  },
  {
    icon: <RutubeIcon size={22} />,
    href: 'https://rutube.ru/channel/27277458/?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_socialmedia_sm-team___ks____45dc241f659cb783 ',
  },
];
