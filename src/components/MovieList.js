import React from 'react';
import MovieListItem from './MovieListItem';
import PaginationFooter from './PaginationFooter';

const MovieList = (props) => {
  // console.log("MovieList: props.movies.page", props.movies.page, "props.movies.total_pages",props.movies.total_pages)
  if (props.movies.results) {

    let searchResultsHeading = '';
    if (props.listTerm && props.listTerm.length > 0) {
      searchResultsHeading = 'Results: ' + props.listTerm;
    } else {
      searchResultsHeading = 'Popular Movies';
    }
    // const visibleMovieList = props.movies.results.map(movie => {
    //   return <div class="item">{movie.title}</div>
    // })
    const visibleMovieList = props.movies.results.map((movie, idx) => 
        <div class="item" key={movie.id}>
          <MovieListItem title={movie.title} id={movie.id} onMovieDetailClick={props.onMovieDetailClick} />
        </div>
    )

    return (
      <div>
        <div class="ui segment">
          <h2 class="ui center aligned header">{searchResultsHeading}</h2>
          <div class="ui list" >{visibleMovieList}</div>
          <h5 class="ui center aligned header">Page {props.movies.page} of {props.movies.total_pages}</h5>
        </div>
        <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <PaginationFooter 
            currentPage={props.movies.page} 
            totalPages={props.movies.total_pages} 
            chooseAnotherPage={props.chooseAnotherPage} 
          />
        </div>
      </div>
      
    );
  } else {
    return (
      <div class="ui segment">
        <div class="ui active inverted dimmer">
          <div class="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    );
  }
  
};

export default MovieList;

// return (
//   <div class="ui segment">
//     <h2 class="ui center aligned header">Results: {props.listTerm} </h2>
//     <div class="ui list" >{visibleMovieList}</div>
//     <h5 class="ui center aligned header">Page {props.movies.page} of {props.movies.total_pages}</h5>
//     <PaginationFooter 
//       currentPage={props.movies.page} 
//       totalPages={props.movies.total_pages} 
//       chooseAnotherPage={props.chooseAnotherPage} 
//     />
//   </div>
  
// );


