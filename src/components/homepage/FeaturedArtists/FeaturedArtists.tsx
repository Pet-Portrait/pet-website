import React, { FC } from 'react';

import Button from 'components/shared/Button/Button';
import ResponsiveContainer from 'components/shared/ResponsiveContainer/ResponsiveContainer';
import { Artist } from 'types/artist';

import ArtistsSlider from './ArtistsSlider/ArtistsSlider';

import * as classes from './FeaturedArtists.module.scss';

interface Props {
  artists: Artist[];
}

const FeaturedArtists: FC<Props> = ({ artists }) => (
  <section className={classes.root}>
    <ResponsiveContainer
      button={
        <Button className={classes.button} to="/artysci">
          Truskawka na torcie
        </Button>
      }
      images={<ArtistsSlider artists={artists} />}
      text={
        <>
          <h2 className={classes.heading}>Artyści</h2>
          <p className={classes.description}>
            Piłka nożna to prosta gra. Dwudziestu dwóch mężczyzn ściga piłkę przez 90 minut, a na
            końcu Niemcy już nie zawsze wygrywają. Poprzednia wersja ogranicza się tylko do
            historii.
          </p>
        </>
      }
    />
  </section>
);

export default FeaturedArtists;
