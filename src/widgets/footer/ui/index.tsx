import { Link } from 'react-router-dom';

import { FooterDocuments } from '../config/documents';
import { FooterSocialNetworks } from '../config/social-networks';

import { FooterCols } from './cols';

import { View } from '@/shared/ui/view';
import { Text } from '@/shared/ui/text';
import { FileQuestion } from '@/shared/assets/icons/file-question';
import { RulesIcon } from '@/shared/assets/icons/rules-icon';
import { FileCheck } from '@/shared/assets/icons/file-check';
import { useModal } from '@/shared/ui/modal';
import { FAQ } from '@/entities/faq';

export const Footer = () => {
  const { setModal } = useModal();

  const handleOpenFAQ = () => {
    setModal(<FAQ />);
  };

  return (
    <View as='footer' className='border-t border-foreground/30'>
      <View vertical className='max-w-layout container mx-auto px-8 pb-6 pt-10 sm:px-4'>
        <FooterCols />
        <Text className='hidden lg:block' opacity={5}>
          © 2024 АО «Лаборатория Касперского»
        </Text>
        <View className='flex-col items-start lg:flex-row lg:items-center' justify='between'>
          <View vertical>
            <View className='flex-col items-start gap-sm text-sm sm:text-base lg:flex-row lg:items-center xl:gap-lg'>
              <button
                className='flex items-center gap-2'
                onClick={() => {
                  handleOpenFAQ();
                }}
              >
                <FileQuestion />
                FAQ
              </button>
              <Link className='flex items-center gap-2' target='_blank' to=''>
                <RulesIcon />
                Правила конкурса
              </Link>
              <Link className='flex items-center gap-2' target='_blank' to=''>
                <FileCheck />
                Юридическая информация
              </Link>
            </View>
            <View className='flex-col items-start gap-sm lg:flex-row lg:items-center xl:gap-lg'>
              {FooterDocuments.map(({ title, href }, index) => (
                <Link key={index} className='text-[12px]' target='_blank' to={href}>
                  {title}
                </Link>
              ))}
            </View>
          </View>
          <Text className='block lg:hidden' size='sm'>
            © 2024 АО «Лаборатория Касперского»
          </Text>
          <View gap='lg' width='fit'>
            {FooterSocialNetworks.map(({ icon, href }, index) => (
              <View key={index} as={Link} target='_blank' to={href} width='fit'>
                {icon}
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};
