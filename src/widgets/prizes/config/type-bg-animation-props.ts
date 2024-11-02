import { MotionProps } from 'framer-motion';

export const TypeBgAnimationProps: MotionProps = {
  initial: { opacity: 0, filter: 'blur(12px)' },
  animate: { opacity: 1, filter: 'blur(0px)' },
  exit: { opacity: 0, filter: 'blur(12px)' },
  transition: { duration: 0.3 },
};
