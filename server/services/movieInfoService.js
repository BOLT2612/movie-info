const axios = require('axios');

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const DEBUG = process.env.MOVIE_INFO_DEBUG;

if (DEBUG) console.log('DEBUG mode is', DEBUG);

const popular = async (page) => {
  try {
    const dataPopular = await axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: TMDB_API_KEY,
        language: "en-US",
        page: page
      }
    });
    // if (DEBUG) console.log(dataPopular.data);
    const condensedArray = dataPopular.data.results.map(x => ( 
      {
        title: x.title, 
        id: x.id, 
        poster_path: x.poster_path,
        backdrop_path: x.backdrop_path
      }
    ));
    const retObj = {
      page: dataPopular.data.page,
      total_pages: dataPopular.data.total_pages,
      total_results: dataPopular.data.total_results,
      results: condensedArray
    }
    // if (DEBUG) console.log(retObj);
    return retObj;
  } catch (err) {
    console.error(err);
    return { };
  }
}

const movieSearch = async (page, searchTerm) => {
  try {
    const dataSearch = await axios.get(
      'https://api.themoviedb.org/3/search/movie', 
      {
        params: {
          api_key: TMDB_API_KEY,
          language: "en-US",
          page: page,
          query: searchTerm
        }
      }
    );      
    const condensedArray = dataSearch.data.results.map(x => ( 
      {
        title: x.title, 
        id: x.id, 
        poster_path:x.poster_path 
      } 
    ));
    const retObj = {
      page: dataSearch.data.page,
      total_pages: dataSearch.data.total_pages,
      total_results: dataSearch.data.total_results,
      results: condensedArray
    }
    if (DEBUG) console.log(retObj);
    return(retObj);
  } catch {
    err => console.error(err);
    return { };
  }
}

const movieDetail = async (movieId) => {
  try {
    const [ detailsRes1, detailsRes2 ] = await Promise.all(
      [
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: TMDB_API_KEY,
          language: "en-US",
        }
      }),
      axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
        params: {
          api_key: TMDB_API_KEY,
          language: "en-US",
        }
      })
      ]
    );
    if (DEBUG) { 
      console.log(' ************** detailsRes1 ************** ',detailsRes1.status, detailsRes1.data);
      console.log(' ************** detailsRes2 ************** ',detailsRes2.status, detailsRes2.data);
    }
    const movieDetailData = detailsRes1.data;
    movieDetailData.cast = detailsRes2.data.cast;
    movieDetailData.crew = detailsRes2.data.crew;
    return(movieDetailData);
  } catch {
    err => console.error(err);
    return { };
  }
}

const imagesConfiguration = async () => {
  try {
    const imagesConfigRes = await axios.get(
      'https://api.themoviedb.org/3/configuration', 
      {
        params: {
          api_key: TMDB_API_KEY,
        }
      }
    );      
    const retObj = imagesConfigRes;
    if (DEBUG) {
      console.log("status:",imagesConfigRes.status );
      console.log("data:", imagesConfigRes.data)
    }
    return(retObj.data);
  } catch {
    err => {
      console.log("movieInfoService.js: imagesConfiguration ");
      console.error(err);
      return { };
    }
  }
}

module.exports = {
  popular,
  movieSearch,
  movieDetail,
  imagesConfiguration
};