
export enum TemplateName {
    DefaultLight = 'Default Light',
    DefaultDark = 'Default Dark',
    Cards = 'Cards',
    Generations = 'Generations',
    Hexagons = 'Hexagons',
    Compact = 'Compact',
    CompactWithIcons = 'Compact with Icons',
    Blank = 'Blank',
}

export const listOfThemes = [
    TemplateName.DefaultLight,
    TemplateName.DefaultDark,
    TemplateName.Cards,
    TemplateName.Generations,
    TemplateName.Hexagons,
    TemplateName.Compact,
    TemplateName.CompactWithIcons,
    TemplateName.Blank,
].sort();
