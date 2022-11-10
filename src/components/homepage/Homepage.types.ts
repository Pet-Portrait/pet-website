import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface FeaturedImage {
  alt: string;
  image: IGatsbyImageData;
  url: string;
}
