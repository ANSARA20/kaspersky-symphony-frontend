type Props = {
  srcSet?: string;
} & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export const Picture = (props: Props) => {
  const { srcSet, alt, ...restProps } = props;

  return (
    <picture>
      <source srcSet={srcSet || restProps.src} />
      <img {...restProps} alt={alt} />
    </picture>
  );
};
