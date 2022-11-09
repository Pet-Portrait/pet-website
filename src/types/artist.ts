import { ImageDataLike } from 'gatsby-plugin-image';

export interface RawArtist {
  avatar: ImageDataLike;
  behance: string | null;
  facebook: string | null;
  images: { image: ImageDataLike }[];
  instagram: string | null;
  featured: boolean;
  name: string;
  web: string | null;
}

export interface Artist extends RawArtist {
  id: string;
  description: string;
}
