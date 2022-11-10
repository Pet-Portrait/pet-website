import React, { FC } from 'react';

import Layout from 'components/Layout/Layout';
import { FeaturedBid } from 'types/bid';

import FeaturedBids from './FeaturedBids/FeaturedBids';
import HeroImage from './HeroImage/HeroImage';

interface Props {
  bids: FeaturedBid[];
}

const Homepage: FC<Props> = ({ bids }) => (
  <Layout>
    <HeroImage />
    <FeaturedBids bids={bids} />
  </Layout>
);

export default Homepage;
