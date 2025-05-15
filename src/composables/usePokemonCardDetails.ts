import { computed } from 'vue';
import { usePokemonItem } from '../composables/usePokemonItem';
import { useClipboard } from '@vueuse/core';

  
export const usePokemonCardDetails = (name_pokemon: string) => {

  const { isLoading, pokemon, isFetching } = usePokemonItem(name_pokemon)

  function capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  const pokemonInfo = computed(() => {
    if (!pokemon.value) return ''
    const noVan = ['id', 'frontSprite']
    
    // Crear una cadena de texto con las propiedades que queremos copiar
    return Object.entries(pokemon.value)
      .filter(([key]) => !noVan.includes(key))
      .map(([key, value]) => `${key}: ${value}`)
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
