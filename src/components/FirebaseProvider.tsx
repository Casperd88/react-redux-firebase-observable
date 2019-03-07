import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase/app'
import {loginSuccess, logoutSuccess} from '../store/auth/actions'

const dispatchToProps = {
  loginSuccess,
  logoutSuccess
}

type Props = typeof dispatchToProps & {config: object}

const FirebaseProvider: React.FC<Props> = ({
  loginSuccess,
  logoutSuccess,
  children,
  config
}) => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    firebase.initializeApp(config)
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        loginSuccess({email: String(user.email)})
      } else {
        logoutSuccess()
      }
      setLoading(false)
    })
  }, [])

  return loading ? null : (<>{children}</>)
}

export default connect(null, dispatchToProps)(FirebaseProvider)
