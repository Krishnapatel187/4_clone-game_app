# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Component Added
1. `App` component: This is the main application component that serves as a container for other components. It renders all of our app's content and manages state.
I have added a new component called `App` which is the entry point of our application
and another component called `GameBoard`. The `GameBoard` component has been created inside 
the `src/components` directory and imported into the `App` component using ES6 import statement.


### `GameBoard.js`

javascript file containing the logic for rendering game board, it takes an array as props representing the tiles on
The `GameBoard` component represents the game board, it takes an array of numbers as props and renders each number in a separate `<div>` element. 

It is responsible for rendering the game board , the game board cells, and handling user interaction events such as clicking on a cell to place a marker.

where the functionality like Suggedted Move and New Game are implemented.

### `Helper.js`
A helper file that contains functions to help in calculating the winner of the game.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
