import { ISVGProps } from '../../model/types/svg-props.type';

export const WheelSecret = ({ size, className }: ISVGProps) => {
  return (
    <svg
      className={className}
      fill='none'
      height='457'
      viewBox='0 0 376 457'
      width={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_bi_886_190)'>
        <path
          d='M188 0C125.832 0 66.1359 10.5839 10.6154 30.0481C2.23748 32.9852 -1.85887 42.3338 1.38506 50.5978L173.106 488.058C178.421 501.597 197.579 501.597 202.894 488.058L374.615 50.5978C377.859 42.3339 373.763 32.9852 365.385 30.0481C309.864 10.5839 250.168 0 188 0Z'
          fill='#2F3F4E'
        />
        <path
          d='M10.9462 30.9918C66.3619 11.5643 125.946 1 188 1C250.054 1 309.638 11.5643 365.054 30.9918C372.878 33.7348 376.728 42.4772 373.684 50.2324L201.963 487.693C196.981 500.385 179.019 500.385 174.037 487.693L2.31592 50.2324C-0.728322 42.4772 3.12204 33.7348 10.9462 30.9918Z'
          stroke='url(#paint0_linear_886_190)'
          strokeWidth='2'
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
          height='598.812'
          id='filter0_bi_886_190'
          width='476.051'
          x='-50.0256'
          y='-50.3'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImageFix' stdDeviation='25.15' />
          <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_886_190' />
          <feBlend
            in='SourceGraphic'
            in2='effect1_backgroundBlur_886_190'
            mode='normal'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            result='hardAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feMorphology
            in='SourceAlpha'
            operator='erode'
            radius='8'
            result='effect2_innerShadow_886_190'
          />
          <feOffset dy='17' />
          <feGaussianBlur stdDeviation='14.3' />
          <feComposite in2='hardAlpha' k2='-1' k3='1' operator='arithmetic' />
          <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0' />
          <feBlend in2='shape' mode='normal' result='effect2_innerShadow_886_190' />
        </filter>
        <linearGradient
          gradientUnits='userSpaceOnUse'
          id='paint0_linear_886_190'
          x1='-4.5'
          x2='380.5'
          y1='263'
          y2='263'
        >
          <stop offset='0.00967923' stopColor='#2DC191' />
          <stop offset='0.338861' stopColor='#97DF23' />
          <stop offset='0.565631' stopColor='#E7CE0E' />
          <stop offset='0.828977' stopColor='#E56A3E' />
        </linearGradient>
      </defs>
    </svg>
  );
};
