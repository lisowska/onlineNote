import React from 'react';
import { Link } from 'react-router-dom';

import UserPageTemplate from './UserPageTemplate';

const DetailsTemplate = () => (
  <UserPageTemplate>
    <h1>note</h1>
    <p>vnsnvjsnvsdnvjsdnvsjdnvs</p>
    <Link to="/">go back</Link>
  </UserPageTemplate>
);

export default DetailsTemplate;
