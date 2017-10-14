import { typeToColor } from './typeToColor';

export const getBackgroundGradient = (typeA:string, typeB:string):string => {
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