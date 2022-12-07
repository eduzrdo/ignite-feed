export const Avatar = ({ src, hasBorder = true }) => {
  return (
    <img
      src={src}
      className={`w-12 h-12 rounded-lg border-4 border-gray-800 box-content ${
        hasBorder ? 'outline outline-2 outline-green-500' : ''
      }`}
    />
  );
};
