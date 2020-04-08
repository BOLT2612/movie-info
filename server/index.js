const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
var app = express();

var port = process.env.MOVIE_INFO_PORT;

app.get('/',(req, res) => {
  res.send("Hello Movie-Info World");
})

app.listen(port, () => console.log('movie-info listening on', port));