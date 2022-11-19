import { ImageDataLike } from 'gatsby-plugin-image';

export interface ImageTile {
  url?: string;
  heading: string;
  subheading?: string;
  image: ImageDataLike;
  alt: string;
  id: string;
}
