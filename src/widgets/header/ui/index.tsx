import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import Logo from '@/shared/assets/icons/logo';
import { RulesIcon } from '@/shared/assets/icons/rules-icon';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import { LINKS } from '@/shared/config/links';

export const Header = () => {
  const isNotMobile = useMediaQuery({ query: '(min-width: 560px)' });

  return (
    <View
      as='header'
      className='my-6 py-4'
      items='center'
      justify={isNotMobile ? 'between' : 'center'}
    >
      <Link className='transition-opacity hover:opacity-60' target='_blank' to={LINKS.PRODUCT}>
        <Logo />
      </Link>
      {isNotMobile ? (
        <View
          centered
          as='a'
          className='transition-opacity hover:opacity-60'
          href='/rules.pdf'
          rel='noreferrer'
          target='_blank'
          width='fit'
        >
          <RulesIcon />
          <Text className='-ml-2 text-nowrap' size='sm'>
            Правила конкурса
          </Text>
        </View>
      ) : null}
    </View>
  );
};
