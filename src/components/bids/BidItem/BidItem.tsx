import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Bid } from 'types/bid';
import filterNullishImages from 'utils/filterNullishImages';

interface Props {
  bid: Bid;
}

const BidItem = ({ bid }: Props) => {
  const images = filterNullishImages(bid.images.map((image) => getImage(image.image)));

  return (
    <li>
      <a href={bid.url} rel="noopener noreferrer" target="_blank">
        <h2>{bid.title}</h2>
        <h3>{bid.artist}</h3>
        {images.map((image, index) => (
          <GatsbyImage
            key={index}
            alt={`Praca ${bid.artist} "${bid.title}" ${index + 1}`}
            image={image}
          />
        ))}
        <p>{bid.format}</p>
        <p>{bid.type}</p>
      </a>
    </li>
  );
};

export default BidItem;
