import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail name='Alex' description='WOW' time='6:00PM' />
      <CommentDetail name='Alex1' description='WOW1' time='7:00PM' />
      <CommentDetail name='Alex2' description='WOW2' time='8:00PM' />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
