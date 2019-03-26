import { StateType } from "typesafe-actions";
import { rootReducer } from "./";

export type RootState = StateType<typeof rootReducer>;
