import React from "react";
import ReactDOM from "react-dom";
import { Router } from '@reach/router';
import axios from 'axios';
import NavHeader from "./NavHeader";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import WebsiteHeading from "./WebsiteHeading";
import MovieDetails from "./MovieDetails";
import AboutThisApp from "./AboutThisApp";

const sitename = `Greg's Movie Info`;

class App extends React.Component {
  state = { 
    movies: { },
    movieId: '',
    currentPage: 0,
    movieDetail: {},
    searchTerm: '',
  };

  componentDidMount = () => {
    console.log('mounting app component');
    this.popularMovieSearch();
  }

  popularMovieSearch = (page = 1) => {

    const landingPageConfig = {
      method: 'get',
      url: '/moviepopular',
      params: {
        page: page,
        applicationOrigin: "initial page loading",
        searchTerm: '',
      }
    }
    axios(landingPageConfig).then(response => {
      // console.log(response);
      this.setState({
        movies: response.data,
        searchTerm: '',
        currentPage: page,
        searchTerm: '',
      })
    }).catch(err => console.error(err));
  }

  onMovieSearchSubmit = (term, page = 1) => {
    // console.log('onMovieSearchSubmit: term =', term);
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
      // console.log(response);
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
    // console.log(event.target, event.target.idx);
    const movieDetailConfig = {
      method: 'get',
      url: '/moviedetail/',
      params: {
        applicationOrigin: "onMovieDetailClick",
        movieId: incomingMovieId
      }
    };
    axios(movieDetailConfig).then(response => {
      // console.log("Inside the axios promise...", response.data);
      this.setState({ 
        movieDetail: response.data,
        movieId: '',
      });
    }).catch(err => console.error(err));
  }

  chooseAnotherPage = (e) => {
    // console.log("Pagination click:",e.target.textContent);
    // textContent holds the number value clicked on
    let newPage;
    if (e.target.textContent.search(/[\D]/) === -1) {
      // check that pagination click was on a number
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

    // console.log("newPage =", newPage);

    if (this.state.searchTerm) {
      // console.log("Movie Search Query:", this.state.searchTerm, "page =",newPage);
      this.onMovieSearchSubmit(this.state.searchTerm, newPage);
    } else {
      // console.log("Popular Movie Query:", this.state.searchTerm, "page =",newPage);
      this.popularMovieSearch(newPage);
    }
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <WebsiteHeading sitename={sitename} />
        <NavHeader />
        <SearchBar onSubmit={this.onMovieSearchSubmit} popularSearch={this.popularMovieSearch} />
          <Router>
            <MovieList  
              path="/" 
              onMovieDetailClick={this.onMovieDetailClick} 
              movies={this.state.movies} 
              listTerm={this.state.searchTerm}
              chooseAnotherPage={this.chooseAnotherPage}
            />
            <MovieDetails path="details/:movieId"  detailData={this.state.movieDetail} />
            <AboutThisApp path="about" sitename={sitename} />
          </Router>
      </div>
    );
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
