import React, { FC, forwardRef, Ref, useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as classes from './ImageFactory.module.scss';

interface Props {
  ref: Ref<HTMLDivElement>;
}

const HERO_IMAGE_ID = 'HERO_IMAGE_ID';

const ImageFactory: FC<Props> = forwardRef<HTMLDivElement>((_props, ref) => {
  const [imageId, setImageId] = useState(sessionStorage.getItem(HERO_IMAGE_ID));

  useEffect(() => {
    if (sessionStorage.getItem(HERO_IMAGE_ID)) return;

    const newImageId = Math.floor(Math.random() * 5 + 1).toString();
    setImageId(newImageId);
    sessionStorage.setItem(HERO_IMAGE_ID, newImageId);
  }, []);

  switch (imageId) {
    case '1':
      return (
        <>
          <div ref={ref} className={classes.imageWrapper}>
            <StaticImage
              alt='Klaudia Polak - "Bugs"'
              objectFit="contain"
              objectPosition="bottom"
              placeholder="blurred"
              src="../../../images/hero-image-1.png"
            />
          </div>
          <p className={classes.artist}>Klaudia Polak</p>
        </>
      );
    case '2':
      return (
        <>
          <div ref={ref} className={classes.imageWrapper}>
            <StaticImage
              alt='Dorota Piechocińska - "Jo ma chart"'
              objectFit="contain"
              objectPosition="bottom"
              placeholder="blurred"
              src="../../../images/hero-image-2.png"
            />
          </div>
          <p className={classes.artist}>Dorota Piechocińska</p>
        </>
      );
    case '3':
      return (
        <>
          <div ref={ref} className={classes.imageWrapper}>
            <StaticImage
              alt='Dorota Piechocińska - "Chart ducha"'
              objectFit="contain"
              objectPosition="bottom"
              placeholder="blurred"
              src="../../../images/hero-image-3.png"
            />
          </div>
          <p className={classes.artist}>Dorota Piechocińska</p>
        </>
      );
    case '4':
      return (
        <>
          <div ref={ref} className={`${classes.imageWrapper} ${classes.cat}`}>
            <StaticImage
              alt='Klaudia Polak - "Fioletowy Ocelot"'
              objectFit="contain"
              objectPosition="bottom"
              placeholder="blurred"
              src="../../../images/hero-image-4.png"
            />
          </div>
          <p className={classes.artist}>Klaudia Polak</p>
        </>
      );
    case '5':
      return (
        <>
          <div ref={ref} className={classes.imageWrapper}>
            <StaticImage
              alt='Małgorzata Nowak - "Gwizdna Kicia"'
              objectFit="contain"
              objectPosition="bottom"
              placeholder="blurred"
              src="../../../images/hero-image-5.png"
            />
          </div>
          <p className={classes.artist}>Małgorzata Nowak</p>
        </>
      );
    default:
      return null;
  }
});

ImageFactory.displayName = 'ImageFactory';

export default ImageFactory;
