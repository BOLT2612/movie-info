import React from 'react';

const MoviePoster = (props) => {
  if (props.posterPath) {
    return (
      <div>
        <img src={props.urlForImages + props.posterPath} alt="movie poster" />
      </div>
    )
  } else {
    return <div></div>
  }
}

export default MoviePoster;