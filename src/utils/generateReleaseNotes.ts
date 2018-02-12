const badgeSelect = require('assets/badge-select.png');
const download = require('assets/download.png');

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


## Fixes
- Improvements to Import Data UI -- clearer instructions and design
- Some cases (i.e. no Nature, no level, etc) for missing data have been fixed
- Move tags in editor are now properly colored


# Contributing
- You can comment, request new features, or file bugs [here](https://github.com/EmmaRamirez/nuzlocke-generator/issues)
- Right now, the biggest needs are images for Pokémon and finding bugs
- If you complete your nuzlocke & document it using this, send me the final data so I can add it to a Hall of Fame!
- Check out the nuzlocke forums thread [here!](http://s7.zetaboards.com/Nuzlocke_Forum/topic/11058602/1)
`
};
