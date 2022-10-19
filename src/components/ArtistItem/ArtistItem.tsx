import React from 'react';
import sanitizeHtml from 'sanitize-html';
import { Artist } from 'types/artist';

interface Props {
  artist: Artist;
}

const ArtistItem = ({ artist }: Props) => (
  <li>
    <h2>{artist.name}</h2>
    <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(artist.description) }}></p>
    <img alt={artist.name} src={artist.avatar} />
    {artist.images.map((image) => (
      <img key={image} alt="" src={image} />
    ))}
    {artist.facebook && <a href={artist.facebook}>Facebook</a>}
    {artist.instagram && <a href={artist.instagram}>Instagram</a>}
    {artist.behance && <a href={artist.behance}>Behance</a>}
    {artist.web && <a href={artist.web}>Web</a>}
  </li>
);

export default ArtistItem;
