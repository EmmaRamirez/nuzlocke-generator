import { parseGen1Save, parseGen2Save } from '.';

interface MessageData {
    data: {
        save?: Buffer;
        selectedGame?: string;
    };
}

self.onmessage = async ({ data: { save, selectedGame } }: MessageData) => {
    let result;

    if (selectedGame === 'RBY') {
        result = await parseGen1Save(save as Buffer, {type: 'nuzlocke'});
    } else if (selectedGame === 'GS') {
        result = await parseGen2Save(save, 'nuzlocke', false);
    } else if (selectedGame === 'Crystal') {
        result = await parseGen2Save(save, 'nuzlocke', true);
    }

    // strip out invalid species
    result.pokemon = result.pokemon.filter((poke) => poke.species);

    console.log('parser', result);
    // @ts-expect-error actually valid
    self.postMessage(result);
};
