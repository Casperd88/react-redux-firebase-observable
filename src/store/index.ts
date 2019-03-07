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

export const rootReducer = combineReducers({
  auth: authReducer,
  snackbar: snackbarReducer
})

export default createStore(rootReducer, applyMiddleware(epicMiddleware, logger))

epicMiddleware.run(rootEpic)
