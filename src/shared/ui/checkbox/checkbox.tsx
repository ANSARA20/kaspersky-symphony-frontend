/* eslint-disable @conarti/feature-sliced/absolute-relative */

import { forwardRef } from 'react';

import { useCheckbox, UseCheckboxProps } from './use-checkbox';

import { CheckIcon } from '@/shared/assets/icons/check';

export type CheckboxProps = UseCheckboxProps;

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>((props, ref) => {
  const {
    domRef,
    buildLabelProps,
    buildInputProps,
    buildTitleProps,
    buildCheckboxWrapperProps,
    buildCheckboxIconProps,
    children,
  } = useCheckbox({
    ...props,
    ref,
  });

  return (
    <label ref={domRef} {...buildLabelProps()}>
      <input {...buildInputProps()} />
      <div {...buildCheckboxWrapperProps()}>
        <CheckIcon {...buildCheckboxIconProps()} />
      </div>
      {children && <span {...buildTitleProps()} />}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
