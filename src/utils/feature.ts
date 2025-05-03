const featuresFromEnv = {
    themeEditing: import.meta.env.THEME_EDITING,
    temTemMode: import.meta.env.TEM_TEM_SUPPORT,
    multipleNuzlockes: import.meta.env.MULTIPLE_NUZLOCKES,
    fileUploads: import.meta.env.FILE_UPLOADS,
    newHotkeys: import.meta.env.NEW_HOTKEYS,
    resultv2: import.meta.env.RESULT_V2,
    hallOfFame: import.meta.env.HALL_OF_FAME,
    locks: import.meta.env.LOCKS,
    gen2saves: import.meta.env.GEN2_SAVES,
    imageUploads: import.meta.env.IMAGE_UPLOADS,
    emmaMode: import.meta.env.EMMA_MODE,
    tcgImages: import.meta.env.TCG_IMAGES,
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
