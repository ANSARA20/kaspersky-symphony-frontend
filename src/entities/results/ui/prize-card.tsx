import { m } from 'framer-motion';

export const PrizeCard = () => {
  return (
    <m.div
      animate={{ opacity: 1 }}
      className='absolute inset-0 z-20 bg-background'
      initial={{ opacity: 0 }}
      transition={{ delay: 2 }}
    >
      Приз
    </m.div>
  );
};
