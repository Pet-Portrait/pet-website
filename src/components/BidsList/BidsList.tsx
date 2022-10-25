import BidItem from 'components/BidItem/BidItem';
import React from 'react';
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
