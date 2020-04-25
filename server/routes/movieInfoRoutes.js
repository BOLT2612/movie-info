const express = require('express');
const { popular, movieSearch, movieDetail } = require('../services/movieInfoService');

const router = express.Router();

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const DEBUG = process.env.PORT ? false : true ;

if (!TMDB_API_KEY) console.log('TMDB_API_KEY =', TMDB_API_KEY)


router.get('/',(req, res) => {
  res.sendFile('../dist/index.html', { root: __dirname });
});

router.get('/moviepopular', async (req, res) => {
  if (DEBUG) console.log('** moviepopular **, page', req.query.page);
  const retObj = await popular(req.query.page);
  res.send(retObj);
})

router.get('/moviesearch', async (req, res) => {
  if (DEBUG) console.log('** /moviesearch **, searchTerm:', req.query.searchTerm, ', page:', req.query.page);
  const retObj = await movieSearch(req.query.page, req.query.searchTerm );
  res.send(retObj);
})

router.get('/moviedetail', async (req, res) => {
  if (DEBUG) console.log('/moviedetail, movieId:', req.query.movieId );
  const retObj = await movieDetail(req.query.movieId);
  res.send(retObj);
})

router.get('/test',(req, res) => {
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
});

module.exports = { router };