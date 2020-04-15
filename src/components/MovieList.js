import React from 'react';
import MovieListItem from './MovieListItem';

const MovieList = (props) => {
  if (props.movies.results) {
    // const currentMovieList = props.movies.results.map(movie => {
    //   return <div class="item">{movie.title}</div>
    // })
    const visibleMovieList = props.movies.results.map((movie, idx) => 
        <div class="item" key={movie.id}>
          <MovieListItem title={movie.title} id={movie.id} onMovieDetailClick={props.onMovieDetailClick} />
        </div>
    )
    return (
      <div class="ui list" >{visibleMovieList}</div>
    );
  } else {
    return <div>MovieList not loaded yet</div>
  }
  
};

export default MovieList;
