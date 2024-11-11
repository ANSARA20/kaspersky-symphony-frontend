export const createFloatingAnimation = (delay: number) => ({
  animate: {
    y: [-5, 5],
    transition: {
      delay,
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut',
    },
  },
});
