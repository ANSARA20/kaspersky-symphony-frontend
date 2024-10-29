export const ResultsWrapperTransition: any = {
  animate: { y: 0, opacity: 1, filter: 'blur(0px)' },
  initial: { y: 100, opacity: 0, filter: 'blur(24px)' },
  transition: { type: 'spring', duration: 1, bounce: 0 },
};

export const WheelWrapperTransition: any = {
  animate: { y: 0, opacity: 1, filter: 'blur(0px)' },
  initial: { y: 100, opacity: 0, filter: 'blur(24px)' },
  transition: { type: 'spring', duration: 1, bounce: 0, delay: 0.1 },
};
