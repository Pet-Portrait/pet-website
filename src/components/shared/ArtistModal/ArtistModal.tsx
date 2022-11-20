import React, { FC } from 'react';
import Modal from 'react-modal';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
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
      <button
        aria-label="Zamknij informacje o artyście"
        className={classes.closeButton}
        onClick={handleClose}
        type="button"
      >
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
          <OutboundLink
            aria-label="Facebook"
            href={artist.facebook}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FacebookIcon className={classes.socialIcon} />
          </OutboundLink>
        )}
        {artist.instagram && (
          <OutboundLink
            aria-label="Instagram"
            href={artist.instagram}
            rel="noopener noreferrer"
            target="_blank"
          >
            <InstagramIcon className={classes.socialIcon} />
          </OutboundLink>
        )}
        {artist.behance && (
          <OutboundLink
            aria-label="Behanace"
            href={artist.behance}
            rel="noopener noreferrer"
            target="_blank"
          >
            <BehanceIcon className={classes.socialIcon} />
          </OutboundLink>
        )}
        {artist.web && (
          <OutboundLink
            aria-label="Strona internetowa"
            href={artist.web}
            rel="noopener noreferrer"
            target="_blank"
          >
            <WebIcon className={classes.socialIcon} />
          </OutboundLink>
        )}
      </div>
      <Button className={classes.button} onClick={handleClose}>
        Zamknij
      </Button>
    </Modal>
  );
};

export default ArtistModal;
