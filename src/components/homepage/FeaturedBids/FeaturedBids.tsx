import React, { FC, useMemo } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Button from 'components/shared/Button/Button';
import { FeaturedBid } from 'types/bid';
import filterNullishImages from 'utils/filterNullishImages';

import * as classes from './FeaturedBids.module.scss';

interface Props {
  bids: FeaturedBid[];
}

const FeaturedBids: FC<Props> = ({ bids }) => {
  const images = useMemo(
    () =>
      bids.map((bid) => ({
        alt: bid.title,
        image: filterNullishImages(bid.images.map((image) => getImage(image.image)))[0],
        url: bid.url,
      })),
    [bids],
  );

  return (
    <section className={classes.root}>
      <h2 className={classes.heading}>Licytacje</h2>
      <p className={classes.description}>
        Piłka nożna to taka gra, w której 22 mężczyzn biega za piłką, a na końcu i tak wygrywają
        Niemcy.Piłka nożna to taka gra, w której 22 mężczyzn biega za piłką, a na końcu i tak
        wygrywają Niemcy.
      </p>
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
      <Button className={classes.button} to="/licytacje">
        Jedyną gwiazdą Legii jest jej stadion.
      </Button>
    </section>
  );
};

export default FeaturedBids;
