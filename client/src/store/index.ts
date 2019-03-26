import { useState, useEffect } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Observable, Observer } from "rxjs";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { authReducer } from "./auth/reducers";
import authEpic from "./auth/epics";
import { snackbarReducer } from "./snackbar/reducers";
import { snackbarEpic } from "./snackbar/epics";
import { systemReducer } from "./system/reducers";
import firebase from "firebase/app";
import { RootState } from "./types";

firebase.initializeApp({
  apiKey: "AIzaSyBtInYXRdWfAwie-UnmrUUpyGhsW3P6Ij0",
  authDomain: "vana-98857.firebaseapp.com",
  databaseURL: "https://vana-98857.firebaseio.com",
  projectId: "vana-98857",
  storageBucket: "vana-98857.appspot.com",
  messagingSenderId: "76208259200"
});

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(authEpic, snackbarEpic);

export const rootReducer = combineReducers({
  auth: authReducer,
  snackbar: snackbarReducer,
  system: systemReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware, logger)
);

export const state$ = Observable.create((observer: Observer<RootState>) => {
  const unsubscribe = store.subscribe(() => {
    observer.next(store.getState());
  });
  return () => unsubscribe();
});

export function useStateStream<T>(
  cb: (state$: Observable<RootState>) => Observable<T>,
  defaultValue: T
): T {
  const [value, setValue] = useState<T>(defaultValue);
  useEffect(() => {
    const stream$ = cb(state$);
    const subscription = stream$.subscribe((newValue: T) => setValue(newValue));
    return () => subscription.unsubscribe();
  });
  return value;
}

epicMiddleware.run(rootEpic);
