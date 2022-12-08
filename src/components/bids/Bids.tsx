import React, { FC } from 'react';

import Layout from 'components/Layout/Layout';
import { Bid } from 'types/bid';

import AllBidsText from './AllBidsText/AllBidsText';
import BidsList from './BidsList/BidsList';
import ContributionInfo from './ContributionInfo/ContributionInfo';
import FinishedText from './FinishedText/FinishedText';
import HeroImage from './HeroImage/HeroImage';
import SecondRoundText from './SecondRoundText/SecondRoundText';

interface Props {
  bids: Bid[];
}

const Bids: FC<Props> = ({ bids }) => {
  const secondRoundBids = bids.filter((bid) => bid.secondRound);
  const finishedBids = bids.filter((bid) => !bid.secondRound);

  return (
    <Layout>
      <HeroImage />
      <SecondRoundText />
      <BidsList bids={secondRoundBids} />
      <FinishedText />
      <BidsList bids={finishedBids} />
      <AllBidsText />
      <ContributionInfo />
    </Layout>
  );
};

export default Bids;
