import React from 'react'
import { connect } from 'react-redux'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import { authenticate } from '../store/auth/actions'
import { Credentials } from '../store/auth/types'
import { snackbarAdd } from '../store/snackbar/actions'
import { Snackbar, SnackbarType } from '../store/snackbar/types'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
})

interface LoginFormProps {
  authenticate: (credentials: Credentials) => void
  snackbarAdd: (snackbar: Snackbar) => void
  isAuthenticating: boolean
}

const LoginForm: React.FC<LoginFormProps> = ({
  authenticate,
  isAuthenticating,
  snackbarAdd
}) => {

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        snackbarAdd({
          message: `Authenticating with email: ${values.email}`,
          type: SnackbarType.Success
        })
        authenticate(values)
      }}
    >
    {({
      errors,
      touched,
      handleSubmit
    }) => (
      <form onSubmit={handleSubmit}>
        <Field type="email" name="email" placeholder="Email" /><br />
        {errors.email && touched.email ? <div>{errors.email}</div> : null}
        <Field type="password" name="password" placeholder="Password" /><br />
        {errors.password && touched.password ? <div>{errors.password}</div> : null}
        <button disabled={isAuthenticating} type="submit">Log in</button>
      </form>
    )}
    </Formik>
  )
}

export default connect((state: any) => ({
  isAuthenticating: state.auth.isAuthenticating
}), (dispatch) => {
  return {
    authenticate(credentials: Credentials) {
      dispatch(authenticate(credentials))
    },
    snackbarAdd(snackbar: Snackbar) {
      dispatch(snackbarAdd(snackbar))
    }
  }
})(LoginForm)
