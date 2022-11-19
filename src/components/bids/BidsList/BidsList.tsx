import React, { useState } from 'react';

import BidItem from 'components/bids/BidItem/BidItem';
import ArtistModal from 'components/shared/ArtistModal/ArtistModal';
import { Artist } from 'types/artist';
import { Bid } from 'types/bid';

import InfoTile from '../InfoTile/InfoTile';

import * as classes from './BidsList.module.scss';

interface Props {
  bids: Bid[];
  isArtistsPage?: boolean;
}

const BidsList = ({ bids, isArtistsPage }: Props) => {
  const [artistIdInModal, setArtistIdInModal] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const artistInModal = bids.find((artist) => artist.id === artistIdInModal);

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
    <div className={classes.root}>
      <ul className={classes.list}>
        {bids.map((bid) => (
          <BidItem
            key={bid.id}
            bid={bid}
            isArtistsPage={isArtistsPage}
            onOpenModal={handleOpenModal}
          />
        ))}
        {!isArtistsPage && <InfoTile />}
      </ul>
      {artistInModal && (
        <ArtistModal
          artist={artistInModal as unknown as Artist}
          isOpen={isModalOpen}
          onAfterClose={handleResetModalArtist}
          onRequestClose={handleCloseModal}
          setIsOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default BidsList;
