import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Snackbar from './components/Snackbar'
// Views
import LoginView from './views/LoginView'
import HomeView from './views/HomeView'

const App: React.FC<{isAuthenticated: boolean}> = ({isAuthenticated}) => {
  return (
    <section>
      <Snackbar />
      <Router>
        <>
        {isAuthenticated && (
          <>
            <Route exact path="/" component={HomeView} />
            <Redirect to='/' />
          </>
        )}
        {!isAuthenticated && (
          <>
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/reset-password" component={LoginView} />
            <Route exact path="/register" component={LoginView} />
            <Redirect to='/login' />
          </>
        )}
        </>
      </Router>
    </section>
  )
}

export default connect((state: any) => ({
  isAuthenticated: state.auth.isAuthenticated
}))(App)
