import { use } from "react"
import Post from './Post'

export default function Posts ({postPromise}) {
    // console.log(postPromise)
    const posts = use(postPromise);
    console.log(posts)
    return (
        <div className="card">
            <h3>All posts are here in this section. length : {posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}