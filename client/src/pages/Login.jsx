import { Link } from 'react-router-dom'
import './Login.css'
import Logo from '../components/Logo';

function Login() {
  const handleLogin = (event) => {
    event.preventDefault()
    alert('Login functionality will be connected later.')
  }

  return (
    <div className="login-page">
      <div className="login-overlay"></div>

      <Link to="/" className="login-back-home">
        ← Back to Home
      </Link>

      <div className="login-card">
        <Logo />

        <h1>Welcome Back!</h1>
        <p className="login-subtitle">
          Sign in to continue your FindIt journey.
        </p>

        <form onSubmit={handleLogin}>
          <div className="login-input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="login-input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="login-submit">
            Login
          </button>
        </form>

        <p className="register-text">
          Don't have an account?{' '}
          <Link to="/register">Create an account</Link>
        </p>

        <p className="login-footer">
          FindIt – Lost something? Find it here.
        </p>
      </div>
    </div>
  )
}

export default Login