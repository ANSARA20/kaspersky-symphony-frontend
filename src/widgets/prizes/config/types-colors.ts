import SecurityBlur from '@/shared/assets/images/prizes/security_blur.png';
import MDRBlur from '@/shared/assets/images/prizes/mdr_blur.png';
import EDRBlur from '@/shared/assets/images/prizes/edr_blur.png';
import XDRBlur from '@/shared/assets/images/prizes/xdr_blur.png';
import { ESymphonyLevels } from '@/shared/model/types';

interface ITypeProperties {
  gradient: string;
  bgBlur: string;
}

export const TypesColors: Record<ESymphonyLevels, ITypeProperties> = {
  [ESymphonyLevels.SECURITY]: {
    gradient: 'bg-gradient-to-r from-transparent via-primary-700/30 to-transparent;',
    bgBlur: SecurityBlur,
  },
  [ESymphonyLevels.MDR]: {
    gradient: 'bg-gradient-to-r from-transparent via-tretiary-700/30 to-transparent',
    bgBlur: MDRBlur,
  },
  [ESymphonyLevels.EDR]: {
    gradient: 'bg-gradient-to-r from-transparent via-secondary-700/30 to-transparent',
    bgBlur: EDRBlur,
  },
  [ESymphonyLevels.XDR]: {
    gradient: 'bg-gradient-to-r from-transparent via-default-700/30 to-transparent',
    bgBlur: XDRBlur,
  },
};
