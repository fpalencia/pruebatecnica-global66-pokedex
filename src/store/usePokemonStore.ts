import { ref } from "vue";
import { defineStore } from "pinia";

  export const usePokemonStore = defineStore('pokemons', () => {
    const initialLoad = ref<boolean>(false)
    const pokemons = ref<Record<string, string>>({})
    const favorites = ref<Record<string, string>>({})
  
    const setPokemons = (newPokemons: Record<string, string>) => {
      console.log("newPokemons", newPokemons)
      pokemons.value = { ...pokemons.value, ...newPokemons }
    }

    const setInitialLoad = (newInitialLoad: boolean) => {
      initialLoad.value = newInitialLoad
    }

    const addFavorite = (pokemon_name: string) => {
      favorites.value = { ...favorites.value, [pokemon_name]: pokemon_name }
    }

    const removeFavorite = (pokemon_name: string) => {
      delete favorites.value[pokemon_name]
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