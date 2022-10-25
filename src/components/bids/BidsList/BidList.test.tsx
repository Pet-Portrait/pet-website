import { render, screen } from '@testing-library/react';
import React from 'react';

import { mockedBidList } from '../mocks';
import BidsList from './BidsList';

describe('ArtistList', () => {
  test('should render list of artists', () => {
    render(<BidsList bids={mockedBidList} />);

    mockedBidList.forEach((bid) => {
      expect(screen.getByText(bid.title)).toBeInTheDocument();
    });
  });
});
