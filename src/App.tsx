import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import Snackbar from './components/Snackbar'
import AuthRoute from './components/AuthRoute'
import LoginView from './views/LoginView'
import HomeView from './views/HomeView'
import { RootState } from './store/types'

const mapStateToProps = (state: RootState) => ({
  authInitialized: state.auth.isInitialized
})

type Props = ReturnType<typeof mapStateToProps>

const App: React.FC<Props> = ({authInitialized}) => {

  if (!authInitialized) {
    return <span>Loading...</span>
  }

  return (
    <section>
      <Snackbar />
      <Router>
        <Switch>
          <AuthRoute
            exact path="/"
            component={HomeView}
            redirectTo="/login"
            privateRoute={true}
          />
          <AuthRoute
            exact path="/login"
            component={LoginView}
            redirectTo="/"
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    </section>
  )
}

export default connect(mapStateToProps)(App)
