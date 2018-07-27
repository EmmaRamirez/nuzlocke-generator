import { Styles } from 'utils';
import { editStyle } from 'actions';

export interface Stylesheet {
    [x: string]: any;
}

export type StylesheetMethod = (o: ThemeOption[]) => Stylesheet;

export interface NumberOption {
    step: number;
    min: number;
    max: number;
}

export interface ThemeOption {
    name: string;
    options: NumberOption;
}

export interface Theme {
    disablesStyles?: Partial<keyof Styles>[];

    createStyles(options: ThemeOption[]): Stylesheet;
    onThemeInit(editStyle?: editStyle): void;
    onThemePreview(): void;

    themeOptions: ThemeOption[];
}

export abstract class Theme implements Theme {

}

export class DarkDefaultTheme extends Theme {
    public disablesStyles: Partial<keyof Styles>[] = [ 'backgroundImage' ];
    public createStyles (options) {
        return {
            'pokemonImage': {
                borderRadius: '0'
            }
        };
    }

    public onThemeInit(editStyle) {
        editStyle({ backgroundImage: '' });
    }

    public onThemePreview() {

    }
}

export class HexagonsTheme extends Theme {
    public disablesStyles: Partial<keyof Styles>[] = [ 'movesPosition' ];

    public styleSheet (options) {
        return {
            'move': {
                opacity: options['Move Transparency']
            }
        };
    }

    public themeOptions = [
        {
            name: 'Move Transparency',
            type: 'Number',
            options: {
                step: 0.1,
                min: 0,
                max: 0,
            }
        }
    ];
}