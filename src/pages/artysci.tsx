import React from 'react';
import { graphql, PageProps } from 'gatsby';

import ArtistsList from 'components/artists/ArtistsList/ArtistsList';
import { Artist } from 'types/artist';
import { WithNodes } from 'types/utils';

interface Query {
  allMarkdownRemark: WithNodes<
    {
      id: string;
      html: string;
      frontmatter: Artist;
    }[]
  >;
}

const ArtistsPage = ({ data }: PageProps<Query>) => {
  const artists = data.allMarkdownRemark.nodes.map((node) => ({
    ...node.frontmatter,
    description: node.html,
    id: node.id,
  }));

  return <ArtistsList artists={artists} />;
};

export const pageQuery = graphql`
  query ArtistsPage {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/artists/" } }) {
      nodes {
        id
        html
        frontmatter {
          avatar {
            childImageSharp {
              gatsbyImageData
            }
          }
          name
          behance
          featured
          facebook
          images {
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          instagram
          web
          title
        }
      }
    }
  }
`;

export default ArtistsPage;
