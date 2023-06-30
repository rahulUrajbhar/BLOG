import "./register.css"

export default function Register() {
  return (
    <div className='register'>
        <h1 className="registerPageheader">User Register</h1>
        <form className="registerForm">
            <label htmlFor="text">Username</label>
            <input type="text" placeholder="Enter your username..." />
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email..." />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password..."/>
            <label htmlFor="password">Re-Password</label>
            <input type="password" placeholder="Enter same password..."/>
        </form>
        <button className="registerAccountBtn" >Register Account</button>
    </div>
  )
}
