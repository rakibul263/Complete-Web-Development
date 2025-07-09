import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handelBookmark, disabled, handelMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    // console.log(blogs);

    return (
        <div>
            <h2 className='text-3xl font-bold'>Total : {blogs.length}</h2>
            <div className="all-blogs grid grid-cols-2 gap-4">
                {
                    blogs.map(blog => <Blog key={blog.id} handelBookmark={handelBookmark} handelMarkAsRead={handelMarkAsRead} disabled={disabled} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;