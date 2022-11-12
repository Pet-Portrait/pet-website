import React, { FC, useState } from 'react';

import ArtistModal from 'components/shared/ArtistModal/ArtistModal';
import Button from 'components/shared/Button/Button';
import ResponsiveContainer from 'components/shared/ResponsiveContainer/ResponsiveContainer';
import { Artist } from 'types/artist';

import ArtistsGrid from './ArtistsGrid/ArtistsGrid';
import ArtistsSlider from './ArtistsSlider/ArtistsSlider';

import * as classes from './FeaturedArtists.module.scss';

interface Props {
  artists: Artist[];
}

const FeaturedArtists: FC<Props> = ({ artists }) => {
  const [artistIdInModal, setArtistIdInModal] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleResetModalArtist = () => {
    setArtistIdInModal('');
  };

  const handleOpenModal = (id: string) => {
    setArtistIdInModal(id);
    setIsModalOpen(true);
  };

  const artistInModal = artists.find((artist) => artist.id === artistIdInModal);
  return (
    <section className={classes.root}>
      <ResponsiveContainer
        button={
          <Button className={classes.button} to="/artysci">
            Truskawka na torcie
          </Button>
        }
        desktopClass={classes.desktopContainer}
        images={
          <>
            <ArtistsSlider artists={artists} onSlideClick={handleOpenModal} />
            <ArtistsGrid artists={artists} onArtistClick={handleOpenModal} />
          </>
        }
        text={
          <div className={classes.text}>
            <h2 className={classes.heading}>Artyści</h2>
            <p className={classes.description}>
              Piłka nożna to prosta gra. Dwudziestu dwóch mężczyzn ściga piłkę przez 90 minut, a na
              końcu Niemcy już nie zawsze wygrywają. Poprzednia wersja ogranicza się tylko do
              historii.
            </p>
          </div>
        }
      />
      {artistInModal && (
        <ArtistModal
          artist={artistInModal}
          isOpen={isModalOpen}
          onAfterClose={handleResetModalArtist}
          onRequestClose={handleCloseModal}
          setIsOpen={setIsModalOpen}
        />
      )}
    </section>
  );
};

export default FeaturedArtists;
