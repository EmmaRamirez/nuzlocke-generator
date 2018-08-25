import {
    ThemeManager,
    DefaultDarkTheme,
    HexagonsTheme
} from '..';

describe('ThemeManager', () => {
    it('#constructor', () => {
        const manager = new ThemeManager([HexagonsTheme, DefaultDarkTheme]);
        expect(manager.themes.length).toBe(2);
        expect(manager.currentTheme.name).toBe(HexagonsTheme.name);
    });

    it('#selectTheme', () => {
        const manager = new ThemeManager([HexagonsTheme, DefaultDarkTheme]);
        manager.selectTheme(DefaultDarkTheme);
        expect(manager.currentTheme.name).toBe(DefaultDarkTheme.name);
    });
});