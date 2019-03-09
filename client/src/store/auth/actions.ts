import { createStandardAction } from 'typesafe-actions'
import { Credentials } from './types'
import { User } from '../user/types'

export const requestLogin = createStandardAction('@auth/LOGIN_REQUEST')<Credentials>()
export const loginRequested = createStandardAction('@auth/LOGIN_REQUESTED')()
export const login = createStandardAction('@auth/LOGIN')<User>()
export const loginFailure = createStandardAction('@auth/LOGIN_FAILURE')()

export const requestLogout = createStandardAction('@auth/LOGOUT_REQUEST')()
export const logoutRequested = createStandardAction('@auth/LOGOUT_REQUESTED')()
export const logout = createStandardAction('@auth/LOGOUT')()
export const logoutFailure = createStandardAction('@auth/LOGOUT_FAILURE')()
