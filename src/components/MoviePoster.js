import React from 'react';

const MoviePoster = (props) => {
  if (props.posterPath) {
    console.log("MoviePoster: props", props)
    const iup = props.imgUrlPieces;
    console.log(iup);
    return (
      <div>
        <img 
          src={iup.imagesUrl + iup.posterSizes[props.posterSize] + props.posterPath} 
          alt="movie poster" 
        />
      </div>
    )
  } else {
    return <div></div>
  }
}

export default MoviePoster;
