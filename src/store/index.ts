import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { authReducer } from './auth/reducers'
import { authEpic, authLogoutEpic } from './auth/epics'
import { snackbarReducer } from './snackbar/reducers'
import { snackbarEpic } from './snackbar/epics'

const epicMiddleware = createEpicMiddleware()

const rootEpic = combineEpics(
  authEpic,
  authLogoutEpic,
  snackbarEpic
)

export default createStore(combineReducers({
  auth: authReducer,
  snackbar: snackbarReducer
}), applyMiddleware(epicMiddleware, logger))

epicMiddleware.run(rootEpic)
