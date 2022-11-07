import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as classes from './ImageFactory.module.scss';

const ImageFactory: FC = () => {
  const imageId = 1;

  switch (imageId) {
    case 1:
      return (
        <div className={classes.imageWrapper}>
          <StaticImage
            alt="Klaudia Polak - Bugs"
            objectFit="contain"
            objectPosition="bottom"
            placeholder="blurred"
            src="../../../images/hero-image.png"
          />
          <p className={classes.artist}>Klaudia Polak</p>
        </div>
      );
    default:
      return null;
  }
};

export default ImageFactory;
