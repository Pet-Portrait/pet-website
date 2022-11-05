import { graphql } from 'gatsby';
// eslint-disable-next-line import/named
import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface HeroImageData {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
}

export const heroImageQuery = graphql`
  fragment HeroImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED)
    }
  }
`;
