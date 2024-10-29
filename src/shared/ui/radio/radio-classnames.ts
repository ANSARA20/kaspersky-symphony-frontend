/* eslint-disable @conarti/feature-sliced/absolute-relative */
import { VariantProps } from 'tailwind-variants';

import { tv } from '@/shared/lib/utils/ui/tv';

export const radioTv = tv({
  slots: {
    wrapper: 'flex gap-4 cursor-pointer',
    controlWrapper:
      'w-5 h-5 rounded-full flex items-center rounded-full justify-center border border-foreground/20 bg-foreground/10 transform-shadow shadow-xl flex-shrink-0',
    control:
      'w-3.5 h-3.5 rounded-full z-10 transition-transform-colors data-[selected=false]:scale-0 data-[selected=true]:scale-100',
    labelWrapper: 'flex flex-col gap-base lg:gap-sm',
    label: 'text-lg lg:text-xl',
    description: 'text-sm lg:text-lg',
  },
  variants: {
    color: {
      default: {
        control: 'bg-secondary-600',
      },
      primary: {
        control: 'bg-primary',
      },
      success: {
        controlWrapper: 'data-[selected=true]:shadow-success/80',
        control: 'bg-success',
        label: 'text-success',
        description: 'text-success',
      },
      danger: {
        controlWrapper: 'data-[selected=true]:shadow-red-500/80',
        control: 'bg-red-500',
        label: 'text-red-500',
        description: 'text-red-500',
      },
    },
  },
  defaultVariants: {
    color: 'default',
  },
});

export type RadioVariantProps = VariantProps<typeof radioTv>;
export type RadioSlots = keyof ReturnType<typeof radioTv>;
