import { createStandardAction } from 'typesafe-actions'
import { Credentials } from './types'
import { User } from '../user/types'

export const loginRequest = createStandardAction('@auth/LOGIN_REQUEST')<Credentials>()
export const loginAuthenticating = createStandardAction('@auth/LOGIN_AUTHENTICATING')()
export const loginAuthenticationSuccess = createStandardAction('@auth/LOGIN_AUTHENTICATION_SUCCESS')<User>()
export const loginAuthenticationFailure = createStandardAction('@auth/LOGIN_AUTHENTICATION_FAILURE')()

export const logout = createStandardAction('@auth/LOGOUT')()
export const logoutSuccess = createStandardAction('@auth/LOGOUT_SUCCESS')()
export const logoutFailure = createStandardAction('@auth/LOGOUT_FAILURE')()
