import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import { BasicBidQuery } from 'queries/bid';

import Homepage from 'components/homepage/Homepage';
import { WithNodes } from 'types/utils';

interface Query {
  allMarkdownRemark: WithNodes<BasicBidQuery[]>;
}

const IndexPage: FC<PageProps<Query>> = ({ data }) => (
  <Homepage bids={data.allMarkdownRemark.nodes.map((node) => node.frontmatter)} />
);

export default IndexPage;

export const query = graphql`
  query Homepage {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/bids/" }, frontmatter: { featured: { eq: true } } }
    ) {
      nodes {
        ...BasicBid
      }
    }
  }
`;
