import React, { FC } from 'react';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';

import * as classes from './ArtistsSliderItem.module.scss';

interface Props {
  avatar: ImageDataLike;
  name: string;
  id: string;
  onClick: (id: string) => void;
}

const ArtistsSliderItem: FC<Props> = ({ avatar, id, name, onClick }) => {
  const image = getImage(avatar);

  const handleClick = () => onClick(id);

  if (!image) return null;
  return (
    <button className={classes.root} onClick={handleClick}>
      <figure>
        <GatsbyImage alt={name} className={classes.image} image={image} />
        <figcaption className={classes.name}>{name}</figcaption>
      </figure>
    </button>
  );
};

export default ArtistsSliderItem;
