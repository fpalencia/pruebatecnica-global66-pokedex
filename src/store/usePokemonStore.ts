import { ref } from "vue";
import { defineStore } from "pinia";

  export const usePokemonStore = defineStore('pokemons', () => {
    const initialLoad = ref<boolean>(false)
    const pokemons = ref<Record<string, string>>({})
  
  
    const setPokemons = (newPokemons: Record<string, string>) => {
      console.log("newPokemons", newPokemons)
      pokemons.value = { ...pokemons.value, ...newPokemons }
    }

    const setInitialLoad = (newInitialLoad: boolean) => {
      initialLoad.value = newInitialLoad
    }

    return {
      setPokemons,
      setInitialLoad,
      initialLoad,
      pokemons
    }
  })