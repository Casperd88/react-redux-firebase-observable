import { createAsyncAction } from "typesafe-actions";
import { User } from "./types";

export const getCurrentUser = createAsyncAction(
  "@user/FETCH_CURRENT_REQUEST",
  "@user/FETCH_CURRENT_SUCCESS",
  "@user/FETCH_CURRENT_FAILURE"
)<undefined, User, Error>();
