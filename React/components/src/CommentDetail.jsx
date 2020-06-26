import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img src={faker.image.avatar()} alt='avatar' />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.name}
        </a>
        <div className='metadata'>
          <span className='date'>{props.description}</span>
        </div>
        <div className='text'>{props.time}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
