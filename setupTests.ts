(global as any).requestAnimation = (cb) => setTimeout(cb, 0);

(global as any).features = {
    fileUploads: true,
    themeEditing: true,
    multipleNuzlockes: true,
    copyingPokemon: true,
};