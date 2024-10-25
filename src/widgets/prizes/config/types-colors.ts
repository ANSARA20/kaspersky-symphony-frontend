import { EPrizeTypes } from '@/entities/prize';
import SecurityBlur from '@/shared/assets/images/prizes/security_blur.png';
import MDRBlur from '@/shared/assets/images/prizes/mdr_blur.png';
import EDRBlur from '@/shared/assets/images/prizes/edr_blur.png';
import XDRBlur from '@/shared/assets/images/prizes/xdr_blur.png';

interface ITypeProperties {
  gradient: string;
  bgBlur: string;
}

export const TypesColors: Record<EPrizeTypes, ITypeProperties> = {
  [EPrizeTypes.SYMPHONY_SECURITY]: {
    gradient: 'bg-gradient-to-r from-transparent via-primary-700/30 to-transparent;',
    bgBlur: SecurityBlur,
  },
  [EPrizeTypes.SYMPHONY_MDR]: {
    gradient: 'bg-gradient-to-r from-transparent via-tretiary-700/30 to-transparent',
    bgBlur: MDRBlur,
  },
  [EPrizeTypes.SYMPHONY_EDR]: {
    gradient: 'bg-gradient-to-r from-transparent via-secondary-700/30 to-transparent',
    bgBlur: EDRBlur,
  },
  [EPrizeTypes.SYMPHONY_XDR]: {
    gradient: 'bg-gradient-to-r from-transparent via-default-700/30 to-transparent',
    bgBlur: XDRBlur,
  },
};
