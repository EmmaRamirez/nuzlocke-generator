import * as path from 'path';
import * as fs from 'fs';
import * as chalk from 'chalk';

import { listOfPokemon } from './src/utils/listOfPokemon';

const targetFile = `./images.md`;
const buildFile:string[] = [];
const alphabet:string[] = [];
let exists = 0;

function missingByGeneration (list) {
    const generationPoints = [
        { start: 0, end: 151 },
        { start: 152, end: 251 },
        { start: 252, end: 386 },
        { start: 387, end: 493 },
        { start: 494, end: 649 },
        { start: 650, end: 721 },
        { start: 722, end: 807 }
    ];

    const resultMap = generationPoints.map((point, idx) => {
        const generationList = list.slice(point.start, point.end);
        let generationTotal = 0;
        const generationMissing:string[] = [];
        for (const pokemon of generationList) {
            if (fs.existsSync(`src/img/${pokemon.toLowerCase()}.jpg`)) {
                generationTotal += 1;
            } else {
                generationMissing.push(pokemon);
            }
        }
        return `${chalk.blue(`[Gen ${idx + 1}]`)}: ${chalk.yellow(`${generationTotal}/${point.end - point.start}`)} ${chalk.red( (generationTotal / (point.end - point.start )).toFixed(2) + '%' )}, missing: ${generationMissing.join(', ')}\n`;
    });

    console.log(resultMap.join('\n'));
}

console.log(`Checking for images...`);
const pokemonList = [...listOfPokemon].sort();
for (const pokemon of pokemonList) {
    if (!alphabet.includes(pokemon.charAt(0))) {
        alphabet.push(pokemon.charAt(0));
        buildFile.push(`## ${pokemon.charAt(0)}`);
    }
    if (fs.existsSync(`src/img/${pokemon.toLowerCase()}.jpg`)) {
        buildFile.push(`- [x] ${pokemon}`);
        exists++;
    } else {
        buildFile.push(`- [ ] ${pokemon}`);
    }
}

fs.writeFile(targetFile, buildFile.join('\n'), (err) => {
    if (err) throw new Error('Failed to write file.');
    console.log(`Wrote ${targetFile} file with ${exists}/${listOfPokemon.length} ${chalk.green(`${ (exists / listOfPokemon.length).toFixed(2) }%`)} entries.`);
});

missingByGeneration(listOfPokemon);