import React from 'react';

import BidItem from 'components/bids/BidItem/BidItem';
import { Bid } from 'types/bid';

import InfoTile from '../InfoTile/InfoTile';

import * as classes from './BidsList.module.scss';

interface Props {
  bids: Bid[];
}

const BidsList = ({ bids }: Props) => (
  <div className={classes.root}>
    <ul className={classes.list}>
      {bids.map((bid) => (
        <BidItem key={bid.id} bid={bid} />
      ))}
      <InfoTile />
    </ul>
  </div>
);

export default BidsList;
