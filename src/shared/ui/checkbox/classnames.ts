/* eslint-disable @conarti/feature-sliced/absolute-relative */
import { VariantProps } from 'tailwind-variants';

import { tv } from '@/shared/lib/utils/ui/tv';

export const checkboxTv = tv({
  slots: {
    base: 'group relative flex gap-3 cursor-pointer',
    input: 'hidden',
    wrapper:
      'w-5 h-5 flex items-center justify-center border-2 border-foreground/10 rounded-md group-data-[checked=true]:bg-primary transition-colors-opacity bg-background/40',
    icon: 'group-data-[checked=true]:opacity-100 opacity-0 transition-opacity',
    title: 'text-foreground/50 select-none',
  },
});

export type CheckboxVariantProps = VariantProps<typeof checkboxTv>;
