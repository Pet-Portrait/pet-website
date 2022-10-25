import { render, screen } from '@testing-library/react';
import React from 'react';

import { mockedArtistList } from '../mocks';
import ArtistsList from './ArtistsList';

describe('ArtistList', () => {
  test('should render list of artists', () => {
    render(<ArtistsList artists={mockedArtistList} />);

    mockedArtistList.forEach((artist) => {
      expect(screen.getByText(artist.name)).toBeInTheDocument();
    });
  });
});
