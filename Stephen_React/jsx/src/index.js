//Import the React and ReactDom Libraries
import React from 'react';
import ReactDOM from 'react-dom';
//Create a react component
const App = function () {
  const buttonText = 'Click Me!';
  return (
    <div>
      <label className='label' htmlFor='name'>
        Enter Name:
      </label>
      <input id='name' type='text' />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
    </div>
  );
};
//Take the React Component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
