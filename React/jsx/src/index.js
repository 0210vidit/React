import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const buttonText = 'Click Me!';

  return <div>{buttonText}</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
