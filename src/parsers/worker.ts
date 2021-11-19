import { parseGen1Save, parseGen2Save } from '.';
import { BoxMappings } from './utils/boxMappings';

interface MessageData {
    data: {
        save?: Buffer;
        selectedGame?: string;
        boxMappings: BoxMappings;
    };
}

self.onmessage = async ({ data: { save, selectedGame, boxMappings } }: MessageData) => {
    let result;

    if (!save) {
        throw new Error('No save file detected.');
    }

    if (selectedGame === 'RBY') {
        result = await parseGen1Save(save, {
            boxMappings,
        });
    } else if (selectedGame === 'GS') {
        result = await parseGen2Save(save, {
            isCrystal: false,
            boxMappings,
        });
    } else if (selectedGame === 'Crystal') {
        result = await parseGen2Save(save, {
            isCrystal: true,
            boxMappings,
        });
    }

    // strip out invalid species
    result.pokemon = result.pokemon.filter((poke) => poke.species);

    console.log('parser', result);
    self.postMessage(result);
};
