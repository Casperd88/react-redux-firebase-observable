import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import {authenticateSuccess, authenticateLogoutSuccess} from '../store/auth/actions'
import { User } from '../store/user/types'

interface FirebaseProviderProps {
  authenticateSuccess: (user: User) => void
  authenticateLogoutSuccess: () => void
  config: object
}

const FirebaseProvider: React.FC<FirebaseProviderProps> = ({
  authenticateSuccess,
  authenticateLogoutSuccess,
  children,
  config
}) => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        authenticateSuccess({email: String(user.email)})
      } else {
        authenticateLogoutSuccess()
      }
      setLoading(false)
    })
  }, [])

  return loading ? null : (<>{children}</>)
}

export default connect(null, dispatch => ({
  authenticateSuccess(user: User) {
    dispatch(authenticateSuccess(user))
  },
  authenticateLogoutSuccess() {
    dispatch(authenticateLogoutSuccess())
  }
}))(FirebaseProvider)
