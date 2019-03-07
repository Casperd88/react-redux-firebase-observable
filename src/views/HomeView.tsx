import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../store/auth/actions'

const dispatchToProps = {logout}

const Home: React.FC<typeof dispatchToProps> = ({logout}) => {
  return (
    <main>
      <h1>HomeView</h1>
      <button onClick={() => logout()}>Logout()</button>
    </main>
  )
}

export default connect(null, dispatchToProps)(Home)
