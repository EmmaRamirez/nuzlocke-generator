export const isEmpty = (value: any) => {
    if (value == null) return true;
    if (value.toString() === '') return true;
    if (!value.length) return true;
    return false;
};
