export enum ComponentOptions {
    BackgroundColor = 'Background Color',
    TextColor = 'Text Color',
    Padding = 'Padding',
    Margin = 'Margin',
    BorderRadius = 'Border Radius',
}

export interface PropOptions {
    showNickname: boolean;
    showGender: boolean;
    showLevel: boolean;
}

export type Option = {
    styles: ComponentOptions[],
    props: Partial<PropOptions>,
};

export type Options = { [x: string]: Option };

export const Options: Options = {
    ChampsPokemon: {
        styles: [
            ComponentOptions.BorderRadius,
            ComponentOptions.Padding,
            ComponentOptions.Margin,
        ],
        props: {
            showNickname: true,
            showGender: false,
            showLevel: false,
        }
    }
};
