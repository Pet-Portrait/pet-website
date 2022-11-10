import React from 'react';
import { graphql, PageProps } from 'gatsby';

import BidsList from 'components/bids/BidsList/BidsList';
import { Bid } from 'types/bid';
import { WithNodes } from 'types/utils';

interface Query {
  allMarkdownRemark: WithNodes<{ id: string; frontmatter: Bid }[]>;
}

const BidsPage = ({ data }: PageProps<Query>) => {
  const bids = data.allMarkdownRemark.nodes.map((node) => ({
    ...node.frontmatter,
    id: node.id,
  }));

  return <BidsList bids={bids} />;
};

export default BidsPage;

export const pageQuery = graphql`
  query BidsPage {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/bids/" } }) {
      nodes {
        id
        frontmatter {
          title
          artist
          type
          url
          format
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;