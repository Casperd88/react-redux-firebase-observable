import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { authReducer } from './auth/reducers'
import authEpic from './auth/epics'
import { snackbarReducer } from './snackbar/reducers'
import { snackbarEpic } from './snackbar/epics'
import { systemReducer } from './system/reducers'
import firebase from 'firebase/app'

firebase.initializeApp({
  apiKey: "AIzaSyBtInYXRdWfAwie-UnmrUUpyGhsW3P6Ij0",
  authDomain: "vana-98857.firebaseapp.com",
  databaseURL: "https://vana-98857.firebaseio.com",
  projectId: "vana-98857",
  storageBucket: "vana-98857.appspot.com",
  messagingSenderId: "76208259200"
})

const epicMiddleware = createEpicMiddleware()

const rootEpic = combineEpics(
  authEpic,
  snackbarEpic
)

export const rootReducer = combineReducers({
  auth: authReducer,
  snackbar: snackbarReducer,
  system: systemReducer
})

export default createStore(
  rootReducer,
  applyMiddleware(epicMiddleware, logger)
)

epicMiddleware.run(rootEpic)
