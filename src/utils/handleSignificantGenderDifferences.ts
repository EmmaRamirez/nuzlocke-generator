import { Gender, GenderElementProps } from 'components';

export enum GenderTransformType {
    Standard,
    Sugimori,
    Dreamworld,
    Sprite,
}

export const handleSignificantGenderDifference = (species: string, gender: GenderElementProps, type: GenderTransformType) => {
    const significantGenderDifferenceList = [
        'Unfeazant',
        'Frillish',
        'Jellicent',
        'Pyroar',
        'Meowstic'
    ];
    if (significantGenderDifferenceList.includes(species)) {
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