import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import { ArtistQuery } from 'queries/artist';
import { BasicBidQuery } from 'queries/bid';

import Homepage from 'components/homepage/Homepage';
import { WithNodes } from 'types/utils';

interface Query {
  bids: WithNodes<BasicBidQuery[]>;
  artists: WithNodes<ArtistQuery[]>;
}

const IndexPage: FC<PageProps<Query>> = ({ data }) => (
  <Homepage
    artists={data.artists.nodes.map((node) => ({
      ...node.frontmatter,
      description: node.html,
      id: node.id,
    }))}
    bids={data.bids.nodes.map((node) => node.frontmatter)}
  />
);

export default IndexPage;

export const query = graphql`
  query Homepage {
    bids: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/bids/" }, frontmatter: { featured: { eq: true } } }
    ) {
      nodes {
        ...BasicBid
      }
    }
    artists: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/artists/" }, frontmatter: { featured: { eq: true } } }
    ) {
      nodes {
        ...Artist
      }
    }
  }
`;
