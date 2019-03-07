import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Snackbar from './components/Snackbar'
import AuthRoute from './components/AuthRoute'
import LoginView from './views/LoginView'
import HomeView from './views/HomeView'

const App = () => {
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
        </Switch>
      </Router>
    </section>
  )
}

export default App
