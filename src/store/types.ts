import { StateType } from 'typesafe-actions'
import { rootReducer } from './'

export interface Action<T> {
  type: T
}

export interface PayloadAction<T, P> extends Action<T> {
  payload: P
}

export type RootState = StateType<typeof rootReducer>
