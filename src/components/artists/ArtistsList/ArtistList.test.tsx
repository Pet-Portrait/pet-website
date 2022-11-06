import React from 'react';
import { render, screen } from '@testing-library/react';

import ArtistsList from './ArtistsList';

import { mockedArtistList } from '../mocks';

describe('ArtistList', () => {
  test('should render list of artists', () => {
    render(<ArtistsList artists={mockedArtistList} />);

    mockedArtistList.forEach((artist) => {
      expect(screen.getByText(artist.name)).toBeInTheDocument();
    });
  });
});
