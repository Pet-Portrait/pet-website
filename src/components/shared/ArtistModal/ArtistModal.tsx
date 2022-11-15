import React, { FC } from 'react';
import Modal from 'react-modal';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import sanitizeHtml from 'sanitize-html';

import BehanceIcon from 'components/icons/BehanceIcon';
import FacebookIcon from 'components/icons/FacebookIcon';
import InstagramIcon from 'components/icons/InstagramIcon';
import WebIcon from 'components/icons/WebIcon';
import { Artist } from 'types/artist';
import filterNullishImages from 'utils/filterNullishImages';

import closeIcon from '../../../images/close-icon.svg';
import Button from '../Button/Button';

import './modal.scss';
import * as classes from './ArtistModal.module.scss';

interface Props extends Modal.Props {
  artist: Artist;
  setIsOpen: (isOpen: boolean) => void;
}

Modal.setAppElement('#___gatsby');

const ArtistModal: FC<Props> = ({ artist, isOpen, setIsOpen, ...props }) => {
  const avatar = getImage(artist.avatar);
  const images = filterNullishImages(artist.images?.map((image) => getImage(image.image)) || []);

  const handleClose = () => setIsOpen(false);

  return (
    <Modal
      closeTimeoutMS={400}
      isOpen={isOpen}
      {...props}
      className={classes.modal}
      overlayClassName={classes.overlay}
    >
      <button className={classes.closeButton} onClick={handleClose} type="button">
        <img alt="" src={closeIcon} />
      </button>
      <div className={classes.content}>
        {avatar && <GatsbyImage alt={artist.name} className={classes.avatar} image={avatar} />}
        <h2 className={classes.heading}>{artist.name}</h2>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(artist.description) }}
        className={classes.description}
        data-testid="artist-item-description"
      />
      <div className={classes.images}>
        {images.map((image, index) => (
          <GatsbyImage
            key={index}
            alt={`Praca ${artist.name} ${index + 1}`}
            className={classes.image}
            image={image}
          />
        ))}
      </div>
      <div className={classes.socials}>
        {artist.facebook && (
          <a href={artist.facebook}>
            <FacebookIcon className={classes.socialIcon} />
          </a>
        )}
        {artist.instagram && (
          <a href={artist.instagram}>
            <InstagramIcon className={classes.socialIcon} />
          </a>
        )}
        {artist.behance && (
          <a href={artist.behance}>
            <BehanceIcon className={classes.socialIcon} />
          </a>
        )}
        {artist.web && (
          <a href={artist.web}>
            <WebIcon className={classes.socialIcon} />
          </a>
        )}
      </div>
      <Button className={classes.button} onClick={handleClose}>
        Zamknij
      </Button>
    </Modal>
  );
};

export default ArtistModal;
