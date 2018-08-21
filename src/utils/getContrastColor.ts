import * as Color from 'color';

export const getContrastColor = (color: string) => {
    const c = Color(color);
    if (c.isLight()) return '#000000';
    if (c.isDark()) return '#FFFFFF';
    return '#000000';
};