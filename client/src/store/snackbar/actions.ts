import { createStandardAction } from "typesafe-actions";
import { Snackbar } from "./types";

export const addSnackbar = createStandardAction("@snackbar/ADD")<Snackbar>();
export const removeSnackbar = createStandardAction("@snackbar/REMOVE")<
  Snackbar
>();
