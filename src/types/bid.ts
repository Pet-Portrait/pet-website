interface RawBid {
  name: string;
  artist: string;
  type: string;
  url: string;
  format: string;
  featured: boolean;
  images: string[];
}

export interface Bid extends RawBid {
  id: string;
}
