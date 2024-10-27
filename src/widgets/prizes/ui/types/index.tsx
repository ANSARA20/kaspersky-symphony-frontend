import { useMediaQuery } from 'react-responsive';
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
  // ! ты перерендериваешь все содержимое, когда тут можно просто использовать css-media query
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const typesElements = useMemo(() => {
    return types.map((type) => (
      <PrizesType key={type} {...props} isDesktop={isDesktop} type={type} />
    ));
  }, [isDesktop]);

  return (
    <>
      {isDesktop ? (
        <View centered className='mb-8 gap-0'>
          {typesElements}
        </View>
      ) : (
        <div className='grid grid-cols-2'>{typesElements}</div>
      )}
    </>
  );
};
