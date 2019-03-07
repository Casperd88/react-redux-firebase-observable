import React from 'react'
import { connect } from 'react-redux'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import { login } from '../store/auth/actions'
import { addSnackbar } from '../store/snackbar/actions'
import { SnackbarType } from '../store/snackbar/types'
import { RootState } from '../store/types'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
})

const mapStateToProps = (state: RootState) => ({
  isAuthenticating: state.auth.isAuthenticating
})

const dispatchToProps = {
  addSnackbar,
  login
}

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchToProps

const LoginForm: React.FC<Props> = ({
  login,
  isAuthenticating,
  addSnackbar
}) => {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        addSnackbar({
          message: `Authenticating with email: ${values.email}`,
          type: SnackbarType.Success
        })
        login(values)
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

export default connect(mapStateToProps, dispatchToProps)(LoginForm)
