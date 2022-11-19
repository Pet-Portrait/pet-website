import React, { FC } from 'react';

import BidsList from 'components/bids/BidsList/BidsList';
import HeroImage from 'components/bids/HeroImage/HeroImage';
import Layout from 'components/Layout/Layout';
import { Artist } from 'types/artist';
import { Bid } from 'types/bid';

interface Props {
  artists: Artist[];
}

const Artists: FC<Props> = ({ artists }) => {
  const mappedArtists: Bid[] = artists.map((artist) => ({
    ...artist,
    artist: artist.name,
    image: artist.avatar,
    url: '',
    id: artist.id,
    format: '',
    title: '',
    type: '',
  }));

  return (
    <Layout>
      <HeroImage />
      <BidsList bids={mappedArtists} isArtistsPage />
    </Layout>
  );
};

export default Artists;
