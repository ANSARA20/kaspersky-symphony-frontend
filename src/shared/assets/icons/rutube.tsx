import { ISVGProps } from '../../model/types/svg-props.type';

export const RutubeIcon = ({ size = 20 }: ISVGProps) => {
  return (
    <svg
      fill='none'
      height={size}
      viewBox='0 0 36 36'
      width={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_536_1192)'>
        <mask
          height='36'
          id='mask0_536_1192'
          maskUnits='userSpaceOnUse'
          style={{ maskType: 'luminance' }}
          width='36'
          x='0'
          y='0'
        >
          <path d='M36 0H0V36H36V0Z' fill='white' />
        </mask>
        <g mask='url(#mask0_536_1192)'>
          <path d='M36 0H0V36H36V0Z' fill='white' />
          <path
            d='M36 18C45.9412 18 54 9.94113 54 8.85942e-06C54 -9.94113 45.9412 -18 36 -18C26.0589 -18 18 -9.94113 18 8.85942e-06C18 9.94113 26.0589 18 36 18Z'
            fill='#ED143B'
          />
          <path
            d='M22.2372 17.1781H11.6015V12.9695H22.2372C22.8584 12.9695 23.2904 13.0778 23.5072 13.2668C23.724 13.456 23.8582 13.8067 23.8582 14.319V15.8302C23.8582 16.37 23.724 16.7207 23.5072 16.9099C23.2904 17.0989 22.8584 17.1798 22.2372 17.1798V17.1781ZM22.9668 9.00161H7.09094V27H11.6015V21.1444H19.914L23.8582 27H28.9091L24.5604 21.1169C26.1637 20.8793 26.8836 20.388 27.4773 19.5782C28.071 18.7685 28.3689 17.4739 28.3689 15.7462V14.3966C28.3689 13.3719 28.2603 12.5622 28.071 11.9416C27.8818 11.3209 27.5583 10.7811 27.0988 10.2962C26.6134 9.83722 26.0731 9.51395 25.4243 9.29738C24.7755 9.1083 23.965 9 22.9668 9V9.00161Z'
            fill='#100943'
          />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_536_1192'>
          <rect fill='white' height='36' rx='10' width='36' />
        </clipPath>
      </defs>
    </svg>
  );
};
