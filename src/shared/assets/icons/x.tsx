import { ISVGProps } from '@/shared/model/types/svg-props.type';

export const X = ({ size = 24 }: ISVGProps) => {
  return (
    <svg fill='none' viewBox='0 0 24 24' width={size} xmlns='http://www.w3.org/2000/svg'>
      <path
        clipRule='evenodd'
        d='M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM10.344 12.72L4.608 5.04H9.024L12.792 10.08L17.448 5.04H18.744L13.368 10.848L19.428 18.948H15.012L10.932 13.488L5.868 18.948H4.572L10.344 12.708V12.72Z'
        fill='white'
        fillRule='evenodd'
      />
    </svg>
  );
};
