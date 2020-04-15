# Getting Movie-Info running locally
### Install the node modules
This setup assumes you already have node.js and npm installed on your system.  If not you can find instructions for installation at `nodejs.org` and `npmjs.com`.
In the root directory of the project, enter the following:
`npm install`
## Next...
### Get an api_key from The Movie Database API
Go to https://developers.themoviedb.org/3/getting-started/introduction
Follow the instructions to open an account (it should be free) and get an api_key.  The key will be a string of about 32 characters.  Once the api_key is acquired go to the project root directory and navigate to the server directory.

## What do I do with this api_key?
### this...
Example: if your `api_key='12345678901234567890123456789012'`, from the project root directory you would enter the following commands:
`$ cd ./server`
`$ export TMDB_API_KEY='1234567890abcdefghij123456789012'`
This will allow the server to utilize the api at https://api.themoviedb.org
## Next...
### ...set the environment variable MOVIE_INFO_PORT to your desired port number.
Example: If the desired port to run your server on is 3333, enter the following in ./server directory
`$ export MOVIE_INFO_PORT="3333"`
## Run the server
In the root directory of the project, enter the following:
`$ npm run server-dev`
## Then...
Open a new tab in your browser with the following address:
`http://localhost:3333/`
In this above case, it is assumed that 3333 was the value assigned to MOVIE_INFO_PORT
