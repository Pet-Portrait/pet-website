import React, { FC } from 'react';
import { BidImages } from 'queries/bid';

import Button from 'components/shared/Button/Button';
import ResponsiveContainer from 'components/shared/ResponsiveContainer/ResponsiveContainer';

import FeaturedBidsImages from './FeaturedBidsImages';

import blobDesktop from '../../../images/backgrounds/background-bids.svg';
import blobMobile from '../../../images/backgrounds/background-bids-mobile.svg';

import * as classes from './FeaturedBids.module.scss';

interface Props {
  bids: BidImages;
}

const FeaturedBids: FC<Props> = ({ bids }) => (
  <section className={classes.root}>
    <img alt="" className={classes.backgroundMobile} src={blobMobile} />
    <img alt="" className={classes.backgroundDesktop} src={blobDesktop} />
    <ResponsiveContainer
      button={
        <Button className={classes.button} to="/licytacje">
          Zobacz wszystkie licytacje
        </Button>
      }
      desktopClass={classes.desktopContainer}
      desktopContentClass={classes.desktopContent}
      images={<FeaturedBidsImages bids={bids} />}
      text={
        <>
          <h2 className={classes.heading}>Licytacje</h2>
          <p className={classes.description}>
            XXX - tyle dzieł polskich Artystów i Artystek znajdziesz na tegorocznym Pet Portrait.
            Grafiki, ilustracje, obrazy, hafty, ceramiki - psygarnij coś dla siebie!
          </p>
        </>
      }
    />
  </section>
);

export default FeaturedBids;
