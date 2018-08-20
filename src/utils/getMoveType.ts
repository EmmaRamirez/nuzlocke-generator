import { movesByType } from 'utils';
import { Types } from './Types';

export const getMoveType = (move: string): Types => {
    for (const type in movesByType) {
        if (movesByType.hasOwnProperty(type)) {
            if (
                movesByType[type].some((value) => {
                    return move === value;
                })
            ) {
                return Types[type];
            }
        }
    }

    return Types.Normal;
};