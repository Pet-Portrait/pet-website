import { ImageDataLike } from 'gatsby-plugin-image';

interface RawBid {
  title: string;
  artist: string;
  type: string;
  url: string;
  format: string;
  images: { image: ImageDataLike }[];
}

export interface Bid extends RawBid {
  id: string;
}
