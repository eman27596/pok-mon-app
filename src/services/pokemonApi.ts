import { Pokemon, PokemonListResponse } from '../types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const pokemonApi = {
  /**
   * Fetch a paginated list of Pokémon
   */
  async getPokemonList(limit: number = 20, offset: number = 0): Promise<PokemonListResponse> {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error('Failed to fetch Pokémon list');
    }
    return response.json();
  },

  /**
   * Fetch detailed information about a specific Pokémon
   */
  async getPokemonById(id: string | number): Promise<Pokemon> {
    const response = await fetch(`${BASE_URL}/pokemon/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch Pokémon with id: ${id}`);
    }
    return response.json();
  },

  /**
   * Extract Pokémon ID from URL
   */
  extractIdFromUrl(url: string): number {
    const matches = url.match(/\/pokemon\/(\d+)\//);
    return matches ? parseInt(matches[1], 10) : 0;
  },
};

