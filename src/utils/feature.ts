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
    imageUploads: process.env.IMAGE_UPLOADS,
    emmaMode: process.env.EMMA_MODE,
    tcgImages: process.env.TCG_IMAGES,
};

type FeatureObject = {
    [K in keyof typeof featuresFromEnv]: boolean;
};

const featuresToBooleans = (f: typeof featuresFromEnv): FeatureObject => {
    const obj: Partial<FeatureObject> = {};
    for (const feature in f) {
        obj[feature] = Boolean(f[feature]);
    }
    return (obj as FeatureObject);
};

export const feature = Object.freeze(featuresToBooleans(featuresFromEnv));

console.log(feature);
