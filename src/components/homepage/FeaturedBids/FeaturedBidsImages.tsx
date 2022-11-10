import React, { FC } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import { FeaturedImage } from '../Homepage.types';

import * as classes from './FeaturedBidsImages.module.scss';

interface Props {
  images: FeaturedImage[];
}

const FeaturedBidsImages: FC<Props> = ({ images }) => (
  <div className={classes.images}>
    {images.map((image) => (
      <a
        key={image.alt}
        className={classes.link}
        href={image.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <GatsbyImage alt={image.alt} className={classes.image} image={image.image} />
      </a>
    ))}
  </div>
);

export default FeaturedBidsImages;
