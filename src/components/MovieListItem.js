import React from 'react';
import { navigate } from '@reach/router';

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.movieId = props.id;
    this.idx = props.idx;
  }

  movieListItemClick = () => {
    console.log(this.movieId);
    this.props.onMovieDetailClick(this.movieId);
    navigate(`/details/${this.movieId}`);
  }

  render () {
    return (
      <div class="item" key={this.movieId} movieid={this.movieId} onClick={this.movieListItemClick}>
        {this.title}
      </div>
    ) 
  }
}

export default MovieListItem;