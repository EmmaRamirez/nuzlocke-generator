declare const features: Features;

export type FeatureList = 'fileUploads' |
                          'themeEditing' |
                          'multipleNuzlockes'
;

export type Features = { [F in FeatureList]?: boolean };

export const FEATURES: Features = Object.freeze({
    fileUploads: features.fileUploads,
    themeEditing: features.themeEditing,
    multipleNuzlockes: features.multipleNuzlockes,
});