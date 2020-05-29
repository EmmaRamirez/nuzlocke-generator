import { Action } from './action';

export type VERSION_0_0_6_BETA = 'VERSION_0_0_6_BETA';
export const VERSION_0_0_6_BETA: VERSION_0_0_6_BETA = 'VERSION_0_0_6_BETA';

// eslint-disable-next-line camelcase
export function version0_0_6_BETA(): Action<VERSION_0_0_6_BETA> {
    return {
        type: VERSION_0_0_6_BETA,
    };
}
