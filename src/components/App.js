import React from "react";
import ReactDOM from "react-dom";
import { Router } from '@reach/router';
import axios from 'axios';
import NavHeader from "./NavHeader";
import MovieList from "./MovieList";
import WebsiteHeading from "./WebsiteHeading";
import MovieDetails from "./MovieDetails";
import AboutThisApp from "./AboutThisApp";

const sitename = `Movie Info`;

class App extends React.Component {
  state = { 
    movies: { },
    movieId: '',
    currentPage: 0,
    movieDetail: {},
    searchTerm: '',
    leftPartOfimgUrl: '',
    imgUrlPieces: {}
  };

  componentDidMount = () => {
    this.popularMovieSearch();
    this.getImagesConfig();
    setInterval(this.getImagesConfig, 24*60*60000);
  }

  getImagesConfig = () => {

    const imagesConfig = {
      method: 'get',
      url: '/imagesconfig',
      params: {
        applicationOrigin: "Get Image Configuration"
      }
    }
    axios(imagesConfig).then(response => {
      this.setState({
        leftPartOfimgUrl: response.data.images.secure_base_url + response.data.images.poster_sizes[3],
        imgUrlPieces: {
          imagesUrl: response.data.images.secure_base_url,
          backdropSizes: response.data.images.backdrop_sizes,
          posterSizes: response.data.images.poster_sizes
        }
      })
    }).catch(err => console.error(err));
  }

  popularMovieSearch = (page = 1) => {

    const landingPageConfig = {
      method: 'get',
      url: '/moviepopular',
      params: {
        page: page,
        applicationOrigin: "client popularMovieSearch",
        searchTerm: '',
      }
    }
    axios(landingPageConfig).then(response => {
      this.setState({
        movies: response.data,
        searchTerm: '',
        currentPage: page,
        searchTerm: '',
      })
    }).catch(err => console.error(err));
  }

  onMovieSearchSubmit = (term, page = 1) => {
    this.setState({
      movies: '',
    });
    const searchConfig = {
      method: 'get',
      url: '/moviesearch/',
      params: {
        page: page, 
        searchTerm: term,
        applicationOrigin: "onMovieSearchSubmit"
      }
    }
    axios(searchConfig).then(response => {
      this.setState({
        movies: response.data,
        searchTerm: term,
        currentPage: page,
      })
    }).catch(err => console.error(err));
  }

  onMovieDetailClick = (incomingMovieId) => {
    this.setState({
      movieDetail: {}
    }) 
    const movieDetailConfig = {
      method: 'get',
      url: '/moviedetail/',
      params: {
        applicationOrigin: "onMovieDetailClick",
        movieId: incomingMovieId
      }
    };
    axios(movieDetailConfig).then(response => {
      console.log("onMovieDetailClick axios response...", response.data);
      this.setState({ 
        movieDetail: response.data,
      });
    }).catch(err => console.error(err));
  }

  chooseAnotherPage = (e) => {
    let newPage;
    if (e.target.textContent.search(/[\D]/) === -1) {
      newPage = Number.parseInt(e.target.textContent);
    } else if (e.target.textContent.charCodeAt(0) === 171) {
      newPage = 1;
    } else if (e.target.textContent.charCodeAt(0) === 187) {
      newPage = this.state.movies.total_pages;
    } else if (e.target.textContent.charCodeAt(0) === 10216) {
      newPage = Math.max(this.state.currentPage - 1, 1);
    } else if (e.target.textContent.charCodeAt(0) === 10217) {
      newPage = Math.min(this.state.currentPage + 1,this.state.movies.total_pages);
    } else if (e.target.textContent === '...') {
      return;
    }

    if (this.state.searchTerm) {
      this.onMovieSearchSubmit(this.state.searchTerm, newPage);
    } else {
      this.popularMovieSearch(newPage);
    }
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <WebsiteHeading sitename={sitename} />
        <NavHeader />
          <Router>
            <MovieList  
              path="/" 
              onMovieDetailClick={this.onMovieDetailClick} 
              movies={this.state.movies} 
              listTerm={this.state.searchTerm}
              chooseAnotherPage={this.chooseAnotherPage}
              onMovieSearchSubmit={this.onMovieSearchSubmit}
              popularMovieSearch={this.popularMovieSearch}
            />
            <MovieDetails path="details/:movieId" detailData={this.state.movieDetail} urlForImages={this.state.leftPartOfimgUrl} />
            <AboutThisApp path="about" sitename={sitename} />
          </Router>
      </div>
    );
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
