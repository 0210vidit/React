import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        name='Alex'
        description='WOW'
        time='6:00PM'
        img={faker.image.avatar()}
      />
      <CommentDetail
        name='Alex1'
        description='WOW1'
        time='7:00PM'
        img={faker.image.avatar()}
      />
      <CommentDetail
        name='Alex2'
        description='WOW2'
        time='8:00PM'
        img={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
