import React from 'react';
import { Link } from '@reach/router';

const NavHeader = () => {

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/details">Details</Link>
      </nav>
    </div>
  );
  
};

export default NavHeader;