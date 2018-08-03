import {
    addForme,
    choose,
    styleDefaults,
    matchSpeciesToTypes,
    listOfPokemon,
    speciesToNumber,
} from 'utils';

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
        expect(objectPropertiesWhere(styleDefaults, p => p)).toBe(12);
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
});

describe('speciesToNumber', () => {
    it('returns a number', () => {
        expect(speciesToNumber('Bulbasaur')).toBe(1);
        expect(speciesToNumber('Zeraora')).toBe(807);
        expect(typeof speciesToNumber(choose(listOfPokemon))).toBe('number');
    });
});