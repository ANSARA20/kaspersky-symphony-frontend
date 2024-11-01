import { PrizesList } from '../config/prizes-list';

import { View } from '@/shared/ui/view';
import { cn } from '@/shared/lib/utils/ui';
import { PrizeCard } from '@/entities/prize';
import { ESymphonyLevels } from '@/shared/model/types';

interface Props {
  setHoveredPrize: (type: null | ESymphonyLevels) => void;
}

export const DesktopCards = ({ setHoveredPrize }: Props) => {
  return (
    <View>
      {PrizesList.map((prize) => (
        <View
          key={prize.name}
          className={cn('-ml-16 first:ml-0', prize.cardClass)}
          onMouseOut={() => setHoveredPrize(null)}
          onMouseOver={() => setHoveredPrize(prize.type)}
        >
          <PrizeCard {...prize} />
        </View>
      ))}
    </View>
  );
};
