import { parseGen2Save } from 'parsers';
import { loadGen2SaveFile } from './gen2';
//const file = require('./gold.sav');


describe('Gold/Silver save file', () => {
    test('it works', async () => {
        //const save = new Uint8Array(file as ArrayBuffer);

        const result = await loadGen2SaveFile('./gold.sav');

        console.log(result);

        expect(true).toBe(true);
    });
});