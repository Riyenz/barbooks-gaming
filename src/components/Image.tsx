import React, { useState } from 'react';

import clsx from 'clsx';

interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image: React.FC<IImageProps> = ({ src, alt, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const source =
    src?.includes('https') || src?.includes('http')
      ? src
      : import.meta.env.VITE_BASE_URL + src;

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <div
          {...props}
          className={clsx('image-placeholder', props.className)}
        ></div>
      )}
      <img
        src={source}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ display: isLoading ? 'none' : 'block' }}
        {...props}
      />
    </>
  );
};

export default Image;
