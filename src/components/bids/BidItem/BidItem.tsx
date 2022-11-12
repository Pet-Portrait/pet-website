import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Bid } from 'types/bid';

interface Props {
  bid: Bid;
}

const BidItem = ({ bid }: Props) => {
  const image = getImage(bid.image);

  return (
    <li>
      <a href={bid.url} rel="noopener noreferrer" target="_blank">
        <h2>{bid.title}</h2>
        <h3>{bid.artist}</h3>
        {image && <GatsbyImage alt={`Praca ${bid.artist} "${bid.title}"`} image={image} />}
        <p>{bid.format}</p>
        <p>{bid.type}</p>
      </a>
    </li>
  );
};

export default BidItem;
