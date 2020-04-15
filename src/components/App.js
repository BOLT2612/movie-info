import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Redirect, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import axios from 'axios';
import NavHeader from "./NavHeader";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import WebsiteHeading from "./WebsiteHeading";
import MovieDetails from "./MovieDetails";
import AboutThisApp from "./AboutThisApp";

const history = createBrowserHistory;
const port = process.env.MOVIE_INFO_PORT || 3456;

class App extends React.Component {
  state = { 
    redirect: null,
    movies: [ ],
    movieDetail: {},
    axiosConfig: {
      method: 'get',
      url: '/moviepopular',
      params: {
        page: 1,
        applicationOrigin: "initial page loading"
      }
    }
  };

  componentDidMount = () => {
    console.log('mounting app component');
    axios(this.state.axiosConfig).then(response => {
      console.log(response);
      this.setState({movies: response.data})
    }).catch(err => console.error(err));
  }

  onMovieSearchSubmit = (term) => {
    console.log('onMovieSearchSubmit: term =', term);
    this.setState({
      axiosConfig: {
        method: 'get',
        url: '/moviesearch/',
        params: {
          page: 1, 
          searchTerm: term,
          applicationOrigin: "onMovieSearchSubmit"
        }
      }
    }, () => {
      axios(this.state.axiosConfig).then(response => {
        console.log("Redirect = ",this.state.redirect)
        console.log(response);
        this.setState({movies: response.data})
      }).catch(err => console.error(err));
    })
  }

  onMovieDetailClick = (incomingMovieId) => {
    console.log(event.target, event.target.idx);
    this.setState({
      redirect: "/details", 
      axiosConfig: {
        method: 'get',
        url: '/moviedetail/',
        params: {
          applicationOrigin: "onMovieDetailClick",
          movieId: incomingMovieId
        }
      }
    }, () => {

      axios(this.state.axiosConfig).then(response => {
        console.log("Redirect =", this.state.redirect)
        console.log(response.data);
        this.setState({ movieDetail: response.data })
      }).catch(err => console.error(err));
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
      <BrowserRouter history={history}>
      <div className="ui container" style={{ marginTop: '10px'}}>
        <WebsiteHeading sitename={`Movie Info`} />
        <NavHeader />
        <SearchBar onSubmit={this.onMovieSearchSubmit} />
          <Routes>
            <Route exact path="/" element={<MovieList onMovieDetailClick={this.onMovieDetailClick} movies={this.state.movies} />} />
            <Route path="details" element={<MovieDetails moviename={"Rocky 4"} />} />
            <Route path="about" element={<AboutThisApp />} />
          </Routes>
      </div>
      </BrowserRouter>

    );
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
