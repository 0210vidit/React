import React from 'react';
const CommentDetail = ({ name, timeAgo, content, img }) => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={img} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {name}
        </a>
        <div className='metadata'>
          <span className='date'>{timeAgo}</span>
        </div>
        <div className='text'>{content}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
