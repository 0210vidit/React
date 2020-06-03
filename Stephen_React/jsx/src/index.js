//Import the React and ReactDom Libraries
import React from 'react';
import ReactDOM from 'react-dom';
//Create a react component
const App = function () {
  return <div>Hi There!</div>;
};
//Take the React Component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
