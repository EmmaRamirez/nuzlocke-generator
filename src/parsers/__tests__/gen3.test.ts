import { describe, it, expect, beforeAll } from 'vitest';
import { parseGen3Save } from '../gen3';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'node:path';
import { Buffer } from 'buffer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

    it('should parse the first team Pokemon moveset correctly', async () => {
      const result = await parseGen3Save(saveData, {
        boxMappings: [],
        selectedGame: 'Emerald',
      });

      const partyPokemon = result.pokemon.filter((p) => p.status === 'Team');

      // Get the first party Pokemon (Salamence)
      const firstPokemon = partyPokemon[0];

      // Verify the moveset
      expect(firstPokemon.moves).toBeDefined();
      expect(firstPokemon.moves).toEqual(['Headbutt', 'Ember', 'Dragon Breath', 'Fly']);
    });

    it('should parse the first three boxed Pokemon correctly as Bulbasaur, Ivysaur, and Venusaur', async () => {
      const result = await parseGen3Save(saveData, {
        boxMappings: [],
        selectedGame: 'Emerald',
      });

      // Filter for boxed Pokemon (status: 'Boxed')
      const boxedPokemon = result.pokemon.filter((p) => p.status === 'Boxed');

      // Verify we have at least 3 Pokemon in boxes
      expect(boxedPokemon.length).toBeGreaterThanOrEqual(3);

      // Check the first three boxed Pokemon species
      expect(boxedPokemon[0].species).toBe('Bulbasaur');
      expect(boxedPokemon[1].species).toBe('Ivysaur');
      expect(boxedPokemon[2].species).toBe('Venusaur');
    });

    it('should parse the first three dead Pokemon correctly as Nidoqueen, Nidoran♂, and Nidorino', async () => {
      const result = await parseGen3Save(saveData, {
        boxMappings: [
          { key: 1, status: 'Boxed' },
          { key: 2, status: 'Dead' },
        ],
        selectedGame: 'Emerald',
      });

      // Filter for dead Pokemon (status: 'Dead')
      const deadPokemon = result.pokemon.filter((p) => p.status === 'Dead');

      // Verify we have at least 3 dead Pokemon
      expect(deadPokemon.length).toBeGreaterThanOrEqual(3);

      // Check the first three dead Pokemon species
      expect(deadPokemon[0].species).toBe('Nidoqueen');
      expect(deadPokemon[1].species).toBe('Nidoran♂');
      expect(deadPokemon[2].species).toBe('Nidorino');
    });
  });
});
