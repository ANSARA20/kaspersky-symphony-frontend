import { ISVGProps } from '../../model/types/svg-props.type';

export const C = ({ size = 26 }: ISVGProps) => {
  return (
    <svg fill='none' viewBox='0 0 24 26' width={size} xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.3671 25.9996C13.7053 25.9996 15.0039 25.8209 16.3382 25.4593C17.6408 25.1018 18.8329 24.525 19.8908 23.7369C20.9703 22.961 21.8894 21.9723 22.5947 20.8281C23.3482 19.5203 23.8269 18.0644 24 16.5545H18.3079C18.1564 17.2313 17.8687 17.8679 17.4632 18.4232C17.0806 18.9348 16.6029 19.3629 16.0579 19.6825C15.519 20.0357 14.9247 20.2899 14.3013 20.4341C13.6697 20.6128 12.9987 20.686 12.3671 20.686C11.3842 20.686 10.4724 20.5397 9.62763 20.1822C8.81113 19.834 8.07035 19.3216 7.44868 18.675C6.80909 17.9853 6.31813 17.1644 6.00789 16.266C5.64192 15.2192 5.46532 14.1122 5.48684 12.9998C5.48684 11.7811 5.66053 10.7005 6.01184 9.76611C6.36711 8.83175 6.82105 8.00707 7.45263 7.36115C8.08421 6.71522 8.78684 6.21147 9.63158 5.85398C10.501 5.48916 11.4322 5.30551 12.3711 5.31367C13.0026 5.31367 13.6737 5.42336 14.3053 5.56555C14.9187 5.74242 15.5086 5.9962 16.0618 6.32116C16.6263 6.67866 17.0803 7.10927 17.4671 7.61302C17.8719 8.15355 18.1599 8.77681 18.3118 9.44112H24C23.8265 7.94399 23.3476 6.50148 22.5947 5.20805C21.8795 4.06027 20.9609 3.06115 19.8868 2.26278C18.8091 1.49174 17.6098 0.918595 16.3421 0.568742C15.0465 0.203506 13.7104 0.0123381 12.3671 0C10.6816 0 9.10263 0.324995 7.62632 0.8978C6.15586 1.45624 4.81527 2.32528 3.69079 3.44901C2.53575 4.60376 1.61529 5.98329 0.982895 7.50739C0.315789 9.12018 0 10.9523 0 12.9998C0 15.0838 0.315789 16.916 0.986842 18.4922C1.65 20.1091 2.56579 21.4741 3.69079 22.5872C4.81527 23.7109 6.15586 24.58 7.62632 25.1384C9.14249 25.72 10.7491 26.0118 12.3671 25.9996Z'
        fill='white'
      />
    </svg>
  );
};
