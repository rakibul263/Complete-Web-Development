import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";

const Blog = ({blog, handelBookmark, disabled, handelMarkAsRead}) => {
    // console.log(blog);
    const {cover, title, author, author_img} = blog;
    return (
        <div className="card bg-base-100 w-96 shadow-sm border-1 rounded-2xl">
        <figure>
            <img
            src= {cover}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <div className="author flex justify-around items-center">
                <h3>{author}</h3>
                <img className="w-8" src={author_img} alt="" />
                <button id={`blog-${blog.id}`} onClick={() => handelBookmark(blog)}>{disabled.includes(blog.id) ? <FaBookmark size={25} /> : <FaRegBookmark size={25}/> }</button>
            </div>
            <h2 className="card-title">{title}</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end">
            {
                blog.hashtags.map(has => <p>{has}</p>)
            }
            <button id={`btn-${blog.id}`} className="btn btn-primary" onClick={() => handelMarkAsRead(blog)}>Mark as Read</button>
            </div>
        </div>
        </div>
    );
};

export default Blog;