import React, { FC } from 'react';

import Layout from 'components/Layout/Layout';
import { Bid } from 'types/bid';

import AllBidsText from './AllBidsText/AllBidsText';
import BidsList from './BidsList/BidsList';
import HeroImage from './HeroImage/HeroImage';

interface Props {
  bids: Bid[];
}

const Bids: FC<Props> = ({ bids }) => (
  <Layout>
    <HeroImage />
    <BidsList bids={bids} />
    <AllBidsText />
  </Layout>
);

export default Bids;
