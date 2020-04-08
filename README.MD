# Getting Movie-Info running locally
## Install the node modules
This setup assumes you already have node.js and npm installed on your system.  If not you can find instructions for installation at `nodejs.org` and `npmjs.com`.

In the root directory of the project, enter the following:
`npm install`


## Before running server,
### ...set the environment variable MOVIE_INFO_PORT to your desired port number.
Example: If the desired port to run your server on is 3333, enter the following in ./server directory
`$ export MOVIE_INFO_PORT="3333"`
## Run the server
In the root directory of the project, enter the following:
`$ npm run server-dev`
### Then...
Open a new tab in your browser with the following address:
`http://localhost:3333/`
In this above case, it is assumed that 3333 was the value assigned to MOVIE_INFO_PORT
