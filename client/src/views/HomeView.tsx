import React from 'react'
import { connect } from 'react-redux'
import { requestLogout } from '../store/auth/actions'

const dispatchToProps = {requestLogout}

const Home: React.FC<typeof dispatchToProps> = ({requestLogout}) => {
  return (
    <main>
      <h1>HomeView</h1>
      <button onClick={() => requestLogout()}>Logout()</button>
    </main>
  )
}

export default connect(null, dispatchToProps)(Home)
