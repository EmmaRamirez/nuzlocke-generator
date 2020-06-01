import { movesByType } from 'utils';
import { Types } from './Types';

export const getMoveType = (move: string): Types => {
    for (const type in movesByType) {
        if (movesByType.hasOwnProperty(type)) {
            if (
                movesByType[type as Types].some((value) => {
                    return move.toLowerCase() === value.toLowerCase();
                })
            ) {
                return Types[type as Types];
            }
        }
    }

    return Types.Normal;
};
