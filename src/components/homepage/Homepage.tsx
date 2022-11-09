import React, { FC } from 'react';

import Layout from 'components/Layout/Layout';

import HeroImage from './HeroImage/HeroImage';

const Homepage: FC = () => (
  <Layout>
    <HeroImage />
    {/* Simulated section */}
    <div style={{ height: '100vh' }} />
  </Layout>
);

export default Homepage;
