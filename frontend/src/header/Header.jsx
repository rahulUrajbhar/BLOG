import "./header.css"

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitle">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleBG">BLOG</span>
      </div>
      <img className="headerImage" src="https://metricool.com/wp-content/uploads/jason-blackeye-364785-2.jpg" alt="images" />
    </div>
  )
}
