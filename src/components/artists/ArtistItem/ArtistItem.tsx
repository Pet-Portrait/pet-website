import React from 'react';
import sanitizeHtml from 'sanitize-html';

import { Artist } from 'types/artist';

interface Props {
  artist: Artist;
}

const ArtistItem = ({ artist }: Props) => (
  <li>
    <h2>{artist.name}</h2>
    <div
      dangerouslySetInnerHTML={{ __html: sanitizeHtml(artist.description) }}
      data-testid="artist-item-description"
    />
    <img alt={artist.name} src={artist.avatar} />
    {artist.images.map((image, index) => (
      <img key={image} alt={`Praca ${artist.name} ${index + 1}`} src={image} />
    ))}
    {artist.facebook && <a href={artist.facebook}>Facebook</a>}
    {artist.instagram && <a href={artist.instagram}>Instagram</a>}
    {artist.behance && <a href={artist.behance}>Behance</a>}
    {artist.web && <a href={artist.web}>Web</a>}
  </li>
);

export default ArtistItem;
