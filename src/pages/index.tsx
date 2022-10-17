import WorkInProgress from 'components/WorkInProgress/WorkInProgress';
import type { HeadFC } from 'gatsby';
import React from 'react';

const IndexPage = () => <WorkInProgress />;

export default IndexPage;

export const Head: HeadFC = () => <title>pet portrait</title>;
