import { ImageDataLike } from 'gatsby-plugin-image';

interface RawBid {
  title: string;
  artist: string;
  type: string;
  url: string;
  format: string;
  image: ImageDataLike;
  secondRound: boolean;
}

export interface Bid extends RawBid {
  id: string;
}
