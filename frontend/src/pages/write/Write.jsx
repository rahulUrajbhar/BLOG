import "./write.css"

import React from 'react'

export default function Write() {
  return (
    <div className='write'>
        <img className="writeImg" src="https://images.ctfassets.net/hrltx12pl8hq/29slzVZfucEQwKoKc8QcEA/ed7ceb74525e822dd3eb888f570f0d52/adventure?fit=fill&w=840&h=473&fm=webp" alt="" />
        <form className="writeForm">
            <div className="writeFormGrp">
                <label htmlFor="inputFile">
                    <i class="inutFileIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="inputFile" style={{display: "none"}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGrp">
                <textarea placeholder="Tell Your Store" type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeButton">Publish</button>
        </form>
    </div>
  )
}
