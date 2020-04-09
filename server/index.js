const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
var app = express();

app.use(express.static(path.join(__dirname,'../dist')));

var port = process.env.MOVIE_INFO_PORT || 3000;

app.get('/',(req, res) => {
  // res.send("Hello Movie-Info World");
  res.sendFile('../dist/index.html', { root: __dirname });
})

app.listen(port, () => console.log('movie-info listening on', port));