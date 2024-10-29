import { useMemo } from 'react';

import { PrizesType } from './type';

import { EPrizeTypes } from '@/entities/prize';
import { View } from '@/shared/ui/view';

interface Props {
  hoveredPrize: EPrizeTypes | null;
  tabType: EPrizeTypes;
  setTabType: (type: EPrizeTypes) => void;
  isDesktop: boolean;
}

export const PrizesTypes = (props: Props) => {
  const types = Object.values(EPrizeTypes);

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
