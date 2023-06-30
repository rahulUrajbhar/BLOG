import "./post.css"
import {Link} from "react-router-dom"

export default function Post({post}) {
  return (
    <div className='post'>
      { post.photo &&(
        <img className="postImg" src="{post.photo}" alt="" />)}
      <div className="postInfo">
        <span className="postCat">
          <span className="postCatItm">{post.categories}</span>
        </span>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDisc">{post.desc}</p>
    </div>
  )
}
