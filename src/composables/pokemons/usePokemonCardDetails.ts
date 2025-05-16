import { computed } from 'vue';
import { usePokemonItem } from '../pokemons/usePokemonItem';
import { useClipboard } from '@vueuse/core';

  
export const usePokemonCardDetails = (pokemonName: string) => {

  const { isLoading, pokemon, isFetching } = usePokemonItem(pokemonName)

  function capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  const pokemonInfo = computed(() => {
    if (!pokemon.value) return ''
    const excludedProperties = ['id', 'frontSprite']
    
    return Object.entries(pokemon.value)
      .filter(([key]) => !excludedProperties.includes(key))
      .map(([key, value]) => `${capitalizeFirstLetter(key)}: ${value}`)
      .join(', ')
  })

  const { copy, copied } = useClipboard({ source: pokemonInfo })

  return {
    copied,
    copy,
    pokemon,
    isLoading,
    capitalizeFirstLetter,
    isFetching
  }
}
