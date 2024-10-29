import { Picture } from '@/shared/ui/picture';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import { cn } from '@/shared/lib/utils/ui';

interface Props {
  image: string;
  title: string;
  textClassPosition: string;
  blockClassPosition: string;
}

export const HeroDogMobile = ({ image, title, textClassPosition, blockClassPosition }: Props) => {
  return (
    <View className={cn('relative', blockClassPosition)} width='fit'>
      <Picture alt={title} className='w-[280px] md:w-[420px]' draggable={false} src={image} />
      <Text className={cn('absolute text-sm', textClassPosition)} weight={5}>
        {title}
      </Text>
    </View>
  );
};
