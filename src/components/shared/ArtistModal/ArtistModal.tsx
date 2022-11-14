import React, { FC } from 'react';
import Modal from 'react-modal';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import sanitizeHtml from 'sanitize-html';

import { Artist } from 'types/artist';
import filterNullishImages from 'utils/filterNullishImages';

import './modal.scss';
import * as classes from './ArtistModal.module.scss';

interface Props extends Modal.Props {
  artist: Artist;
  setIsOpen: (isOpen: boolean) => void;
}

Modal.setAppElement('#___gatsby');

const ArtistModal: FC<Props> = ({ artist, isOpen, setIsOpen, ...props }) => {
  const avatar = getImage(artist.avatar);
  const images = filterNullishImages(artist.images.map((image) => getImage(image.image)));

  const handleClose = () => setIsOpen(false);

  return (
    <Modal
      closeTimeoutMS={400}
      isOpen={isOpen}
      {...props}
      className={classes.modal}
      overlayClassName={classes.overlay}
    >
      <button onClick={handleClose} type="button">
        X
      </button>
      <h2>{artist.name}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(artist.description) }}
        data-testid="artist-item-description"
      />
      {avatar && <GatsbyImage alt={artist.name} className={classes.avatar} image={avatar} />}

      {images.map((image, index) => (
        <GatsbyImage
          key={index}
          alt={`Praca ${artist.name} ${index + 1}`}
          className={classes.image}
          image={image}
        />
      ))}
      {artist.facebook && <a href={artist.facebook}>Facebook</a>}
      {artist.instagram && <a href={artist.instagram}>Instagram</a>}
      {artist.behance && <a href={artist.behance}>Behance</a>}
      {artist.web && <a href={artist.web}>Web</a>}
    </Modal>
  );
};

export default ArtistModal;
