import React, { FC, useMemo } from 'react';
import { getImage } from 'gatsby-plugin-image';
import { BasicBid } from 'queries/bid';

import Button from 'components/shared/Button/Button';
import ResponsiveContainer from 'components/shared/ResponsiveContainer/ResponsiveContainer';

import FeaturedBidsImages from './FeaturedBidsImages';

import * as classes from './FeaturedBids.module.scss';

interface Props {
  bids: BasicBid[];
}

const FeaturedBids: FC<Props> = ({ bids }) => {
  const images = useMemo(
    () =>
      bids.map((bid) => ({
        alt: bid.title,
        image: getImage(bid.image),
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
        desktopClass={classes.desktopContainer}
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
