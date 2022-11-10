import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import sanitizeHtml from 'sanitize-html';

import { Artist } from 'types/artist';
import filterNullishImages from 'utils/filterNullishImages';

interface Props {
  artist: Artist;
}

const ArtistItem = ({ artist }: Props) => {
  const images = filterNullishImages(artist.images.map((image) => getImage(image.image)));
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
