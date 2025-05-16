import { ref } from "vue";
import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';

export const usePokemonStore = defineStore('pokemons', () => {
  // State
  const initialLoad = ref<boolean>(false)
  const pokemons = ref<Record<string, string>>({})
  const favorites = useStorage<Record<string, string>>('pokemon-favorites', {})
  
  // Actions
  const setPokemons = (newPokemons: Record<string, string>) => {
    pokemons.value = { ...pokemons.value, ...newPokemons }
  }

  const setInitialLoad = (newInitialLoad: boolean) => {
    initialLoad.value = newInitialLoad
  }

  const addFavorite = (pokemonName: string) => {
    favorites.value = { ...favorites.value, [pokemonName]: pokemonName }
  }

  const removeFavorite = (pokemonName: string) => {
    const newFavorites = { ...favorites.value }
    delete newFavorites[pokemonName]
    favorites.value = newFavorites
  }

  const isFavoriteExists = (pokemonName: string) => {
    return favorites.value[pokemonName]
  }

  return {
    setPokemons,
    setInitialLoad,
    addFavorite,
    removeFavorite,
    isFavoriteExists,
    initialLoad,
    pokemons,
    favorites
  }
})