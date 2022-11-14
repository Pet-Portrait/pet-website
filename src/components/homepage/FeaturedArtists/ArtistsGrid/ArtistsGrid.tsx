import React, { FC, useRef } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { Artist } from 'types/artist';

import * as classes from './ArtistsGrid.module.scss';

interface Props {
  artists: Artist[];
  onArtistClick: (id: string) => void;
}

const ArtistsGrid: FC<Props> = ({ artists, onArtistClick }) => {
  const containerRef = useRef(null);

  useIntersectionObserver(containerRef, ([entry]) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(classes.visible);
    }
  });

  const artistsList = artists.map((artist) => ({
    ...artist,
    image: getImage(artist.avatar),
  }));

  const handleClick = (artist: Artist) => () => {
    onArtistClick(artist.id);
  };

  return (
    <div ref={containerRef} className={classes.root}>
      {artistsList.map((artist) => (
        <button
          key={artist.id}
          className={classes.artist}
          onClick={handleClick(artist)}
          type="button"
        >
          {artist.image && (
            <GatsbyImage alt={artist.name} className={classes.image} image={artist.image} />
          )}
        </button>
      ))}
    </div>
  );
};

export default ArtistsGrid;
