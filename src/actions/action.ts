export interface Action<T> {
  type: T;
  [payload: string]: any;
  readonly meta?: any;
}