import { ISVGProps } from '../../model/types/svg-props.type';

export const CloseIcon = ({ size = 16, className }: ISVGProps) => {
  return (
    <svg
      className={className}
      fill='currentColor'
      viewBox='0 0 256 256'
      width={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z' />
    </svg>
  );
};
