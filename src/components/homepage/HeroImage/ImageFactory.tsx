import React, { FC, forwardRef, Ref } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as classes from './ImageFactory.module.scss';

interface Props {
  ref: Ref<HTMLDivElement>;
}

const ImageFactory: FC<Props> = forwardRef<HTMLDivElement>((_props, ref) => {
  const imageId = 1;

  switch (imageId) {
    case 1:
      return (
        <>
          <div ref={ref} className={classes.imageWrapper}>
            <StaticImage
              alt="Klaudia Polak - Bugs"
              objectFit="contain"
              objectPosition="bottom"
              placeholder="blurred"
              src="../../../images/hero-image.png"
            />
          </div>
          <p className={classes.artist}>Klaudia Polak</p>
        </>
      );
    default:
      return null;
  }
});

ImageFactory.displayName = 'ImageFactory';

export default ImageFactory;
