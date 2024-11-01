import { useMemo } from 'react';

import { PrizesType } from './type';

import { View } from '@/shared/ui/view';
import { ESymphonyLevels } from '@/shared/model/types';

interface Props {
  hoveredPrize: ESymphonyLevels | null;
  tabType: ESymphonyLevels;
  setTabType: (type: ESymphonyLevels) => void;
  isDesktop: boolean;
}

export const PrizesTypes = (props: Props) => {
  const types = Object.values(ESymphonyLevels);

  const typesElements = useMemo(() => {
    return types.map((type) => <PrizesType key={type} {...props} type={type} />);
  }, [props.tabType, props.hoveredPrize]);

  return (
    <>
      <View centered className='mb-8 hidden gap-0 xl:flex'>
        {typesElements}
      </View>
      <div className='grid grid-cols-2 xl:hidden'>{typesElements}</div>
    </>
  );
};
