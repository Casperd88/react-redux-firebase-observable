import { Epic } from "redux-observable";
import { map, delay, filter } from "rxjs/operators";
import { removeSnackbar, addSnackbar } from "./actions";
import { isActionOf } from "typesafe-actions";

export const snackbarEpic: Epic = action$ => {
  return action$.pipe(
    filter(isActionOf(addSnackbar)),
    delay(3000),
    map(action => removeSnackbar(action.payload))
  );
};
