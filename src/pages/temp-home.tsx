import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';

import Homepage from 'components/homepage/Homepage';
import { FeaturedBid } from 'types/bid';
import { WithNodes } from 'types/utils';

interface Query {
  allMarkdownRemark: WithNodes<{ frontmatter: FeaturedBid }[]>;
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
        frontmatter {
          images {
            image {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          title
          url
        }
      }
    }
  }
`;
