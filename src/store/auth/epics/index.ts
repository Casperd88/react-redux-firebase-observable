import { combineEpics } from 'redux-observable'
import loginEpic from './loginEpic'
import logoutEpic from './logoutEpic'
import authStateChangeEpic from './authStateChangeEpic'

export default combineEpics(loginEpic, logoutEpic, authStateChangeEpic)
