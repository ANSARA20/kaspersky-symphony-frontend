/* eslint-disable @conarti/feature-sliced/absolute-relative */

import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

import { useRadio, UseRadioProps } from './use-radio';

import { forwardRef } from '@/shared/lib/utils/ui';

export interface RadioProps extends UseRadioProps {}

export const RadioButton = forwardRef<'input', RadioProps>((props, ref) => {
  const {
    Component,
    domRef,
    children,
    description,
    getWrapperProps,
    getInputProps,
    getControlWrapperProps,
    getControlProps,
    getLabelProps,
    getLabelWrapperProps,
    getDescriptionProps,
  } = useRadio({
    ...props,
    ref,
  });

  return (
    <Component {...getWrapperProps()} ref={domRef}>
      <VisuallyHidden.Root>
        <input {...getInputProps()} />
      </VisuallyHidden.Root>
      <span {...getControlWrapperProps()}>
        <span {...getControlProps()} />
      </span>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
        {description && <span {...getDescriptionProps()}>{description}</span>}
      </div>
    </Component>
  );
});
