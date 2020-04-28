import React from 'react';
import MoviePoster from './MoviePoster';

const MovieDetails = (props) => {
  const detailData = props.detailData

  let tagline = '';
  if (detailData.tagline && detailData.tagline.length > 0) {
    tagline = '"' + detailData.tagline + '"';
  }

  if (!props.detailData.production_companies) {
    return (
      <div class="ui segment">
        <div class="ui active inverted dimmer">
          <div class="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    );
  } else {
    return (
      <div class="ui segment">
        <h1 class="ui teal center aligned header">{detailData.title}</h1>
        <h4 class="ui center aligned header">{tagline}</h4>
        <MoviePoster posterPath={detailData.poster_path} urlForImages={props.urlForImages} />
        <p>{detailData.overview}</p>
        <h5 class="ui left floated header">Runtime: </h5><p>{detailData.runtime} minutes</p>
        <h5 class="ui left floated header">Popularity: </h5><p>{detailData.popularity}</p>
        <h5 class="ui left floated header">Revenue: </h5><p>{detailData.revenue}</p>
        <h5 class="ui left floated header">Release Date: </h5><p>{detailData.release_date}</p>
        <h5 class="ui left floated header">Original Language: </h5><p>{detailData.original_language}</p>
        <h5>Cast</h5>
        <ul>
          {detailData.cast.map(x => <li key={x.cast_id}>{x.name} as <i></i>{x.character}</li>)}
        </ul>
        <h5>Production Companies</h5>
        <ul>
         {detailData.production_companies.map(x => <li key={x.id}>{x.name}</li>)}
        </ul>
        
      </div>
      
    );
  }
};

export default MovieDetails;
