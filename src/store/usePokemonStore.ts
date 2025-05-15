import { ref } from "vue";
import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';

export const usePokemonStore = defineStore('pokemons', () => {
  const initialLoad = ref<boolean>(false)
  const pokemons = ref<Record<string, string>>({})
  const favorites = useStorage<Record<string, string>>('pokemon-favorites', {})
  
  const setPokemons = (newPokemons: Record<string, string>) => {
    pokemons.value = { ...pokemons.value, ...newPokemons }
  }

  const setInitialLoad = (newInitialLoad: boolean) => {
    initialLoad.value = newInitialLoad
  }

  const addFavorite = (pokemon_name: string) => {
    favorites.value = { ...favorites.value, [pokemon_name]: pokemon_name }
  }

  const removeFavorite = (pokemon_name: string) => {
    const newFavorites = { ...favorites.value }
    delete newFavorites[pokemon_name]
    favorites.value = newFavorites
  }

  const isFavoriteExists = (pokemon_name: string) => {
    return favorites.value[pokemon_name]
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