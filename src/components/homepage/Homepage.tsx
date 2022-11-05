import Layout from 'components/Layout/Layout';
import React, { FC } from 'react';

import HeroImage from './HeroImage/HeroImage';
import { HeroImageData } from './HeroImage/queries';

interface Props {
  heroImages: HeroImageData[];
}
const Homepage: FC<Props> = ({ heroImages }) => {
  const randomImage = heroImages[Math.round(Math.random() * (heroImages.length - 1))];

  return (
    <Layout>
      <HeroImage image={randomImage} />
    </Layout>
  );
};

export default Homepage;
