import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Bid } from 'types/bid';

import * as classes from './ArtistItem.module.scss';

interface Props {
  bid: Bid;
  onOpenModal?: (id: string) => void;
  isArtistsPage?: boolean;
}

const BidItem = ({ bid, onOpenModal, isArtistsPage }: Props) => {
  const image = getImage(bid.image);
  const imageRatio = image ? image.height / image.width : 0;
  const isSquare = imageRatio > 0.9 && imageRatio < 1.1;
  const isVertical = imageRatio >= 1.1;
  const isHorizontal = imageRatio <= 0.9;

  return (
    <li
      className={`${classes.root} ${isSquare ? classes.square : ''} ${
        isHorizontal ? classes.horizontal : ''
      } ${isVertical ? classes.vertical : ''}`}
    >
      {isArtistsPage ? (
        <button className={classes.artistButton} onClick={() => onOpenModal?.(bid.id)}>
          <figure className={classes.content}>
            {image && (
              <div className={classes.imageWrapper}>
                <GatsbyImage
                  alt={`Praca ${bid.artist} "${bid.title}"`}
                  className={classes.image}
                  image={image}
                />
              </div>
            )}
            <figcaption className={classes.caption}>
              <p className={classes.artist}>{bid.artist}</p>
              <p className={classes.title}>{bid.title}</p>
            </figcaption>
          </figure>
        </button>
      ) : (
        <OutboundLink href={bid.url} rel="noopener noreferrer" target="_blank">
          <figure className={classes.content}>
            {image && (
              <div className={classes.imageWrapper}>
                <GatsbyImage
                  alt={`Praca ${bid.artist} "${bid.title}"`}
                  className={classes.image}
                  image={image}
                />
              </div>
            )}
            <figcaption className={classes.caption}>
              <p className={classes.artist}>{bid.artist}</p>
              <p className={classes.title}>{bid.title}</p>
            </figcaption>
          </figure>
        </OutboundLink>
      )}
    </li>
  );
};

export default BidItem;
