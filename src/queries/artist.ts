import { graphql } from 'gatsby';
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

export interface ArtistQuery {
  id: string;
  html: string;
  frontmatter: RawArtist;
}

export const artistQuery = graphql`
  fragment Artist on MarkdownRemark {
    frontmatter {
      images {
        image {
          childImageSharp {
            # TODO: For further investigation. Quick fix to not fetch huge images
            gatsbyImageData(placeholder: BLURRED, width: 400)
          }
        }
      }
      name
      avatar {
        childImageSharp {
          # TODO: For further investigation. Quick fix to not fetch huge images
          gatsbyImageData(placeholder: BLURRED, width: 700)
        }
      }
      featured
      facebook
      instagram
      behance
      web
    }
    html
    id
  }
`;
