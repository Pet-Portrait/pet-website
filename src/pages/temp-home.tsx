import { HeroImageData } from 'components/homepage/HeroImage/queries';
import Homepage from 'components/homepage/Homepage';
import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';

interface Query {
  allFile: {
    edges: {
      node: HeroImageData;
    }[];
  };
}

const IndexPage: FC<PageProps<Query>> = ({ data }) => (
  <Homepage heroImages={data.allFile.edges.map((edge) => edge.node)} />
);

export default IndexPage;

export const pageQuery = graphql`
  query HeroImages {
    allFile(filter: {absolutePath: {regex: "/\\heroes\\//"}}) {
      edges {
        node {
          ...HeroImage
        }
      }
    }
  }
`;
