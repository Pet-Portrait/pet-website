/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import { ArtistQuery } from 'queries/artist';
import { BasicBidQuery } from 'queries/bid';

import Homepage from 'components/homepage/Homepage';
import Seo from 'components/shared/Seo/Seo';
import { WithNodes } from 'types/utils';

interface Query {
  verticalBidsImage: WithNodes<BasicBidQuery[]>;
  horizontalBidsImage: WithNodes<BasicBidQuery[]>;
  artists: WithNodes<ArtistQuery[]>;
}

const IndexPage: FC<PageProps<Query>> = ({ data }) => {
  const artists = data.artists.nodes.map((node) => ({
    ...node.frontmatter,
    description: node.html,
    id: node.id,
  }));

  const bids = {
    vertical: data.verticalBidsImage.nodes.map((node) => node.frontmatter),
    horizontal: data.horizontalBidsImage.nodes.map((node) => node.frontmatter),
  };

  return <Homepage artists={artists} bids={bids} />;
};

export default IndexPage;

export const query = graphql`
  query Homepage {
    horizontalBidsImage: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/bids/" }
        frontmatter: {
          featured: { eq: true }
          image: { childImageSharp: { resize: { aspectRatio: { gt: 1 } } } }
        }
      }
    ) {
      nodes {
        ...BasicBid
      }
    }
    verticalBidsImage: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/bids/" }
        frontmatter: {
          featured: { eq: true }
          image: { childImageSharp: { resize: { aspectRatio: { lt: 1 } } } }
        }
      }
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

export const Head: HeadFC = ({ location }) => <Seo pathname={location.pathname} />;
