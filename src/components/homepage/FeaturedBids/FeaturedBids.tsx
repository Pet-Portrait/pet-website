import React, { FC, useMemo } from 'react';
import { getImage } from 'gatsby-plugin-image';

import Button from 'components/shared/Button/Button';
import ResponsiveContainer from 'components/shared/ResponsiveContainer/ResponsiveContainer';
import { FeaturedBid } from 'types/bid';
import filterNullishImages from 'utils/filterNullishImages';

import FeaturedBidsImages from './FeaturedBidsImages';

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
      <ResponsiveContainer
        button={
          <Button className={classes.button} to="/licytacje">
            Jedyną gwiazdą Legii jest jej stadion.
          </Button>
        }
        desktopContentClass={classes.desktopContent}
        images={<FeaturedBidsImages images={images} />}
        text={
          <>
            <h2 className={classes.heading}>Licytacje</h2>
            <p className={classes.description}>
              Piłka nożna to taka gra, w której 22 mężczyzn biega za piłką, a na końcu i tak
              wygrywają Niemcy.Piłka nożna to taka gra, w której 22 mężczyzn biega za piłką, a na
              końcu i tak wygrywają Niemcy.
            </p>
          </>
        }
      />
    </section>
  );
};

export default FeaturedBids;
