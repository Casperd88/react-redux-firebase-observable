import { Epic } from "redux-observable";
import { mergeMap, filter, catchError, throttleTime } from "rxjs/operators";
import { of, from } from "rxjs";
import { isActionOf } from "typesafe-actions";
import firebase from "firebase/app";
import "firebase/auth";
import { login } from "../actions";
import { addSnackbar } from "../../snackbar/actions";
import { SnackbarType } from "../../snackbar/types";

const loginEpic: Epic = action$ => {
  return action$.pipe(
    filter(isActionOf(login.request)),
    throttleTime(3000),
    mergeMap(({ payload: { email, password } }) =>
      from(firebase.auth().signInWithEmailAndPassword(email, password)).pipe(
        mergeMap(async () => {
          try {
            const currentUser = firebase.auth().currentUser;
            if (currentUser !== null) {
              const token = await currentUser.getIdToken();
              return login.success(token);
            }
          } catch (error) {
            throw error;
          }
        }),
        catchError(error => {
          return of(
            login.failure(error),
            addSnackbar({ message: "Login failed", type: SnackbarType.Error })
          );
        })
      )
    )
  );
};

export default loginEpic;
