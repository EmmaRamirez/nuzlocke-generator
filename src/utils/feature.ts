const featuresFromEnv = {
    themeEditing: process.env.THEME_EDITING,
    temTemMode: process.env.TEM_TEM_SUPPORT,
    multipleNuzlockes: process.env.MULTIPLE_NUZLOCKES,
    fileUploads: process.env.FILE_UPLOADS,
    newHotkeys: process.env.NEW_HOTKEYS,
    resultv2: process.env.RESULT_V2,
    hallOfFame: process.env.HALL_OF_FAME,
    locks: process.env.LOCKS,
    gen2saves: process.env.GEN2_SAVES,
};

interface BooleanObject {
    [x: string]: boolean;
}

const featuresToBooleans = (f: typeof featuresFromEnv): BooleanObject => {
    const obj = {};
    for (const feature in f) {
        obj[feature] = Boolean(f[feature]);
    }
    return obj;
};

export const feature = Object.freeze(featuresToBooleans(featuresFromEnv));
