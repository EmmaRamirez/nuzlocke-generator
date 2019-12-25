const badgeSelect = require('assets/badge-select.png');
const download = require('assets/download.png');
const cardsTheme = require('assets/cards-theme.png');
const spritesMode = require('assets/sprites-mode.png');
const hexagonTheme = require('assets/hexagons-theme.png');
const compactTheme = require('assets/compact-theme.png');
const imageRender = require('assets/image-render.png');

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
- **Delete All Data Option**: Does that mean we're GDPR-compliant?
- **Redesigned Boxes**: Cleaner and more colorful

## Fixes
- Fixed the margins on the first row of Pokémon info
- Champion ribbons work for each region now
- Added FireRed and LeafGreen to list of games
- Sprites Mode now works with Gen 3
- Type auto-matching now works for every species
- Improved design of Cards theme for sprites
- Fixed width of info for dead Pokémon
- Autocomplete can now be navigated with arrow keys
- Fixed Alola/Mega sugimori images

## Known Issues
- Not every Pokémon has an "artsy" image
- Some gender differences don't have official art
- Types can't be set in the mass editor
- Changing the name of a box fails
- Sometimes changing a type won't work unless you reload the page
- Selecting a checkpoint sometimes undoes all others

`,
    '0.0.8-beta': `
# Changelog

## Features
- **Download Button**: you can now download nuzlocke images directly! No more print screen!
- **Autocomplete for Items**: is it Icy Drive or Chill Drive? Wonder no more!
- **Tile option for Background**: Not a big feature, but it's nice

## Fixes
- Restored selected styling in boxes
- Added margins between Game Version badge and Nuzlocke title
- Box names have been changed to be non-editable
- Sprites can now be shiny
- Pre-render screen is now considerably cuter
- Types can now be set in the mass editor

## Known Issues
- Sprites were reworked in this update, so some might be broken. This was done to make the images downloadable
- Downloaded images might have stronger anti-aliasing
- Not every Pokémon has an "artsy" image
- Some gender differences don't have official art
- Sometimes changing a type won't work unless you reload the page
- Selecting a checkpoint sometimes undoes all others
`,
    '0.0.9-beta': `
# Changelog

## Features
- **Autocomplete for Locations**: Abandoned Ship, Artisan Cave, Aether Paradise...
- **Autocomplete for Abilities**: Noticing a pattern here?
- **Hotkey support**: See the Hotkeys section below Style for more info
- **Hexagon Theme**: Consider it a beta within a beta. Enjoy!

![hexagontheme](${hexagonTheme})

## Fixes
- Added nearly all Pokémon images
- Added images for plates, gems, and berries
- Result is now scrollable for most platforms/browsers
- Mass Editor now obeys dark mode
- Faint Attack is now a move option alongside Feint Attack
- You can now click on boxed pokemon icons in the Result panel again
- Improved designs of several dialogs, such as the RulesEditor and Delete All Data screen
- Changing a type should now work in all situations
- Result notes have a bigger font-size and are bold
- Improvements to Keyboard UX of Autocomplete

## Known Issues
- Sugimori images can't be used with the download option (depending on browser)
- Selecting a checkpoint sometimes undoes all others
`,
    '0.0.10-beta': `
# Changelog

## Features
- **Drag and Drop**: It's finally here!
- **Copy Pokémon Button**: Copies the current Pokémon
- **N hotkey**: Creates a New Pokémon

## Fixes
- Earlier gen move names are now valid (Sand-Attack, Hi Jump Kick, etc)
- Likewise, move types are now correct for their Generation (Gust is Normal in Gen 1, etc)
- Fightinium Z now works
- Farfetch'd is valid again, alongside any Pokémon with weird names
- Scale sprites option now works properly
- Margin should no longer affect result downloads
- \`Game Of Origin\` value now defaults to current game

## Known Issues
- Downloading images will fail if you have cross-origin (i.e. Sugimori or custom) images
- It has also failed on some Windows + Firefox installations
- **Drag and drop will not reorder positions, you will still have to do that in the editor**
`,
    '0.0.11-beta': `
# Changelog

## Features
- **Accent colors**: more control over the look of your Nuzlocke!
    - Text auto-adjusts to contrast with your accent color
- **Compact Theme**: helps fit more data on the page

![compactTheme](${compactTheme})

## Fixes
- Autocomplete allows clicking on the items again!
- Download Image gets disabled if cross-origin resources are detected
- Games with the label \`None\` now default as the latest Generation
- Fixed an issue where Crystal's color didn't appear due to a typo
- Sprite images now use pixelated image rendering. Check out the difference!

![imageRender](${imageRender})
- The \`Exp Share\` field for Trainer data has been deprecated. Please use rules instead
- Cut down overall image sizes by about 10%
- Gold's color is now more subtle

## Known Issues
- Downloading images will fail if they contain "cross-origin" resources, which taint the process for downloading
- **Drag and drop will not reorder positions, you will still have to do that in the editor**
`,
    '0.0.12-beta': `# Changelog

## Features
- **Sprites Mode**: for Champs Pokémon
- **Egg property**: in Pokémon Editor
- **Alolan formes**: now have first-class support

## Fixes
- Autofixes on Hexagons, Generations templates
- Fixes for Farfetch'd, Mime Jr., and Mr. Mime
- Fixed colors for Diamond version
- All Pokémon now have default typings
- Typed Hidden Power can now be inputted as \`HP Fire\`, \`HP Water\`, etc
- Shuffled around fields in Pokémon editor
- Fixed issues with custom icons not working
- Decreased length of move text for font-size shrinking to happen

## Known Issues
- Downloading images will fail if they contain ["cross-origin" resources](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image), which taint the process for downloading
- **Drag and drop will not reorder positions, you will still have to do that in the editor**
`,
    '0.0.13-beta': `# Changelog

## Features
- **Custom checkpoints editor**: swap out badges, rename badges, etc
- **Hidden attribute**: hide Pokémon from the Result, simple as that
- **Boxed layout toggling**: to minimal or, err, not minimal

## Fixes
- Option \`Use Sprites for Champs Pokemon\` now correctly prevents Result download
- Alolan forme icons now work again
- Fixes for the Egg checkbox

## Known Issues
- Downloading images will fail if they contain ["cross-origin" resources](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image), which taint the process for downloading
- **Drag and drop will not reorder positions, you will still have to do that in the editor**
`,
    '0.0.14-beta': `# Changelog

## Features
- Added Meltan, Melmetal, Grookey, Scorbunny, Sobble

## Fixes
- Sudowoodo is now properly recognized as a Rock type
- More testing and dependency updates

## Known Issues
- Downloading images will fail if they contain ["cross-origin" resources](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image), which taint the process for downloading
- **Drag and drop will not reorder positions, you will still have to do that in the editor**
`,
    '0.0.15-beta': `# Changelog
## Features
- Added Dreadnaw, Gossifleur, Eldegoss, Corvinight, Wooloo, Zamazenta, and Zacian, also Yamper & Impidimp
- You can now display the Game of Origin for a Pokémon outside of Champs
- You can now set the # of Pokemon that appear per line in Boxed
- Auto Height option for Results
- Force Save option, for when you want to be really, really sure
- A minimal layout style added for Dead Pokémon

## Fixes
- Hidden now properly affects title display
- Loudred now has an image associated with it


## Known Issues
- Downloading images will fail if they contain ["cross-origin" resources](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image), which taint the process for downloading
- **Drag and drop will not reorder positions, you will still have to do that in the editor**
`,
    '0.0.16-beta': `# Changelog

## Features
- **Sword and Shield**: Pokémon data, icons, badges, and more!
- GBA-style font option

## Fixes
- Fix issues with shinies from certain games not showing up in Sprites mode

## Known Issues
- Downloading images will fail if they contain ["cross-origin" resources](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image), which taint the process for downloading
- **Drag and drop will not reorder positions, you will still have to do that in the editor**
`,
    '0.0.17-beta': `# Changelog

## Features
- **Bug Reporter**: You can now report bugs from within the UI!
- Held items can now be displayed as text
- Several improvements to the Trainer section in vertical mode

## Fixes
- Added Gigantamax sprites and forme option
- Added images that were missing for some Gen 8 Pokémon
- Fixed images and sprites for Rotom formes
- Fixed image/icons for Zygarde, Unown, Rotom, Oricorio, Shaymin and more!
- Fixed dimension issues with vertical Trainer section position

## Known Issues
- Downloading images will fail if they contain ["cross-origin" resources](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image), which taint the process for downloading
- **Drag and drop will not reorder positions, you will still have to do that in the editor**
`,
    '0.0.18-beta': `# Changelog
## Fixes
- Fixed the disaster that was Generations theme with vertical trainer orientation
- Fixed some issues with BugReporter not working
- Fixed badge misalignment for Johto games
- Fixed jank when alternating between Light and Dark mode


## Known Issues
- Downloading images will fail if they contain ["cross-origin" resources](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image), which taint the process for downloading
- **Drag and drop will not reorder positions, you will still have to do that in the editor**
    `,
    '1.0.0': `# Changelog
## Features
- **New Pokémon Options**: Pokéball, MVP, and Notes
- **Moves Editor**: Edit move types and create custom types
- Shuffle and Dream World images are now available
- Updated Checkpoints editor to allow for custom images
- You can now modify Trainer section dimensions

## Fixes
- Fixed issues with saves not working after importing a nuzlocke
- Fixed font size when using Pokémon GBA Font
- Added incense items and sprites
- Collapsing the Style editor no longer disables custom CSS
- Mega stones now appear in Autocomplete for items
- Fixed location grammar for "Starter"
- Fixed an issue where reports would not go through due to size limitations
- Made it clearer in UI when report sending fails
- Added width/height labels to dimension inputs
- Added missing gen 8 images and sprites
- Removed legacy "Champion" checkmark
- Badge sprite sizes are now uniform throughout
- Fixed spacing with "Game of Origin" info for Dead Pokémon
- Made images with Sword & Shield sprites downloadable
- Updated color inputs to allow for easier alpha channels
- Moves that are now Fairy-type (but were Normal prior to Gen 6) now display as such
- Using sprites for Champs no longer awkwardly repeats

## Known Issues
- Downloading images will fail if they contain ["cross-origin" resources](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image), which taint the process for downloading
- **Drag and drop will not reorder positions, you will still have to do that in the editor**
    `,
};
