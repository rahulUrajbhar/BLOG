import { Link } from "react-router-dom";
import "./topbar.css"

function Topbar() {
  const user = false;
  return (
    <div className="top">
        <div className="topleft">
            <i className="toplefticon fa-brands fa-facebook"></i>
            <i className="toplefticon fa-brands fa-instagram"></i>
            <i className="toplefticon fa-brands fa-linkedin"></i>
            <i className="toplefticon fa-brands fa-github"></i>
        </div>
        <div className="topcenter">
            <ul className="topCenterItem">
                <li className="topCenterListitem"><Link className="link" to="/">HOME</Link></li>
                <li className="topCenterListitem"><Link className="link" to="/">ABOUT</Link></li>
                <li className="topCenterListitem"><Link className="link" to="/">CONTACT</Link></li>
                <li className="topCenterListitem"><Link className="link" to="/write">WRITE</Link></li>
                <li className="topCenterListitem"><Link className="link" to="/">{user && "LOGOUT"}</Link></li>
            </ul>
        </div>
        <div className="topright">
            { user ? (
            <img className="topRightImg"src="https://thumbs.dreamstime.com/b/young-arab-man-wearing-casual-white-t-shirt-swearing-hand-chest-open-palm-making-loyalty-promise-oath-young-arab-man-218366964.jpg" alt="profile pic" />
            ):(
                <ul className="topRightItem">
                    <li className="topRightListitem"><Link className="link" to="/login">LOGIN</Link></li>
                    <li className="topRightListitem"><Link className="link" to="/register">REGISTER</Link></li>
                </ul>
            )}
            <i className="topRightSearch fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Topbar
