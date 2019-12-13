export type RadiusType = 'round' | 'square';
export type OrientationType = 'vertical' | 'horizonal';
export type TeamImagesType = 'standard' | 'sugimori' | 'dream world';

export interface Styles {
    accentColor: string;
    backgroundImage: string;
    bgColor: string;
    customCSS: string;
    displayBadges: boolean;
    displayRules: boolean;
    editorDarkMode: boolean;
    font: string;
    usePokemonGBAFont: boolean;
    iconsNextToTeamPokemon: boolean;
    imageStyle: RadiusType;
    itemStyle: RadiusType;
    grayScaleDeadPokemon: boolean;
    minimalBoxedLayout: boolean;
    minimalTeamLayout: boolean;
    minimalDeadLayout: boolean;
    movesPosition: OrientationType;
    oldMetLocationFormat: boolean;
    resultHeight: string | number;
    resultWidth: string | number;
    scaleSprites: boolean;
    showPokemonMoves: boolean;
    spritesMode: boolean;
    teamImages: TeamImagesType;
    teamPokemonBorder: boolean;
    template: string;
    tileBackground: boolean;
    topHeaderColor: string;
    trainerSectionOrientation: OrientationType;
    useSpritesForChampsPokemon: boolean;
    boxedPokemonPerLine: number;
    displayGameOriginForBoxedAndDead: boolean;
    displayBackgroundInsteadOfBadge: boolean;
    displayExtraData: boolean;
    useAutoHeight: boolean;
    displayItemAsText: boolean;
}

export const styleDefaults: Styles = {
    accentColor: '#111111',
    backgroundImage: '',
    bgColor: '#383840',
    customCSS: ``,
    displayBadges: true,
    displayRules: false,
    editorDarkMode: false,
    font: 'Open Sans',
    iconsNextToTeamPokemon: false,
    imageStyle: 'round',
    itemStyle: 'round',
    grayScaleDeadPokemon: false,
    minimalBoxedLayout: false,
    minimalTeamLayout: false,
    minimalDeadLayout: false,
    movesPosition: 'horizontal' as OrientationType,
    oldMetLocationFormat: false,
    resultHeight: '900',
    resultWidth: '1200',
    scaleSprites: false,
    showPokemonMoves: true,
    spritesMode: false,
    teamImages: 'standard',
    teamPokemonBorder: true,
    template: 'Default Dark',
    tileBackground: false,
    topHeaderColor: '#333333',
    trainerSectionOrientation: 'horizonal' as OrientationType,
    useSpritesForChampsPokemon: false,
    boxedPokemonPerLine: 6,
    displayGameOriginForBoxedAndDead: false,
    displayBackgroundInsteadOfBadge: false,
    displayExtraData: true,
    useAutoHeight: false,
    usePokemonGBAFont: false,
    displayItemAsText: false,
};
