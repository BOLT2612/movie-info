const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
// const themoviedb = require('./api/themoviedb');
const app = express();

app.use(express.static(path.join(__dirname,'../dist')));

var port = process.env.MOVIE_INFO_PORT || 3456;
var TMDB_API_KEY = process.env.TMDB_API_KEY;
if (!TMDB_API_KEY) console.log('TMDB_API_KEY =', TMDB_API_KEY)

app.get('/',(req, res) => {
  res.sendFile('../dist/index.html', { root: __dirname });
});

app.get('/moviepopular', (req, res) => {
  console.log('** hit moviepopular **');
  console.log('req.query', req.query);
  axios.get('https://api.themoviedb.org/3/movie/popular', {
    params: {
      api_key: TMDB_API_KEY,
      language: "en-US",
      page: "2"
    }
  }).then(response => {
    // console.log(response.status, response.data);
    
    const condensedArray = response.data.results.map(x => ( {title: x.title, id: x.id, poster_path:x.poster_path } ));
    const retObj = {
      page: response.data.page,
      total_pages: response.data.total_pages,
      total_results: response.data.total_results,
      results: condensedArray
    }
    console.log(retObj);
    // res.send(response.data);
    res.send(retObj);
  })
  .catch(err => console.error(err));
})

app.get('/moviesearch', (req, res) => {
  console.log('** Movie Search HIT **');
  console.log('searchTerm:', req.query.searchTerm);
  
  axios.get('https://api.themoviedb.org/3/search/movie', {
    params: {
      api_key: TMDB_API_KEY,
      language: "en-US",
      page: "1",
      query: req.query.searchTerm
    }
  }).then(response => {
    // console.log(response.status, response.data.results);
    
    const condensedArray = response.data.results.map(x => ( {title: x.title, id: x.id, poster_path:x.poster_path } ));
    const retObj = {
      page: response.data.page,
      total_pages: response.data.total_pages,
      total_results: response.data.total_results,
      results: condensedArray
    }
    console.log(retObj);
    // res.send(response.data);
    res.send(retObj);
  })
  .catch(err => console.error(err));
  // res.status(200);
  // res.send('** Movie Search HIT **');
})

app.get('/moviedetail',(req, res) => {
  console.log('** Movie Detail Hit **');
  console.log(req.query);

  axios.all([
    axios.get(`https://api.themoviedb.org/3/movie/${req.query.movieId}`, {
    params: {
      api_key: TMDB_API_KEY,
      language: "en-US",
    }
  }),
  axios.get(`https://api.themoviedb.org/3/movie/${req.query.movieId}/credits`, {
    params: {
      api_key: TMDB_API_KEY,
      language: "en-US",
    }
  })
  ]).then(axios.spread((response1,response2) => {
    console.log(' ************** response1 ************** ',response1.status, response1.data);
    console.log(' ************** response2 ************** ',response2.status, response2.data);
    res.send('** Movie Detail Hit **');
  }))
  .catch(err => console.error(err));
  // res.status(200);


  // res.send("** Movie Detail Response **");
})

// /search/movie
// /movie/popular
// /movie/{movie_id}

app.get('/test',(req, res) => {
  console.log('** test hit **');
  console.log(req.params);

  const testResponse = {
    protocol: req.protocol,
    hostname: req.hostname,
    path: req.path,
    originalUrl: req.originalUrl,
    subdomains: req.subomains,
    method: req.method,
  }

  console.log(testResponse);

  // console.log(req.protocol)     // "https"
  // console.log(req.hostname)     // "localhost"
  // console.log(req.path)         // "/moviepopular"
  // console.log(req.originalUrl)  // "/moviepopular?filter=very-humid"
  // console.log(req.subomains)    // "['mossy']"
  // console.log(req.method)    // "GET"
  // console.log(req.Content-Type)

  res.send(testResponse);
})



app.listen(port, () => {
  time = new Date().toLocaleTimeString()
  console.log(time + ': movie-info listening on', port)
});