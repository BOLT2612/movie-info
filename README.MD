# Getting Movie-Info running locally
Thank you for taking the time to play with my Movie-Info application.  Setup is relatively simple.  The instructions are long only because I've tried to be explicit and give examples wherever possible.

This setup assumes you already have *node.js* and *npm* installed on your system.  You can find instructions for installation at [nodejs.org](https://nodejs.org/) and [npmjs.com](https://www.npmjs.com/).

# TLDR
1. Clone the repo.
1. Go to root directory and enter: <span style="color:blue">*npm install*</span>
1. Get version 3 api_key from [developers.themoviedb.org/3/getting-started/introduction](https://developers.themoviedb.org/3/getting-started/introduction)
1. From project root directory, go to server directory: <span style="color:blue">*cd ./server*</span>  
1. Enter the following: <span style="color:blue">*export TMDB_API_KEY={your version 3 api_key from themoviedb.org}*</span>
1. Go back to project root directory and enter: <span style="color:blue">*export PORT={your desired port number}*</span>
1. Start the server by entering the following: <span style="color:blue">*npm run server-dev*</span>
1. Open a new tab in your browser with the following URI: <span style="color:blue">`http://localhost:{your desired port number}/`</span>
1. Explore different movies and movie title searches.   

### Clone the application locally

In a terminal on your system clone the repo and go to the root directory of the repo  

### Install the node modules
In the root directory of the project, enter the following:  
  
<span style="color:blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**npm install**</span>  
  
### Next...Get a *version 3 api_key* from The Movie Database API  
In your browser, go to  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[developers.themoviedb.org/3/getting-started/introduction](https://developers.themoviedb.org/3/getting-started/introduction)   

Follow the instructions to open an account (it should be free) and get an **api_key**.  Please note that this repo uses *Version 3* of the *The Movie Database API*.  The key will be a string of about 32 characters.  Once the api_key is acquired go to the project root directory and navigate to the server directory.

## What do I do with this api_key?

From the project root directory enter the following commands:  
  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:blue">**$ cd ./server**</span>  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:blue">**$ export TMDB_API_KEY={your themoviedb.org api_key}**</span>  
  
For example: if your `api_key='1234567890abcdefghij123456789012'`, you would do the following:  
  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:blue">**$ cd ./server**</span>  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:blue">**$ export TMDB_API_KEY='1234567890abcdefghij123456789012'**</span>


Now the server can access and utilize the api at https://api.themoviedb.org  
### Next: Set the environment variable PORT to your desired port number.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:blue">**$ export PORT={your desired port number}**</span>  
  
Example: If the desired port to run your server on is 3333, enter the following in ./server directory  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:blue">**$ export PORT="3333"**</span>  
## Run the server  
In the root directory of the project, enter the following:  
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:blue">**$ npm run server-dev**</span>  
## Then...
Open a new tab in your browser with the following URI:  
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:blue">**http://localhost:{your desired port number}/**</span>  

In this above case, {your desired port number} should be replaced with the value assigned to PORT  
So, if {PORT}= 3333, you should set your browser address to  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:blue">**http://localhost:3333/**</span>  

## And finally...

Click on a movie title to see details  ...or...  
  
Enter a title, or part of a title in the search bar  ...or...

Click on a different page number and view other pages of the popular movies or search results.

### Enjoy.


