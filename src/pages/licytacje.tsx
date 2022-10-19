import { graphql, PageProps } from 'gatsby';
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
  // eslint-disable-next-line no-console
  console.log(bids);

  return null;
};

export default BidsPage;

export const pageQuery = graphql`
  query BidsPage {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/bids/" } }) {
      nodes {
        id
        frontmatter {
          name
          artist
          type
          url
          format
          images
        }
      }
    }
  }
`;
