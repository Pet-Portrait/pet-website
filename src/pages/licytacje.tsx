import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Bids from 'components/bids/Bids';
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

  return <Bids bids={bids} />;
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
              # TODO: For further investigation. Quick fix to not fetch huge images
              gatsbyImageData(width: 700)
            }
          }
        }
      }
    }
  }
`;
