declare const features: Features;

export type FeatureList = 'fileUploads'
| 'themeEditing'
| 'multipleNuzlockes'
| 'copyingPokemon'
| 'temTemSupport'
;

export type Features = { [F in FeatureList]?: boolean | undefined };

export const FEATURES: Features = Object.freeze({
    // fileUploads: features?.fileUploads,
    // themeEditing: features?.themeEditing,
    // multipleNuzlockes: features?.multipleNuzlockes,
    // temTemSupport: features?.temTemSupport,
});
