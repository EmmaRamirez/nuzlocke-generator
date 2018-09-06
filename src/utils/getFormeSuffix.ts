import { Forme } from './Forme';

export const getFormeSuffix = (forme: keyof typeof Forme) => {
    if (forme == null) return '';
    if (Forme[forme]) return `-${Forme[forme]}`;
    return '';
};