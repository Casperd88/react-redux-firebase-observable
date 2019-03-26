import { createAsyncAction } from "typesafe-actions";
import { Credentials, AuthToken } from "./types";

export const login = createAsyncAction(
  "@auth/LOGIN_REQUEST",
  "@auth/LOGIN_SUCCESS",
  "@auth/LOGIN_FAILURE"
)<Credentials, AuthToken, Error>();

export const logout = createAsyncAction(
  "@auth/LOGOUT_REQUEST",
  "@auth/LOGOUT_SUCCESS",
  "@auth/LOGOUT_FAILURE"
)<undefined, undefined, Error>();
