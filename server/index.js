const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const port = 3000;
var app = express();

app.get('/',(req, res) => {
  res.send("Hello Movie-Info World");
})

app.listen(port, () => console.log('movie-info listening on', port));