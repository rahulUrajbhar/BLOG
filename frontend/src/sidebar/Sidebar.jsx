import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sideBarItem">
          <span className="sideBarItemTitle">ABOUT ME</span>
          <img className="sideBarImg"src="https://thumbs.dreamstime.com/b/young-arab-man-wearing-casual-white-t-shirt-swearing-hand-chest-open-palm-making-loyalty-promise-oath-young-arab-man-218366964.jpg" alt="profile pic" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi voluptatem quis, itaque assumenda magnam incidunt aliquid dolor at doloribus.</p>
        </div>
        <div className="sideBarItem">
          <span className="sideBarItemTitle">CATEGORIES</span>
          <ul className="sideBarList">
            <li className="sideBarListItem">Life</li>
            <li className="sideBarListItem">Music</li>
            <li className="sideBarListItem">Sports</li>
            <li className="sideBarListItem">Style</li>
            <li className="sideBarListItem">Tech</li>
          </ul>
        </div>
        <div className="sideBarItem">
          <span className="sideBarItemTitle">FOLLOW US</span>
          <div className="sideBarSocial">
            <i className="sideBarIcon fa-brands fa-facebook"></i>
            <i className="sideBarIcon fa-brands fa-linkedin"></i>
            <i className="sideBarIcon fa-brands fa-instagram"></i>
            <i className="sideBarIcon fa-brands fa-github"></i>
          </div>
        </div>
    </div>
  )
}
