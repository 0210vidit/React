import React from 'react';
import ReactDOM from 'react-dom';

import faker from 'faker';
import { CommentDetail } from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className=' ui container comments'>
      <ApprovalCard>Are you sure you want to do this</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Today at 4:00 pm'
          comment='Good Post'
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Robert'
          timeAgo='Yesterday at 4:00 pm'
          comment='Nice Post'
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Jane'
          timeAgo='Today at 6:00 pm'
          comment='Amzing Post'
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
