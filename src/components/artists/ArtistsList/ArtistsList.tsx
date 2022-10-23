import ArtistItem from 'components/artists/ArtistItem/ArtistItem';
import React from 'react';
import { Artist } from 'types/artist';

interface Props {
  artists: Artist[];
}

const ArtistsList = ({ artists }: Props) => (
  <ul>
    {artists.map((artist) => (
      <ArtistItem key={artist.id} artist={artist} />
    ))}
  </ul>
);

export default ArtistsList;
