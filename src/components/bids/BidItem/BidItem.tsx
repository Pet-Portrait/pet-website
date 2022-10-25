import React from 'react';
import { Bid } from 'types/bid';

interface Props {
  bid: Bid;
}

const BidItem = ({ bid }: Props) => (
  <li>
    <a href={bid.url} rel="noopener noreferrer" target="_blank">
      <h2>{bid.title}</h2>
      <h3>{bid.artist}</h3>
      {bid.images.map((image, index) => (
        <img key={image} alt={`Praca ${bid.artist} "${bid.title}" ${index + 1}`} src={image} />
      ))}
      <p>{bid.format}</p>
      <p>{bid.type}</p>
    </a>
  </li>
);

export default BidItem;
