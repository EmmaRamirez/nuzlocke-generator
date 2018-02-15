export interface Action<T = 'NO_ACTION_PROVIDED'> {
    type: T;
    [payload: string]: any;
    readonly meta?: any;
}
