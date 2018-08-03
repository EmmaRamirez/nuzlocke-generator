export interface Features {
    [prop: string]: boolean;
}

export const FEATURES: Features = Object.freeze({
    fileUploads: true,
});