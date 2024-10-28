/* eslint-disable @conarti/feature-sliced/absolute-relative */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { RemoveScroll } from 'react-remove-scroll';
import { m, AnimatePresence } from 'framer-motion';

import { MView } from '../motion-view';

import { useModal } from './use-modal';
import { ModalContentVariants } from './animation-variants';

import { cn } from '@/shared/lib/utils/ui';

export const Modal = () => {
  const { modal, closeModal, options } = useModal();
  const { save, scrollable, containerProps } = options;

  return (
    <AnimatePresence>
      {modal ? (
        <RemoveScroll removeScrollBar className='fixed inset-0 z-50'>
          <MView
            vertical
            animate='end'
            exit='start'
            height='full'
            initial='start'
            style={{ overflowY: scrollable ? 'scroll' : 'hidden' }}
            variants={ModalContentVariants}
            {...containerProps}
            className={cn(
              'relative z-20 px-4',

              containerProps?.className,
            )}
          >
            {modal}
          </MView>
          <m.button
            animate='end'
            className={cn('fixed inset-0 z-10 bg-black/60 backdrop-blur-xl', {
              'cursor-default': save,
            })}
            exit='start'
            initial='start'
            variants={ModalContentVariants}
            onClick={save ? undefined : closeModal}
          />
          <m.button
            animate='end'
            className='fixed right-4 top-4 z-30'
            exit='start'
            initial='start'
            variants={ModalContentVariants}
            onClick={closeModal}
          >
            Close
          </m.button>
        </RemoveScroll>
      ) : null}
    </AnimatePresence>
  );
};
