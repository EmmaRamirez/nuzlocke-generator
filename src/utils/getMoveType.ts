import { movesByType } from 'utils';

export const getMoveType = move => {
    for (const type in movesByType) {
        if (movesByType.hasOwnProperty(type)) {
            if (
                movesByType[type].some((value, index) => {
                    return move === value;
                })
            )
                return type;
        }
    }

    return 'Normal';
};