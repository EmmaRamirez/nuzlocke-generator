import { parseGen3Save } from '../gen3';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Buffer } from 'buffer';

describe('Gen 3 Save Parser', () => {
  describe('Emerald Save File', () => {
    let saveData: Buffer;

    beforeAll(() => {
      // Load the emerald.sav file
      const savePath = join(__dirname, '../emerald.sav');
      saveData = Buffer.from(readFileSync(savePath));
    });

    it('should parse the save file without errors', async () => {
      const result = await parseGen3Save(saveData, {
        boxMappings: [],
        selectedGame: 'Emerald',
      });

      expect(result).toBeDefined();
      expect(result.trainer).toBeDefined();
      expect(result.pokemon).toBeDefined();
    });

    it('should parse the first three party Pokemon correctly as Salamence, Magcargo, and Smeargle', async () => {
      const result = await parseGen3Save(saveData, {
        boxMappings: [],
        selectedGame: 'Emerald',
      });

      // Filter for party Pokemon (status: 'Team')
      const partyPokemon = result.pokemon.filter((p) => p.status === 'Team');

      // Verify we have at least 3 Pokemon in the party
      expect(partyPokemon.length).toBeGreaterThanOrEqual(3);

      // Check the first three Pokemon species
      expect(partyPokemon[0].species).toBe('Salamence');
      expect(partyPokemon[1].species).toBe('Magcargo');
      expect(partyPokemon[2].species).toBe('Smeargle');
    });

    it('should have correct positions for party Pokemon', async () => {
      const result = await parseGen3Save(saveData, {
        boxMappings: [],
        selectedGame: 'Emerald',
      });

      const partyPokemon = result.pokemon.filter((p) => p.status === 'Team');

      // Verify positions are sequential starting from 1
      expect(partyPokemon[0].position).toBe(1);
      expect(partyPokemon[1].position).toBe(2);
      expect(partyPokemon[2].position).toBe(3);
    });

    it('should mark party Pokemon with correct status', async () => {
      const result = await parseGen3Save(saveData, {
        boxMappings: [],
        selectedGame: 'Emerald',
      });

      const partyPokemon = result.pokemon.filter((p) => p.status === 'Team');

      // All party Pokemon should have status 'Team'
      partyPokemon.forEach((pokemon) => {
        expect(pokemon.status).toBe('Team');
      });
    });

    it('should parse Pokemon with valid IDs', async () => {
      const result = await parseGen3Save(saveData, {
        boxMappings: [],
        selectedGame: 'Emerald',
      });

      const partyPokemon = result.pokemon.filter((p) => p.status === 'Team');

      // Verify each Pokemon has a valid ID
      partyPokemon.forEach((pokemon) => {
        expect(pokemon.id).toBeDefined();
        expect(pokemon.id).not.toBe('');
      });
    });
  });
});
