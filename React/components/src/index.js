import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

import faker from 'faker';
const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          name='Alex'
          description='WOW'
          time='6:00PM'
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name='Alex1'
          description='WOW1'
          time='7:00PM'
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name='Alex2'
          description='WOW2'
          time='8:00PM'
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <h4> Are you Sure?</h4>
        <p>This is not secure!</p>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
