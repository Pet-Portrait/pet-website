import React from 'react';

import ImagesGrid from 'components/shared/ImagesGrid/ImagesGrid';
import { Bid } from 'types/bid';

import InfoTile from '../InfoTile/InfoTile';

interface Props {
  bids: Bid[];
}

const BidsList = ({ bids }: Props) => {
  const imageItems = bids.map((bid) => ({
    id: bid.id,
    image: bid.image,
    subheading: bid.title,
    heading: bid.artist,
    url: bid.url,
    alt: `Praca ${bid.artist} "${bid.title}"`,
  }));

  return <ImagesGrid additionalTiles={<InfoTile />} items={imageItems} />;
};

export default BidsList;
