import {
    addForme,
    choose,
    styleDefaults,
    matchSpeciesToTypes,
    listOfPokemon,
    speciesToNumber,
    mapTrainerImage,
} from 'utils';
import { DeepSet } from '../DeepSet';

const objectPropertiesWhere = (obj: object, filter: any) => Array.from(
    Object.values(obj)
).filter(filter).length;

expect.extend({
    toBeOneOf(received, argument) {
        const validValues = Array.isArray(argument) ? argument : [argument];
        const pass = validValues.includes(received);
        if (pass) {
            return {
                message: () => (
                `expected ${received} not to be one of [${validValues.join(', ')}]`
                ),
                pass: true,
            };
        }
        return {
            message: () => (`expected ${received} to be one of [${validValues.join(', ')}]`),
            pass: false,
        };
    },
});

describe('addForme', () => {
    it('returns an alolan species', () => {
        const forme = addForme('diglett', 'Alolan');
        expect(forme).toEqual('alolan-diglett');
    });
    it('returns a mega forme', () => {
        const forme = addForme('alakazam', 'Mega');
        expect(forme).toEqual('alakazam-mega');
    });
});

describe('choose', () => {
    it('returns a result in the array', () => {
        const dice = [1, 2, 3, 4, 5, 6];
        const chosenDice = choose<number>(dice);
        for (let i = 0; i > 10; i++) {
            (expect as any)(chosenDice).toBeOneOf(dice);
        }
    });
});

describe('styleDefaults', () => {
    it('is an object with expected values', () => {
        expect(styleDefaults).toHaveProperty('backgroundImage');
        expect(styleDefaults).toHaveProperty('topHeaderColor');
        expect(styleDefaults.editorDarkMode).toBe(false);
        expect(typeof styleDefaults).toBe('object');
        expect(styleDefaults.imageStyle).toBe('round');
        expect(objectPropertiesWhere(styleDefaults, p => p === 'round')).toBe(2);
        expect(objectPropertiesWhere(styleDefaults, p => p)).toBe(13);
    });
});

describe('matchSpeciesToType', () => {
    it('returns a type for a Pokemon', () => {
        expect(matchSpeciesToTypes('Bulbasaur')).toEqual(['Grass', 'Poison']);
        expect(matchSpeciesToTypes('Charizard')).toEqual(['Fire', 'Flying']);
        expect(matchSpeciesToTypes('Raichu', 'Alola')).toEqual(['Electric', 'Psychic']);
        //expect(matchSpeciesToTypes('Clefairy', undefined, Generation.Gen1)).toEqual(['Normal', 'Normal']);
        listOfPokemon.map((pokemon, index) => {
            expect(matchSpeciesToTypes(pokemon).length).toBeGreaterThan(0);
        });
    });

    it('works for every pokemon', () => {
        const noMatches = listOfPokemon.filter(pokemon => matchSpeciesToTypes(pokemon) == null);
        console.log(noMatches.length);
        console.log(noMatches);
        expect(false).toBe(true);
    });
});

describe('speciesToNumber', () => {
    it('returns a number', () => {
        expect(speciesToNumber('Bulbasaur')).toBe(1);
        expect(speciesToNumber('Zeraora')).toBe(807);
        expect(typeof speciesToNumber(choose(listOfPokemon))).toBe('number');
    });
});

describe('DeepSet', () => {
    it('returns an array', () => {
        const d = new DeepSet(['a', 'b', 'c', 'd']);
        expect(d.toArray()).toEqual(['a', 'b', 'c', 'd']);
    });

    it('#add', () => {
        const d = new DeepSet([
            { name: 'kay' },
            { name: 'bebe' },
            { name: 'yellow' },
            { name: 'bebe', type: 'green' },
        ]);
        d.add({ name: 'kay' });
        console.log(d);
        expect(d.toArray().length).toBe(4);
    });

    it('#has', () => {
        const d = new DeepSet([
            { name: 'kay' },
            { name: 'bebe' },
            { name: 'yellow' },
            { name: 'bebe', type: 'green' },
        ]);
        expect(d.has({ name: 'bebe', type: 'green' })).toBe(true);
    });

    it('#delete', () => {
        const d = new DeepSet([
            { name: 'kay' },
            { name: 'bebe' },
            { name: 'yellow' },
            { name: 'bebe', type: 'green' },
        ]);
        d.delete({ name: 'kay' });
        expect(d.toArray().length).toBe(3);
    });

    it('#cheapCompare', () => {
        const k = { name: 'kay' };
        const k2 = { name: 'kay' };
        console.log(DeepSet.cheapCompare(k, k2));
        expect(DeepSet.cheapCompare(k, k2)).toBe(true);
    });
});

describe('MapTrainerToImage', () => {
    it('returns an image if it matches', () => {
        const t = mapTrainerImage('Ethan');
        expect(t).toContain('ethan');
        const u = mapTrainerImage('not gonna work');
        expect(u).toBe('not gonna work');
    });
});