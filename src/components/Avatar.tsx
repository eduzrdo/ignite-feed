import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export const Avatar = ({ hasBorder = true, ...props }: AvatarProps) => {
  return (
    <img
      className={`w-12 h-12 rounded-lg border-4 border-gray-800 box-content ${
        hasBorder ? 'outline outline-2 outline-green-500' : ''
      }`}
      {...props}
    />
  );
};
