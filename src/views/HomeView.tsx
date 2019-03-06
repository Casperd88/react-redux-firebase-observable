import React from 'react'
import { connect } from 'react-redux'
import { authenticateLogout } from '../store/auth/actions'

const Home: React.FC<{logout: () => void}> = ({logout}) => {
  return (
    <>
      <h1>Welcome home</h1>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default connect(null, dispatch => ({
  logout() {
    dispatch(authenticateLogout())
  }
}))(Home)
