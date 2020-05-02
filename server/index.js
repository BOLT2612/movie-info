const express = require('express');
const path = require('path');
const { router } = require('./routes/movieInfoRoutes');
const app = express();

app.use(express.static(path.join(__dirname,'../dist')));
app.use(router);

const port = process.env.PORT;

app.listen(port, () => {
  time = new Date().toLocaleTimeString()
  console.log(time + ': movie-info listening on', port)
});
