import ArtistsList from 'components/artists/ArtistsList/ArtistsList';
import { graphql, PageProps } from 'gatsby';
import React from 'react';
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
          avatar
          name
          behance
          featured
          facebook
          images
          instagram
          web
          title
        }
      }
    }
  }
`;

export default ArtistsPage;
