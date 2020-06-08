import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <h4>Are you Sure ?</h4>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name='Sam'
          timeAgo='Today at 4pm'
          content='Nice Blog Post!'
          img={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name='Ram'
          timeAgo='Today at 6pm'
          content='Good Blog Post!'
          img={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name='Shyam'
          timeAgo='Today at 9pm'
          content='Amazing Blog Post!'
          img={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
