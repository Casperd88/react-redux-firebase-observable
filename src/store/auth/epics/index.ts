import { combineEpics } from 'redux-observable'
import loginEpic from './loginEpic'
import logoutEpic from './logoutEpic'

export default combineEpics(loginEpic, logoutEpic)
