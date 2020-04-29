const express = require('express');
const { popular, movieSearch, movieDetail, imagesConfiguration } = require('../services/movieInfoService');

const router = express.Router();

const TMDB_API_KEY = process.env.TMDB_API_KEY;
if (!TMDB_API_KEY) {
  console.log('STOP: you need to export TMDB_API_KEY=<your TMDB API KEY value>\nRight now TMDB_API_KEY=', TMDB_API_KEY);
}  

router.get('/',(req, res) => {
  res.sendFile('../dist/index.html', { root: __dirname });
});

router.get('/moviepopular', async (req, res) => {
  const retObj = await popular(req.query.page);
  res.send(retObj);
});

router.get('/moviesearch', async (req, res) => {
  const retObj = await movieSearch(req.query.page, req.query.searchTerm );
  res.send(retObj);
});

router.get('/moviedetail', async (req, res) => {
  const retObj = await movieDetail(req.query.movieId);
  res.send(retObj);
});

router.get('/imagesconfig', async (req, res) => {
  const retObj = await imagesConfiguration();
  res.send(retObj);
});

module.exports = { router };