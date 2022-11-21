import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { ImageTile } from '../types';

import * as classes from './ImageItem.module.scss';

interface Props {
  onClick?: (id: string) => void;
  item: ImageTile;
}

const ImageItem = ({ onClick, item }: Props) => {
  const image = getImage(item.image);
  const imageRatio = image ? image.height / image.width : 0;
  const isSquare = imageRatio > 0.9 && imageRatio < 1.1;
  const isVertical = imageRatio >= 1.1;
  const isHorizontal = imageRatio <= 0.9;

  const innerContent = (
    <figure className={classes.content}>
      {image && (
        <div className={classes.imageWrapper}>
          <GatsbyImage alt={item.alt} className={classes.image} image={image} />
        </div>
      )}
      <figcaption className={classes.caption}>
        <p className={classes.heading}>{item.heading}</p>
        {item.subheading && <p>{item.subheading}</p>}
      </figcaption>
    </figure>
  );
  return (
    <li
      className={`${classes.root} ${isSquare ? classes.square : ''} ${
        isHorizontal ? classes.horizontal : ''
      } ${isVertical ? classes.vertical : ''}`}
    >
      {onClick ? (
        <button className={classes.button} onClick={() => onClick(item.id)}>
          {innerContent}
        </button>
      ) : (
        <OutboundLink
          className={classes.link}
          href={item.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {innerContent}
        </OutboundLink>
      )}
    </li>
  );
};

export default ImageItem;
