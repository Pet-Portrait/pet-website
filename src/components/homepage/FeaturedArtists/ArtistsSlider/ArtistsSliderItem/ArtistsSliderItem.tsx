import React, { FC } from 'react';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';

import * as classes from './ArtistsSliderItem.module.scss';

interface Props {
  avatar: ImageDataLike;
  name: string;
  id: string;
}

const ArtistsSliderItem: FC<Props> = ({ avatar, id, name }) => {
  const image = getImage(avatar);
  const openModal = () => {
    // eslint-disable-next-line no-console
    console.log(`Open modal with artist id: ${id}`);
  };

  if (!image) return null;

  return (
    <button className={classes.root} onClick={openModal}>
      <figure>
        <GatsbyImage alt={name} className={classes.image} image={image} />
        <figcaption className={classes.name}>{name}</figcaption>
      </figure>
    </button>
  );
};

export default ArtistsSliderItem;
