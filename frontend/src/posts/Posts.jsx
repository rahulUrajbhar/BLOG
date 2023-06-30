import Post from "../post/Post"
import "./posts.css"

export default function Posts({ posts, index }) {
  return (
    <div className="posts">
      {posts?.map((p, i) => (
        <Post key={i} post={p} />
      ))}
    </div>
  );
}
