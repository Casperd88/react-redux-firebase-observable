import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase/app'
import { loginAuthenticationSuccess, logoutSuccess } from '../store/auth/actions'

const dispatchToProps = {
  loginAuthenticationSuccess,
  logoutSuccess
}

type Props = typeof dispatchToProps & {config: object}

const FirebaseProvider: React.FC<Props> = ({
  loginAuthenticationSuccess,
  logoutSuccess,
  children,
  config
}) => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    firebase.initializeApp(config)
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        loginAuthenticationSuccess({email: String(user.email)})
      } else {
        logoutSuccess()
      }
      setLoading(false)
    })
  }, [])

  return loading ? null : (<>{children}</>)
}

export default connect(null, dispatchToProps)(FirebaseProvider)
