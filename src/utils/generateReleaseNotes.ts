export function generateReleaseNotes(version:string) {
    return releaseNotes[version] || '';
}

const releaseNotes = {
    '0.0.1-beta': `
# Limited Beta
This is a limited beta of the application. As such, it has a shitload of bugs everywhere. Some key things to note are:

- Data _is_ saved automatically, but be sure to export data into a file often
- Images for Pokemon may not be present
- Some editor & styling options may not work
- Custom regions don't work yet
- Custom CSS is messy

# Contributing

- You can comment, request new features, or file bugs [here](https://github.com/EmmaRamirez/nuzlocke-generator/issues)
- Right now, the biggest needs are images for Pokémon and finding bugs
- If you complete your nuzlocke & document it using this, send me the final data so I can add it to a Hall of Fame!
    `
};