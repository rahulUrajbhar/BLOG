import "./login.css"

export default function Login() {
  return (
    <div className='login'>
        <h1 className="loginPageheader">User Login</h1>
        <form className="loginForm">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email..." />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password..."/>
        </form>
        <button className="loginButton">Login</button>
    </div>
  )
}
