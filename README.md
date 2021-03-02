# Getting Started with Create React App

Start the project with `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## project configuration

create base.js file in src directory.

copy code configuration in base.js and write your realtime database informations :


import firebase from 'firebase'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({   
    apiKey: "apikey",   
    authDomain: "authDomain",   
    databaseURL: "databaseURL",   
})

const base = firebase.database()

export {firebaseApp}

export default base