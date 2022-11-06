import React from 'react';

import BidItem from 'components/bids/BidItem/BidItem';
import { Bid } from 'types/bid';

interface Props {
  bids: Bid[];
}

const BidsList = ({ bids }: Props) => (
  <ul>
    {bids.map((bid) => (
      <BidItem key={bid.id} bid={bid} />
    ))}
  </ul>
);

export default BidsList;
