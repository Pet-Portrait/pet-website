import { Bid } from 'types/bid';

export const mockedBid: Bid = {
  id: '1',
  title: 'Bid 1',
  artist: 'Artist 1',
  format: '40x20',
  images: ['https://picsum.photos/200/300', 'https://picsum.photos/300/300'],
  type: 'painting',
  url: 'https://charytatywni.allegro.pl/',
};

export const mockedBid2: Bid = {
  id: '2',
  title: 'Bid 2',
  artist: 'Artist 2',
  format: '80x80',
  images: ['https://picsum.photos/200/300', 'https://picsum.photos/300/300'],
  type: 'painting',
  url: 'https://charytatywni.allegro.pl/',
};

export const mockedBidList: Bid[] = [mockedBid, mockedBid2];
