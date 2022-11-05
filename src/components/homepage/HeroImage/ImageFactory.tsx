import { StaticImage } from 'gatsby-plugin-image';
import React, { FC } from 'react';

const ImageFactory: FC = () => {
  const imageId = 1;

  switch (imageId) {
    case 1:
      return (
        <StaticImage
          alt="Klaudia Polak - Bugs"
          objectFit="contain"
          placeholder="blurred"
          src="../../../images/hero-image.png"
        />
      );
    default:
      return null;
  }
};

export default ImageFactory;
