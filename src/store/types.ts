export interface Action<T> {
  type: T
}

export interface PayloadAction<T, P> extends Action<T> {
  payload: P
}
