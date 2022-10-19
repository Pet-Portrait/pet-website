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
      {bid.images.map((image) => (
        <img key={image} alt="" src={image} />
      ))}
      <p>{bid.format}</p>
      <p>{bid.type}</p>
    </a>
  </li>
);

export default BidItem;
