import { typeToColor } from './typeToColor';
import { Types } from './Types';

export const getBackgroundGradient = (typeA: keyof typeof Types, typeB: keyof typeof Types): string => {
    if (typeB == null) {
        if (typeA == null) {
            return 'transparent';
        } else {
            return `linear-gradient(to right, ${typeToColor(typeA)}, ${typeToColor(typeA)}`;
        }
    } else {
        return `linear-gradient(to right, ${typeToColor(typeA)}, ${typeToColor(typeB)}`;
    }
};
