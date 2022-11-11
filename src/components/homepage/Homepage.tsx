import React, { FC } from 'react';

import Layout from 'components/Layout/Layout';
import { Artist } from 'types/artist';
import { FeaturedBid } from 'types/bid';

import FeaturedArtists from './FeaturedArtists/FeaturedArtists';
import FeaturedBids from './FeaturedBids/FeaturedBids';
import HeroImage from './HeroImage/HeroImage';

interface Props {
  bids: FeaturedBid[];
  artists: Artist[];
}

const Homepage: FC<Props> = ({ bids, artists }) => (
  <Layout>
    <HeroImage />
    <FeaturedBids bids={bids} />
    <FeaturedArtists artists={artists} />
  </Layout>
);

export default Homepage;
