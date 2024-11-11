import { ISVGProps } from '../../model/types/svg-props.type';

export const WheelArrow = ({ size, className }: ISVGProps) => {
  return (
    <svg className={className} viewBox='0 0 92 36' width={size} xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M63.5 28.093L92 1.99995C46.8 -1.60005 11.8333 0.499953 0 1.99995L29.5 28.093C32 30.7286 38.9 36 46.5 36C54.1 36 61 30.7286 63.5 28.093Z'
        fill='#00A78E'
      />
    </svg>
  );
};
