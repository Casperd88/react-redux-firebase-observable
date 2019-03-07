import { createStandardAction } from 'typesafe-actions'
import { Credentials } from './types'
import { User } from '../user/types'

export const login = createStandardAction('@auth/LOGIN')<Credentials>()
export const loginSuccess = createStandardAction('@auth/LOGIN_SUCCESS')<User>()
export const loginFailure = createStandardAction('@auth/LOGIN_FAILURE')()

export const logout = createStandardAction('@auth/LOGOUT')()
export const logoutSuccess = createStandardAction('@auth/LOGOUT_SUCCESS')()
export const logoutFailure = createStandardAction('@auth/LOGOUT_FAILURE')()
