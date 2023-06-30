import "./setting.css"
import Sidebar from "../../sidebar/Sidebar"
import React from 'react'

export default function Setting() {
  return (
    <div className="setting">
        <div className="settingWrapper">
          <div className="settingTitle">
            <span className="settingUpdateTitle">Update Your Account</span>
            <span className="settingDeleteTitle">Delete Account</span>
          </div>
          <form className="settingForm">
            <label className="profileImg">Profile Picture</label>
            <div className="settingPP">
              <img className="settingPPImg" src="https://t3.ftcdn.net/jpg/05/78/94/30/360_F_578943050_k5WK1FpgkZrheRnEm4Ta0svlZy4eoe8f.jpg" alt="" />
              <label htmlFor="fileInput">
                <i className="settingPPIcon far fa-user-circle"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>
            <div className="settingInoutfeilds">
              <label className="input">Username</label>
              <input type="text" className="inputValue" placeholder="Safak" />
              <label className="input">Email</label>
              <input type="email" className="inputValue" placeholder="Safak@gmail.com" />
              <label className="input">Password</label>
              <input className="inputValue" type="password" placeholder="Enter your password"/>
              <button className="settingSubmit">Submit</button>
            </div>
          </form>
        </div>
        <Sidebar />
    </div>
  )
}
