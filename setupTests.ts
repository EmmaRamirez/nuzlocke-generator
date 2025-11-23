import Dexie from "dexie";
// eslint-disable-next-line @typescript-eslint/no-require-imports
Dexie.dependencies.indexedDB = require("fake-indexeddb");
// eslint-disable-next-line @typescript-eslint/no-require-imports
Dexie.dependencies.IDBKeyRange = require("fake-indexeddb/lib/FDBKeyRange");

(global as any).requestAnimation = (cb) => setTimeout(cb, 0);

(global as any).features = {
    fileUploads: true,
    themeEditing: true,
    multipleNuzlockes: true,
    copyingPokemon: true,
};
