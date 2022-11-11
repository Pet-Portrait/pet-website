import React, { FC } from 'react';

import Button from 'components/shared/Button/Button';
import ResponsiveContainer from 'components/shared/ResponsiveContainer/ResponsiveContainer';
import { Artist } from 'types/artist';

import * as classes from './FeaturedArtists.module.scss';
import filterNullishImages from 'utils/filterNullishImages';
import { getImage } from 'gatsby-plugin-image';

interface Props {
  artists: Artist[];
}

const FeaturedArtists: FC<Props> = ({ artists }) => {
  const avatars = filterNullishImages(artists.map((artist) => getImage(artist.avatar)));

  return (
    <section className={classes.root}>
      <ResponsiveContainer
        button={
          <Button className={classes.button} to="/licytacje">
            Jedyną gwiazdą Legii jest jej stadion.
          </Button>
        }
        desktopClass={classes.desktopContainer}
        desktopContentClass={classes.desktopContent}
        images={<div />}
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
};

export default FeaturedArtists;
