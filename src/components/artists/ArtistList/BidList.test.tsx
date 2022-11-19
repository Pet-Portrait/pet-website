import React from 'react';
import { render, screen } from '@testing-library/react';

import BidsList from './ArtistList';

import { mockedBidList } from '../mocks';

describe('ArtistList', () => {
  test.skip('should render list of artists', () => {
    render(<BidsList bids={mockedBidList} />);

    mockedBidList.forEach((bid) => {
      expect(screen.getByText(bid.title)).toBeInTheDocument();
    });
  });
});
