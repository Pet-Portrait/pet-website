import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { ArtistQuery } from 'queries/artist';

import ArtistsList from 'components/artists/ArtistsList/ArtistsList';
import { WithNodes } from 'types/utils';

interface Query {
  allMarkdownRemark: WithNodes<ArtistQuery[]>;
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
        ...Artist
      }
    }
  }
`;

export default ArtistsPage;
