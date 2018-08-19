import { Gender, GenderElementProps } from 'components';

export enum GenderTransformType {
    Standard,
    Sugimori,
    Dreamworld,
    Sprite,
}

export const significantGenderDifferenceList = [
    'Hippowdon',
    'Unfeazant',
    'Frillish',
    'Jellicent',
    'Pyroar',
    'Meowstic'
];

export const handleSignificantGenderDifference = (
    species: string,
    gender: GenderElementProps,
    type: GenderTransformType,
    sdl = significantGenderDifferenceList
) => {
    if (sdl.includes(species)) {
        if (type === GenderTransformType.Standard) {
            if (Gender.isMale(gender)) {

            }
            if (Gender.isFemale(gender)) {

            }
        }
        if (type === GenderTransformType.Sugimori) {
            if (Gender.isMale(gender)) {

            }
            if (Gender.isFemale(gender)) {

            }
        }
        if (type === GenderTransformType.Sprite) {
            if (Gender.isMale(gender)) {

            }
            if (Gender.isFemale(gender)) {

            }
        }
        if (type === GenderTransformType.Dreamworld) {
            if (Gender.isMale(gender)) {

            }
            if (Gender.isFemale(gender)) {

            }
        }
    }
    return;
};