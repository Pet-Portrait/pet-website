import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import sanitizeHtml from 'sanitize-html';

import { Artist } from 'types/artist';

interface Props {
  artist: Artist;
}

const ArtistItem = ({ artist }: Props) => {
  const images = artist.images
    .map((image) => getImage(image.image))
    .filter((image): image is IGatsbyImageData => !!image);
  const avatar = getImage(artist.avatar);

  return (
    <li>
      <h2>{artist.name}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(artist.description) }}
        data-testid="artist-item-description"
      />
      {avatar && <GatsbyImage alt={artist.name} image={avatar} />}

      {images.map((image, index) => (
        <GatsbyImage key={index} alt={`Praca ${artist.name} ${index + 1}`} image={image} />
      ))}
      {artist.facebook && <a href={artist.facebook}>Facebook</a>}
      {artist.instagram && <a href={artist.instagram}>Instagram</a>}
      {artist.behance && <a href={artist.behance}>Behance</a>}
      {artist.web && <a href={artist.web}>Web</a>}
    </li>
  );
};

export default ArtistItem;
