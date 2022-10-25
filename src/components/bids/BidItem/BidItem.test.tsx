import { render, screen } from '@testing-library/react';
import React from 'react';

import { mockedBid } from '../mocks';
import BidItem from './BidItem';

describe('BidItem', () => {
  test('should display artist data', () => {
    render(<BidItem bid={mockedBid} />);

    expect(screen.getByText(mockedBid.title)).toBeInTheDocument();
    expect(screen.getByText(mockedBid.artist)).toBeInTheDocument();
    expect(screen.getByText(mockedBid.format)).toBeInTheDocument();
    expect(screen.getByText(mockedBid.type)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', mockedBid.url);
    mockedBid.images.forEach((image, index) => {
      expect(
        screen.getByAltText(`Praca ${mockedBid.artist} "${mockedBid.title}" ${index + 1}`),
      ).toHaveAttribute('src', image);
    });
  });
});
