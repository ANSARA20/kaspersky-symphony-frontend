import { ISVGProps } from '@/shared/model/types/svg-props.type';

export const TG = ({ size = 26 }: ISVGProps) => {
  return (
    <svg fill='none' viewBox='0 0 26 26' width={size} xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.8152 25.898C19.8928 25.898 25.6304 20.1604 25.6304 13.0828C25.6304 6.00514 19.8928 0.267578 12.8152 0.267578C5.73756 0.267578 0 6.00514 0 13.0828C0 20.1604 5.73756 25.898 12.8152 25.898Z'
        fill='white'
      />
      <path
        d='M10.4614 18.9544C10.0537 18.9544 10.1119 18.803 9.98377 18.4069L8.7605 14.3876L18.1505 8.80713'
        fill='#111112'
      />
      <path
        d='M10.4624 18.9549C10.7886 18.9549 10.9284 18.8151 11.1032 18.6404L12.8157 16.9744L10.6838 15.6929'
        fill='#111112'
      />
      <path
        d='M10.6831 15.6927L15.8442 19.5023C16.4267 19.8285 16.8577 19.6654 17.0092 18.9547L19.1062 9.05205C19.3276 8.18994 18.78 7.79383 18.2208 8.05014L5.87162 12.8151C5.03281 13.1529 5.03281 13.6306 5.72017 13.8286L8.88902 14.8189L16.2286 10.1938C16.5781 9.98407 16.881 10.1006 16.6247 10.3336'
        fill='#111112'
      />
    </svg>
  );
};
