const express = require('express');
const path = require('path');
const { router } = require('./routes/movieInfoRoutes');
const app = express();

app.use(express.static(path.join(__dirname,'../dist')));
app.use(router);

const port = process.env.MOVIE_INFO_PORT || 3333;

app.listen(port, () => {
  time = new Date().toLocaleTimeString()
  console.log(time + ': movie-info listening on', port)
});
