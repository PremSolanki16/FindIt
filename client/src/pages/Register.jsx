import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import Logo from '../components/Logo';

function Register() {
  const [showOTP, setShowOTP] = useState(false)

  const handleRegister = (event) => {
    event.preventDefault()
    setShowOTP(true)
  }

  const handleOTP = (event) => {
    event.preventDefault()
    alert('OTP verification will be connected to the backend later.')
  }

  return (
    <div className="register-page">
      <div className="register-overlay"></div>

      <Link to="/" className="register-back-home">
        ← Back to Home
      </Link>

      <div className="register-card">

        <div className="register-logo">
          <span>Find</span>It
        </div>

        {!showOTP ? (
          <>
            <h1>Create Account</h1>

            <p className="register-subtitle">
              Join FindIt and help reunite people with their belongings.
            </p>

            <form onSubmit={handleRegister}>

              <div className="register-input-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="register-input-group">
                <label htmlFor="registerEmail">Email Address</label>
                <input
                  type="email"
                  id="registerEmail"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="register-input-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Enter your mobile number"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required
                />
              </div>

              <div className="register-input-group">
                <label htmlFor="registerPassword">Password</label>
                <input
                  type="password"
                  id="registerPassword"
                  placeholder="Create a password"
                  required
                />
              </div>

              <div className="register-input-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <button type="submit" className="register-submit">
                Create Account
              </button>

            </form>

            <p className="register-login-text">
              Already have an account?{' '}
              <Link to="/login">Login</Link>
            </p>
          </>
        ) : (
          <div className="otp-section">

            <div className="otp-icon">✉</div>

            <h1>Verify Your Email</h1>

            <p className="register-subtitle">
              We've sent a verification code to your email address.
              Enter the OTP below to continue.
            </p>

            <form onSubmit={handleOTP}>

              <div className="register-input-group">
                <label htmlFor="otp">Enter 6-Digit OTP</label>
                <input
                  type="text"
                  id="otp"
                  placeholder="Enter OTP"
                  maxLength="6"
                  pattern="[0-9]{6}"
                  inputMode="numeric"
                  required
                />
              </div>

              <button type="submit" className="register-submit">
                Verify OTP
              </button>

            </form>

            <p className="resend-otp">
              Didn't receive the code?{' '}
              <button
                type="button"
                onClick={() => alert('OTP resend will be connected later.')}
              >
                Resend OTP
              </button>
            </p>

            <button
              type="button"
              className="back-to-register"
              onClick={() => setShowOTP(false)}
            >
              ← Back to Registration
            </button>

          </div>
        )}

        <p className="register-footer">
          FindIt – Lost something? Find it here.
        </p>

      </div>
    </div>
  )
}

export default Register