/* eslint-disable @conarti/feature-sliced/absolute-relative */

import { Ref, useCallback, useMemo, useRef } from 'react';
import clsx from 'clsx';

import { RadioSlots, radioTv, RadioVariantProps } from './radio-classnames';

import { HTMLUIProps, PropGetter, SlotsToClasses } from '@/shared/model/types/ui';
import { useDOMRef } from '@/shared/lib/utils/ui/react-utils';

export type UseRadioProps = Omit<HTMLUIProps<'input'>, keyof RadioVariantProps> &
  RadioVariantProps & {
    ref?: Ref<HTMLDivElement> | null;
    classNames?: SlotsToClasses<RadioSlots>;
    description?: string;
  };

export const useRadio = (props: UseRadioProps) => {
  const { color, className, classNames, as, ref, id, children, description, ...restProps } = props;

  const Component = as || 'label';

  const slots = useMemo(
    () =>
      radioTv({
        color,
      }),
    [color],
  );

  const domRef = useDOMRef(ref);
  const inputRef = useRef<HTMLInputElement>(null);

  const wrapperStyles = clsx(classNames?.wrapper, className);

  const getWrapperProps: PropGetter = useCallback(
    (props = {}) => {
      return {
        ...props,
        ref: domRef,
        htmlFor: id,
        className: slots.wrapper({ class: wrapperStyles }),
      };
    },
    [slots, wrapperStyles, domRef],
  );

  const getInputProps: PropGetter = useCallback(() => {
    return {
      ...restProps,
      ref: inputRef,
      id,
      type: 'radio',
    };
  }, [id, inputRef, restProps]);

  const getControlWrapperProps: PropGetter = useCallback(() => {
    return {
      className: slots.controlWrapper({ class: classNames?.controlWrapper }),
      ['data-selected']: inputRef?.current?.checked || false,
    };
  }, [slots, classNames?.controlWrapper, inputRef?.current?.checked]);

  const getControlProps: PropGetter = useCallback(() => {
    return {
      className: slots.control({ class: classNames?.control }),
      ['data-selected']: inputRef?.current?.checked || false,
    };
  }, [slots, classNames?.control, inputRef?.current?.checked]);

  const getLabelWrapperProps: PropGetter = useCallback(() => {
    return {
      className: slots.labelWrapper({ class: classNames?.labelWrapper }),
    };
  }, [slots, classNames?.labelWrapper]);

  const getLabelProps: PropGetter = useCallback(() => {
    return {
      id,
      className: slots.label({ class: classNames?.label }),
    };
  }, [id, slots, classNames?.label]);

  const getDescriptionProps: PropGetter = useCallback(() => {
    return {
      id,
      className: slots.description({ class: classNames?.description }),
    };
  }, [id, slots, classNames?.description]);

  return {
    Component,
    domRef,
    children,
    description,
    getWrapperProps,
    getInputProps,
    getControlWrapperProps,
    getControlProps,
    getLabelWrapperProps,
    getLabelProps,
    getDescriptionProps,
  };
};
