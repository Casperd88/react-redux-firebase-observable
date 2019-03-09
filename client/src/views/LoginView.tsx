import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './../components/LoginForm'

const LoginView: React.FC<{}> = () => {
  return (
    <main>
      <h2>Log in</h2>
      <LoginForm />
      <Link to="/reset-password">Reset Password</Link> |
      <Link to="/register">Create Account</Link>
    </main>
  )
}

export default LoginView
