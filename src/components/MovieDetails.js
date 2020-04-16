import React from 'react';
import { navigate } from '@reach/router';

const MovieDetails = (props) => {
  // navigate(`/details/${props.navigate}`);
  return <h3>{props.moviename} Details</h3>;
  
};

export default MovieDetails;