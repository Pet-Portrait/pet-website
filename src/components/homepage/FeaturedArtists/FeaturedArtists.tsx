import React, { FC, useState } from 'react';

import ArtistModal from 'components/shared/ArtistModal/ArtistModal';
import Button from 'components/shared/Button/Button';
import ResponsiveContainer from 'components/shared/ResponsiveContainer/ResponsiveContainer';
import { Artist } from 'types/artist';

import ArtistsGrid from './ArtistsGrid/ArtistsGrid';
import ArtistsSlider from './ArtistsSlider/ArtistsSlider';

import blobDesktop from '../../../images/backgrounds/background-artists.svg';
import blobMobile from '../../../images/backgrounds/background-artists-mobile.svg';

import * as classes from './FeaturedArtists.module.scss';

interface Props {
  artists: Artist[];
}

const FeaturedArtists: FC<Props> = ({ artists }) => {
  const [artistIdInModal, setArtistIdInModal] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const artistInModal = artists.find((artist) => artist.id === artistIdInModal);

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

  return (
    <section className={classes.root}>
      <img alt="" className={classes.backgroundMobile} src={blobMobile} />
      <img alt="" className={classes.backgroundDesktop} src={blobDesktop} />
      <ResponsiveContainer
        button={
          <Button className={classes.button} to="/artysci">
            Sprawdź wszystkich artystów
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
            <h2 className={classes.heading}>Artystki i Artyści</h2>
            <p className={classes.description}>
              Poznajcie naszych tegorocznych Artystów i Artystki - XXX osób o wielkich sercach i
              prawdziwym morzu talentu.
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
