import { IGatsbyImageData } from 'gatsby-plugin-image';

const filterNullishImages = (images: (IGatsbyImageData | undefined)[]) =>
  images.filter((image): image is IGatsbyImageData => !!image);

export default filterNullishImages;
