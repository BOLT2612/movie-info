import React from 'react';

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