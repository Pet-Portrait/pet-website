import React, { FC } from 'react';

import Layout from 'components/Layout/Layout';
import { Artist } from 'types/artist';

import ArtistsList from './ArtistsList/ArtistsList';
import HeroImage from './HeroImage/HeroImage';

interface Props {
  artists: Artist[];
}

const Artists: FC<Props> = ({ artists }) => (
  <Layout>
    <HeroImage />
    <ArtistsList artists={artists} />
  </Layout>
);

export default Artists;
