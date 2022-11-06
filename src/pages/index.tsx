import React from 'react';
import type { HeadFC } from 'gatsby';

import WorkInProgress from 'components/WorkInProgress/WorkInProgress';

const IndexPage = () => <WorkInProgress />;

export default IndexPage;

export const Head: HeadFC = () => <title>pet portrait</title>;
