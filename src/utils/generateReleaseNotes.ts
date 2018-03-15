const badgeSelect = require('assets/badge-select.png');
const download = require('assets/download.png');
const cardsTheme = require('assets/cards-theme.png');
const spritesMode = require('assets/sprites-mode.png');

export function generateReleaseNotes(version: string) {
    return releaseNotes[version] || '';
}

const releaseNotes = {
    '0.0.1-beta': `
# Limited Beta
This is a limited beta of the application. As such, it has a shitload of bugs everywhere. Some key things to note are:

- Data _is_ saved automatically, but be sure to export data into a file often
- Data is saved via localStorage, so you may not be able to view your saved data on a different device, browser, or in incognito mode
- Images for Pokemon may not be present
- Some editor & styling options may not work
- Custom regions don't work yet
- Custom CSS is messy

# Contributing

- You can comment, request new features, or file bugs [here](https://github.com/EmmaRamirez/nuzlocke-generator/issues)
- Right now, the biggest needs are images for Pokémon and finding bugs
- If you complete your nuzlocke & document it using this, send me the final data so I can add it to a Hall of Fame!
    `,
    '0.0.2-beta': `
# Updated Beta
This is a limited beta of the application. As such, it has a shitload of bugs everywhere. Some key things to note are:

- Data _is_ saved automatically, but be sure to export data into a file often
- Data is saved via localStorage, so you may not be able to view your saved data on a different device, browser, or in incognito mode
- Images for Pokemon may not be present
- Some editor & styling options may not work
- Custom regions don't work yet
- Custom CSS is messy

# Changelog
## Features
- New badge selector! Currently works for any of the core games.

![badge](${badgeSelect})
- Toggle for Team Pokemon gradient backgrounds
- Toggle for minimal Team Pokemon layout (just image, species, nickname, and level)
- Sugimori images are available!
- Data in Export mode now can be saved as a file! (Note that this app doesn't store any of your data in servers, just localstorage)

![download](${download})

- Pokémon containers now have data attributes for easier custom CSS injection

## Fixes
- Improvements to Import Data UI -- clearer instructions and design
- Some cases (i.e. no Nature, no level, etc) for missing data have been fixed
- Move tags in editor are now properly colored
- Editing moves no longer casues deselection issues on the target Pokémon
- Pokemon in Mass Editor are now sorted by position

# Contributing
- You can comment, request new features, or file bugs [here](https://github.com/EmmaRamirez/nuzlocke-generator/issues)
- Right now, the biggest needs are images for Pokémon and finding bugs
- If you complete your nuzlocke & document it using this, send me the final data so I can add it to a Hall of Fame!
- Check out the nuzlocke forums thread [here!](http://s7.zetaboards.com/Nuzlocke_Forum/topic/11058602/1)
`,
    '0.0.3-beta': `
# Changelog

## Features
- **Rules Editor**: you can edit your ruleset and include it in the Result now!
- **Dark Mode Editor**: for additional slickness
- **More Layout Options**: control if moves display, and more!
- **Autocomplete for Species**: never wonder how to spell Zweilous again!

## Fixes
- Dead & Boxed containers now longer show up if there are dead or boxed pokemon, respectively
- Defaults Game to Red, instead of blank
- Pokémon in Mass Editor now properly sorted


You can submit bugs or feature requests [here](https://github.com/EmmaRamirez/nuzlocke-generator/issues).
    `,
    '0.0.4-beta': `
# Changelog

## Fixes
- Fixed a height issue with rendering in Firefox
- Fixed error that crashed Importing a file
- Fixed a bug where if you switch to a different Pokémon, the species name wouldn't change

## Features
- Grayscale toggle for Dead Pokemon images
- New format for met location & level + the option to keep the old format

You can submit bugs or feature requests [here](https://github.com/EmmaRamirez/nuzlocke-generator/issues).
    `,
    '0.0.5-beta': `
# Changelog

## Features
- **Sprites Mode**: enables sprites for the games. Currently doesn't work with Gen 3 because of Serebii. It will match sprites to your current Nuzlocke game.

![sprites-mode](${spritesMode})

- **Champion property**: works for Pokémon now. Displays a nice shiny badge in their info section.
- **New Theme**: a Cards-based theme
- Reset rules button

![cards-theme](${cardsTheme})

## Fixes
- Fixed bug where "name" would still show up even if Trainer name wasn't defined
- Renamed "name" field to "Trainer Name" for clarity
- Fixed coloring for Fighitng types
- Fixed issues with selecting a Pokémon using the new autocomplete
- Fixed grammar of nuzlocke rule #2

You can submit bugs or feature requests [here](https://github.com/EmmaRamirez/nuzlocke-generator/issues).
`,
    '0.0.6-beta': `
# Changelog

## Features
- **Champion status**: a status useful for multi-run nuzlockes
- **Collapsible editors**: for a slightly cleaner interface
- **Custom Icons**: property for adding custom sprite icons
- **New Theme**: Generations, useful for multi-nuzlocke runs

## Fixes
- Fixed the margins on the first row of Pokémon info
- Champion ribbons work for each region now
- Added FireRed and LeafGreen to list of games
- Sprites Mode now works with Gen 3
- Type auto-matching now works for every species
- Improved design of Cards theme for sprites
- Fixed width of info for dead Pokémon
- Autocomplete can now be navigated with arrow keys
`,
    '0.1.0-beta': `
# Changelog

# Features
- **Multiple nuzlockes**: been a long time coming, but you can now create as many nuzlockes as you please!
- **Linked nuzlockes**: and you can link + import data from one nuzlocke into another


## Fixes
`,
};
