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
            - Custom CSS is not yet enabled

        # Contributing

    `
};