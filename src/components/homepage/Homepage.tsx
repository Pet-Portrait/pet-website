import React, { FC } from 'react';
import { BasicBid } from 'queries/bid';

import Layout from 'components/Layout/Layout';
import { Artist } from 'types/artist';

import AboutUs from './AboutUs/AboutUs';
import AdoptionDogs from './AdoptionDogs/AdoptionDogs';
import FeaturedArtists from './FeaturedArtists/FeaturedArtists';
import FeaturedBids from './FeaturedBids/FeaturedBids';
import HeroImage from './HeroImage/HeroImage';

interface Props {
  bids: BasicBid[];
  artists: Artist[];
}

const Homepage: FC<Props> = ({ bids, artists }) => (
  <Layout>
    <HeroImage />
    <FeaturedBids bids={bids} />
    <FeaturedArtists artists={artists} />
    <AboutUs />
    <AdoptionDogs />
  </Layout>
);

export default Homepage;
