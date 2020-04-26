import React from 'react';
import { Link } from '@reach/router';

const NavHeader = () => {
  return (
    <nav>
      <Link to="/">Home</Link> |{' '}
      <Link to="/about">About</Link> |{' '}
      <Link to="details/:movieId">Details</Link>
    </nav>
  );
};

export default NavHeader;
