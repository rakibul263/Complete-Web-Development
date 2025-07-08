import React from 'react';

const Post = ({post}) => {
    return (
        <div className='card'>
            <h4>Title: {post.title}</h4>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;