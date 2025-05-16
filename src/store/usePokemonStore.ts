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
    const normalizedName = pokemonName.toLowerCase();
    if (isFavorite(normalizedName)) return;
    favorites.value = { ...favorites.value, [normalizedName]: normalizedName }
  }

  const removeFavorite = (pokemonName: string) => {
    const normalizedName = pokemonName.toLowerCase();
    if (!isFavorite(normalizedName)) return;
    const newFavorites = { ...favorites.value }
    delete newFavorites[normalizedName]
    favorites.value = newFavorites
  }

  const isFavorite = (pokemonName: string): boolean => {
    const normalizedName = pokemonName.toLowerCase();
    return Boolean(favorites.value[normalizedName])
  }

  const toggleFavorite = (pokemonName: string): void => {
    const normalizedName = pokemonName.toLowerCase();
    isFavorite(normalizedName) ? removeFavorite(normalizedName) : addFavorite(normalizedName)
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