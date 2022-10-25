interface RawBid {
  title: string;
  artist: string;
  type: string;
  url: string;
  format: string;
  images: string[];
}

export interface Bid extends RawBid {
  id: string;
}
