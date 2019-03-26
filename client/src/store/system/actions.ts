import { createAsyncAction } from "typesafe-actions";

export const initSystem = createAsyncAction(
  "@system/INIT_REQUEST",
  "@system/INIT_SUCCESS",
  "@system/INIT_FAILURE"
)<undefined, undefined, Error>();
