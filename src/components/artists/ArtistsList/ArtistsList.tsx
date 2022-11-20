import React, { useState } from 'react';

import ArtistModal from 'components/shared/ArtistModal/ArtistModal';
import ImagesGrid from 'components/shared/ImagesGrid/ImagesGrid';
import { Artist } from 'types/artist';
import { sendArtistModalClick } from 'utils/analytics';

interface Props {
  artists: Artist[];
}

const ArtistsList = ({ artists }: Props) => {
  const [artistIdInModal, setArtistIdInModal] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const findArtistById = (id: string) => artists.find((artist) => artist.id === id);
  const artistInModal = findArtistById(artistIdInModal);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleResetModalArtist = () => {
    setArtistIdInModal('');
  };

  const handleOpenModal = (id: string) => {
    setArtistIdInModal(id);
    setIsModalOpen(true);

    const artist = findArtistById(id);
    if (artist) {
      sendArtistModalClick(artist.name);
    }
  };

  const imageItems = artists.map((artist) => ({
    id: artist.id,
    image: artist.avatar,
    heading: artist.name,
    alt: artist.name,
  }));

  return (
    <>
      <ImagesGrid items={imageItems} onItemClick={handleOpenModal} />
      {artistInModal && (
        <ArtistModal
          artist={artistInModal}
          isOpen={isModalOpen}
          onAfterClose={handleResetModalArtist}
          onRequestClose={handleCloseModal}
          setIsOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default ArtistsList;
