# Getting Started with New Year New Fit App

## View the App on the Web

You can view this project on the web  [here](https://snackalogproject.netlify.app/).

## How to Install Locally

### Back End Installation  

* Make a new directory and git clone the [New Year New Fit Back End](https://github.com/DiandreMiller/new-year-new-fit-backend) repository in it. 
* Open the repo in VSCode and create a .env file to the root directory.
* Add the following code to the .env file ```PORT = 4000``` and then save.
* Make sure nodemon is installed on your computer. 
    If you need help installing nodemon visit the following [page](https://www.npmjs.com/package/nodemon) and scroll down to the installation instructions.
* Run the following code in the repository's command line ```npm i cors dotenv express``` to make sure all            dependencies are installed correctly.

* Run the following code in the repository's command line ```nodemon server.js``` to run the back end server.
* The back end server should be up and running now.


### Front End Installation 

* Create a new directory and git clone this repository ([New Year New Fit Front End](https://github.com/DiandreMiller/new-year-new-fit)) in it.
* Open the repository in VSCode and create a .env file in the root directory.
* Add the following code to the .env file ```REACT_APP_BACKEND_API = http://localhost:4000```
* Run the following code in the repository's command line ```npm i axios``` to make sure all dependencies are installed correctly.
* Run the following code in the repository's command line ```npm start``` to start the app in a live server.
* The front end application should be up and running now.

* Here is a link to the [Trello Board](https://trello.com/b/knKkRgTj/workout)

#### Snack A Log Back End Deployment Link
https://snackalogproject.netlify.app/