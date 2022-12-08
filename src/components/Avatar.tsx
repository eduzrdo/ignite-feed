interface AvatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

export const Avatar = ({ src, alt, hasBorder = true }: AvatarProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-12 h-12 rounded-lg border-4 border-gray-800 box-content ${
        hasBorder ? 'outline outline-2 outline-green-500' : ''
      }`}
    />
  );
};
