
export const classWithDarkTheme = (css: any, name: string, condition: boolean = true) => {
    return { name,  [css[`${name}_dark`]]: condition };
};