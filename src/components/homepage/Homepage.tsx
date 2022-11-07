import React, { FC } from 'react';

import Layout from 'components/Layout/Layout';

import HeroImage from './HeroImage/HeroImage';

const Homepage: FC = () => (
  <Layout>
    <HeroImage
      artistName="Klaudia Polak"
      image="../../../images/hero-image.png"
      imageTitle="Klaudia Polak - Bugs"
    />
  </Layout>
);

export default Homepage;
