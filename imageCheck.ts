import * as path from 'path';
import * as fs from 'fs';

import { listOfPokemon } from './src/utils/listOfPokemon';

const targetFile = `./images.md`;
const buildFile:string[] = [];
const alphabet:string[] = [];

console.log(`Checking for images...`);
for (const pokemon of listOfPokemon.sort()) {
    if (!alphabet.includes(pokemon.charAt(0))) {
        alphabet.push(pokemon.charAt(0));
        buildFile.push(`## ${pokemon.charAt(0)}`);
    }
    if (fs.existsSync(`src/img/${pokemon.toLowerCase()}.jpg`)) {
        buildFile.push(`[x] ${pokemon}`);
    } else {
        buildFile.push(`[ ] ${pokemon}`);
    }
}

fs.writeFile(targetFile, buildFile.join('\n'), (err) => {
    if (err) throw new Error('Failed to write file.');
});
