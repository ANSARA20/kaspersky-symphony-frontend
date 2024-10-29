import { ISVGProps } from '@/shared/model/types/svg-props.type';

export const FileCheck = ({ size = 16 }: ISVGProps) => {
  return (
    <svg fill='none' viewBox='0 0 16 16' width={size} xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9.33341 1.51318V4.26688C9.33341 4.64025 9.33341 4.82693 9.40608 4.96954C9.46999 5.09498 9.57198 5.19697 9.69742 5.26088C9.84003 5.33354 10.0267 5.33354 10.4001 5.33354H13.1538M6.00008 10.6668L7.33341 12.0002L10.3334 9.00016M9.33341 1.3335H5.86675C4.74664 1.3335 4.18659 1.3335 3.75877 1.55148C3.38244 1.74323 3.07648 2.04919 2.88473 2.42552C2.66675 2.85334 2.66675 3.41339 2.66675 4.5335V11.4668C2.66675 12.5869 2.66675 13.147 2.88473 13.5748C3.07648 13.9511 3.38244 14.2571 3.75877 14.4488C4.18659 14.6668 4.74664 14.6668 5.86675 14.6668H10.1334C11.2535 14.6668 11.8136 14.6668 12.2414 14.4488C12.6177 14.2571 12.9237 13.9511 13.1154 13.5748C13.3334 13.147 13.3334 12.5869 13.3334 11.4668V5.3335L9.33341 1.3335Z'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </svg>
  );
};
