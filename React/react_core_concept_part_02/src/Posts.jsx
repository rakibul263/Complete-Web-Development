import React, { use } from 'react';
import Post from './Post';

const Posts = ({postsPromise}) => {
    const posts = use(postsPromise);
    return (
        <div className='card'>
            <h1>All Post Here : {posts.length}</h1>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;