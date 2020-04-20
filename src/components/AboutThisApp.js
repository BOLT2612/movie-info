import React from 'react';

const AboutThisApp = (props) => {

  return (
    <div>
      <h2>All about {props.sitename} </h2>
      <p>{props.sitename} is a small web app for finding information about all of your favorite movies.  It uses <a href="https://developers.themoviedb.org/3/getting-started">The Movie Database API</a>.  It started as a take home code challenge for a job interview.  Since it was such an interesting exercise, I decided to deploy it.  I hope you enjoy it.</p>
      <h2>Behavior</h2>
      <ol>
        <li>When first loaded, the user should see a list of the most <a href="https://developers.themoviedb.org/3/movies/get-popular-movies">popular movies</a> and a search bar.</li>
        <li>A user should be able to <a href="https://developers.themoviedb.org/3/search/search-movies">search</a> for a movie by title in the search bar, and the matching results should show up in the list of movies.</li>
        <li>A user can click on a <a href="https://developers.themoviedb.org/3/movies">movie</a> in the list and be taken to a page that displays more details for the movie (title, movie poster, release date, cast, synopsis, etc)</li>
      </ol>
      <h2>Technical Details</h2>
      <ol>
        <li>The backend is coded in Node.js with Express and Axios. It responds to the client requests by querying the Movie DB API and returning the query results to the client.</li>
        <li>The client/UI was created with React and Semantic-UI.</li>
      </ol>
    </div>
  );
};

export default AboutThisApp;