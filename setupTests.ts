import Dexie from 'dexie';
Dexie.dependencies.indexedDB = require('fake-indexeddb');
Dexie.dependencies.IDBKeyRange = require('fake-indexeddb/lib/FDBKeyRange');

(global as any).requestAnimation = (cb) => setTimeout(cb, 0);

(global as any).features = {
    fileUploads: true,
    themeEditing: true,
    multipleNuzlockes: true,
    copyingPokemon: true,
};
