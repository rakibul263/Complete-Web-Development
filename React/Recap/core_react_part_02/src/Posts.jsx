import { use } from "react"
import Post from "./Post"

export default function Posts({postsPromise}){
    const posts = use(postsPromise);
    return (
        <div className="card">
            <h3>Posts : {posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}