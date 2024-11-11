import { useModal } from '@/shared/ui/modal';
import { View } from '@/shared/ui/view';
import { CallToActionSection } from '@/widgets/call-to-action';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { HeroSection } from '@/widgets/hero';
import { Leaders } from '@/widgets/leaders';
import { PrizesSection } from '@/widgets/prizes';

export const HomePage = () => {
  const { setModal } = useModal();

  // useEffect(() => {
  //   setModal(<ResultsModal />, {
  //     save: true,
  //     scrollable: true,
  //     containerProps: { justify: 'start', items: 'center' },
  //   });
  // }, []);

  return (
    <View vertical className='gap-0 overflow-x-hidden'>
      <View vertical className='max-w-layout container mx-auto px-4'>
        <Header />
        <HeroSection />
      </View>
      <View vertical className='container mx-auto px-4'>
        <PrizesSection />
      </View>
      <Leaders />
      <CallToActionSection />
      <Footer />
    </View>
  );
};
