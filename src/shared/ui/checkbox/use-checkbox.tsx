import { InputHTMLAttributes, PropsWithoutRef, Ref, useCallback, useMemo, useState } from 'react';

import { checkboxTv } from './classnames';

type InputProps = PropsWithoutRef<InputHTMLAttributes<HTMLInputElement>>;

export type UseCheckboxProps = InputProps & {
  ref?: Ref<HTMLLabelElement>;
  id?: string;
};

export const useCheckbox = (props: UseCheckboxProps) => {
  const { ref, id, children, ...rest } = props;

  const [isChecked, setIsChecked] = useState(false);

  const domRef = ref;

  const {
    base: baseStyles,
    input: inputStyles,
    wrapper: wrapperStyles,
    icon: iconStyles,
    title: titleStyles,
  } = useMemo(() => checkboxTv(), []);

  const buildLabelProps = useCallback(() => {
    return {
      'data-checked': isChecked,
      htmlFor: id,
      className: baseStyles(),
    };
  }, [id, isChecked, baseStyles]);

  const buildInputProps = useCallback(() => {
    return {
      id,
      ...rest,
      className: inputStyles(),
      checked: isChecked,
      onChange: () => setIsChecked((prev) => !prev),
      type: 'checkbox',
    };
  }, [id, rest, isChecked, inputStyles]);

  const buildCheckboxWrapperProps = useCallback(() => {
    return {
      className: wrapperStyles(),
    };
  }, [wrapperStyles]);

  const buildCheckboxIconProps = useCallback(() => {
    return {
      className: iconStyles(),
    };
  }, [iconStyles]);

  const buildTitleProps = useCallback(() => {
    return {
      children,
      className: titleStyles(),
    };
  }, [children, titleStyles]);

  return {
    domRef,
    buildLabelProps,
    buildInputProps,
    buildTitleProps,
    buildCheckboxWrapperProps,
    buildCheckboxIconProps,
    children,
  };
};
