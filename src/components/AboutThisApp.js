import React from 'react';

const AboutThisApp = (props) => {

  return (
    <div>
      <h2>All about {props.sitename} </h2>
      <p>This application started as a take home exercise for a job interview.  It was an interesting exercise. So I decided to deploy it here so everyone could see it.</p>
      
      <p>The description of the exercise is below.</p>
      
      <h2 id="project">Project</h2>
      <p>{props.sitename} is a small web app for finding information about all of your favorite movies using the <a href="https://developers.themoviedb.org/3/getting-started">The Movie Database API</a>.</p>
      <h2>Behavior</h2>
      <ol>
        <li>When first loaded, the user should see a list of the most <a href="https://developers.themoviedb.org/3/movies/get-popular-movies">popular movies</a> and a search bar.</li>
        <li>A user should be able to <a href="https://developers.themoviedb.org/3/search/search-movies">search</a> for a movie by title in the search bar, and the matching results should show up in the list of movies.</li>
        <li>A user can click on a <a href="https://developers.themoviedb.org/3/movies">movie</a> in the list and be taken to a page that displays more details for the movie (title, movie poster, release date, cast, synopsis, etc)</li>
      </ol>
      <h2 id="technical-requirements">Technical Details</h2>
      <ol>
        <li>The backend application is coded in Node.js with Express and Axios. This backend queries the Movie DB API and return the results to the client.</li>
        <li>Client UI created with React and Semantic-UI.  Transpiling and building setup with webpack and it's many babel plugins.</li>
        <li>A README.md with step-by-step instructions for running the app. Be careful to ensure there are not local dependencies that have been overlooked in the readme.</li>
      </ol>
    </div>
  );
  
};

export default AboutThisApp;