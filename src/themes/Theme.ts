import { Styles } from 'utils';

export interface Stylesheet {
    [x: string]: any;
}

export interface Theme {
    disablesStyles?: Partial<keyof Styles>[];
    styleSheet: Stylesheet;

    onThemeInit(editStyle?: Function): void;
    onThemePreview(): void;
}

export abstract class Theme implements Theme {

}

export class DarkDefaultTheme extends Theme {
    public disablesStyles: Partial<keyof Styles>[] = [ 'backgroundImage' ];
    public styleSheet = {
        'pokemonImage': {
            borderRadius: '0'
        }
    };

    public onThemeInit(editStyle) {
        editStyle({ backgroundImage: '' });
    }

    public onThemePreview() {

    }
}