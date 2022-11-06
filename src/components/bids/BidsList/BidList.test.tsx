import React from 'react';
import { render, screen } from '@testing-library/react';

import BidsList from './BidsList';

import { mockedBidList } from '../mocks';

describe('ArtistList', () => {
  test('should render list of artists', () => {
    render(<BidsList bids={mockedBidList} />);

    mockedBidList.forEach((bid) => {
      expect(screen.getByText(bid.title)).toBeInTheDocument();
    });
  });
});
