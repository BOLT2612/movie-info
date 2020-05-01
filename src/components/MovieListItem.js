import React from 'react';
import { navigate } from '@reach/router';
import MoviePoster from './MoviePoster';


class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.movieId = props.id;
    this.idx = props.idx;
  }

  movieListItemClick = () => {
    this.props.onMovieDetailClick(this.movieId);
    navigate(`/details/${this.movieId}`);
  }

  render () {
    return (
      <div class="item" key={this.movieId} movieid={this.movieId} onClick={this.movieListItemClick}>
        <MoviePoster 
          posterPath={this.props.poster_path} 
          imgUrlPieces={this.props.imgUrlPieces} 
          posterSize={0}
        />
        {this.title} 
      </div>
    ) 
  }
}

export default MovieListItem;