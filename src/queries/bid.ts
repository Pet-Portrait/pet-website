import { graphql } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';

export interface BasicBid {
  image: ImageDataLike;
  title: string;
  url: string;
}

export interface BasicBidQuery {
  frontmatter: BasicBid;
}

export const basicBidQuery = graphql`
  fragment BasicBid on MarkdownRemark {
    frontmatter {
      image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      title
      url
    }
  }
`;
