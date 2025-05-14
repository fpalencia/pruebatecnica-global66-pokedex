import pokemonApi from "../api/pokemonApi";
import type { PokemonsListResponse } from "../types/pokemon-list";
import { PokemonsListResponseSchema } from "../schema/pokemon-list-response-schema";


export const getPokemons = async (page: number): Promise<Record<string, string>> => {
  const limit = 20;
  const offset = page * limit;
  try {
    const response = await pokemonApi.get<PokemonsListResponse>(`/pokemon?limit=${limit}&offset=${offset}`);

    const { data } = response;

    const responseData = PokemonsListResponseSchema.safeParse(data);

    if (!responseData.success) {
      throw new Error("Datos inválidos");
    }
    
    const listPokemons = responseData.data.results.reduce((acc: Record<string, string>, curr) => {
      acc[curr.name] = curr.name
      return acc
    }, {});

    return listPokemons;
  } catch (error) {
    throw error;
  }
};
