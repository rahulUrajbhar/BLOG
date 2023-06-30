import "./singlePost.css"

export const SinglePost = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img className="SinglePostImg" src="https://images.ctfassets.net/hrltx12pl8hq/29slzVZfucEQwKoKc8QcEA/ed7ceb74525e822dd3eb888f570f0d52/adventure?fit=fill&w=840&h=473&fm=webp" alt="" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet
              <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i class="singlePostIcon fa-solid fa-trash"></i>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>RAJ</b></span>
                <span className="singlePostDate">1hour ago</span>
            </div>
            <p className="singlePostDisc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsam facilis enim alias est laboriosam magni similique dignissimos soluta, neque, dicta corporis. Esse quidem natus pariatur odit quaerat rem officia ipsum dolor sit amet consectetur adipisicing elit. Quos ipsam facilis enim alias est laboriosam magni similique dignissimos soluta, neque, dicta corporis. Esse quidem natus pariatur odit quaerat rem officiavipsum dolor sit amet consectetur adipisicing elit. Quos ipsam facilis enim alias est laboriosam magni similique dignissimos soluta, neque, dicta corporis. Esse quidem natus pariatur odit quaerat rem officia ipsum dolor sit amet consectetur adipisicing elit. Quos ipsam facilis enim alias est laboriosam magni similique dignissimos soluta, neque, dicta corporis. Esse quidem natus pariatur odit quaerat rem officia ipsum dolor sit amet consectetur adipisicing elit. Quos ipsam facilis enim alias est laboriosam magni similique dignissimos soluta, neque, dicta corporis. Esse quidem natus pariatur odit quaerat rem officia.</p>
        </div>
    </div>
  )
}
