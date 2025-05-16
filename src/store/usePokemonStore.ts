import { ref } from "vue";
import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';

export const usePokemonStore = defineStore('pokemons', () => {
  // State
  const initialLoad = ref<boolean>(false)
  const pokemons = ref<Record<string, string>>({})
  const favorites = useStorage<Record<string, string>>('pokemon-favorites', {})
  
  // Actions
  const setInitialLoad = (newInitialLoad: boolean) => {
    initialLoad.value = newInitialLoad
  }
  
  const setPokemons = (newPokemons: Record<string, string>) => {
    pokemons.value = { ...pokemons.value, ...newPokemons }
  }

  const addFavorite = (pokemonName: string) => {
    if (isFavorite(pokemonName)) return;
    favorites.value = { ...favorites.value, [pokemonName]: pokemonName }
  }

  const removeFavorite = (pokemonName: string) => {
    if (!isFavorite(pokemonName)) return;
    const newFavorites = { ...favorites.value }
    delete newFavorites[pokemonName]
    favorites.value = newFavorites
  }

  const isFavorite = (pokemonName: string): boolean => {
    return Boolean(favorites.value[pokemonName])
  }

  const toggleFavorite = (pokemonName: string): void => {
    isFavorite(pokemonName) ? removeFavorite(pokemonName) : addFavorite(pokemonName)
  }

  return {
    setPokemons,
    setInitialLoad,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    initialLoad,
    pokemons,
    favorites
  }
})