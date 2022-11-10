import { ImageDataLike } from 'gatsby-plugin-image';

interface RawBid {
  title: string;
  artist: string;
  type: string;
  url: string;
  format: string;
  image: ImageDataLike;
}

export interface Bid extends RawBid {
  id: string;
}

export interface FeaturedBid {
  title: string;
  url: string;
  images: { image: ImageDataLike }[];
}
