/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import { ArtistQuery } from 'queries/artist';

import Artists from 'components/artists/Artists';
import Seo from 'components/shared/Seo/Seo';
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

  return <Artists artists={artists} />;
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

export const Head: HeadFC = ({ location }) => (
  <Seo pathname={location.pathname} title="pet portrait | artyści" />
);
