import React from 'react';
import { render, screen, within } from '@testing-library/react';

import ArtistItem from './ArtistItem';

import { mockedArtist } from '../mocks';

// TODO: Fix mocked images
describe.skip('ArtistItem', () => {
  test('should display artist data', () => {
    render(<ArtistItem artist={mockedArtist} />);

    expect(screen.getByText(mockedArtist.name)).toBeInTheDocument();
    expect(screen.getByAltText<HTMLImageElement>(mockedArtist.name).src).toBe(mockedArtist.avatar);
    expect(screen.getByTestId('artist-item-description').innerHTML).toBe(mockedArtist.description);
    expect(screen.getByText('Facebook')).toHaveAttribute('href', mockedArtist.facebook);
    expect(screen.getByText('Behance')).toHaveAttribute('href', mockedArtist.behance);
    expect(screen.getByText('Web')).toHaveAttribute('href', mockedArtist.web);
    expect(screen.getByText('Instagram')).toHaveAttribute('href', mockedArtist.instagram);
    mockedArtist.images.forEach((image, index) => {
      expect(screen.getByAltText(`Praca ${mockedArtist.name} ${index + 1}`)).toHaveAttribute(
        'src',
        image,
      );
    });
  });
  test('should render description as html', () => {
    render(<ArtistItem artist={mockedArtist} />);

    expect(
      within(screen.getByTestId('artist-item-description')).getByRole('heading'),
    ).toBeInTheDocument();
  });
  test('should not render social link if not provided', () => {
    render(<ArtistItem artist={{ ...mockedArtist, facebook: null }} />);

    expect(screen.queryByText('Facebook')).not.toBeInTheDocument();
  });
});
