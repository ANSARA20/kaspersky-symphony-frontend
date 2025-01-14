import Marquee from 'react-fast-marquee';
import { useEffect, useState } from 'react';

import { ILeader } from '../model/leader.type';
import { fetchLeaders } from '../api/fetch-leaders';
import { LeadersExample } from '../config/leaders-example';

import { Leader } from './leader';

import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

export const Leaders = () => {
  const [leaders, setLeaders] = useState<ILeader[]>([]);

  const getLeaders = async () => {
    const leaders = await fetchLeaders();

    if (leaders.length > 5) {
      setLeaders(leaders);
    } else [setLeaders([...LeadersExample, ...leaders])];
  };

  useEffect(() => {
    getLeaders();
  }, []);

  return (
    <View centered vertical className='mb-16 mt-32'>
      <Text
        as='h1'
        className='px-4 text-center text-[24px] md:text-[32px] lg:text-[40px]'
        weight={6}
      >
        Победители конкурса!
      </Text>
      <Text className='mb-6 max-w-[340px] px-4 text-center text-base md:max-w-[740px] md:text-lg lg:mb-10 lg:text-[24px]'>
        Эти участники уже получили свои призы от{' '}
        <span className='text-gradient-base'>Kaspersky Symphony</span>, и мы рады вручить тебе
        заслуженную награду!
      </Text>
      <Marquee gradient={false} speed={50}>
        <View className='gap-4 pr-4 lg:gap-8 lg:pr-8'>
          {leaders.map((leader) => (
            <Leader key={leader.id} {...leader} />
          ))}
        </View>
      </Marquee>
    </View>
  );
};
