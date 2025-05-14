import { type Ref } from 'vue'
import { getPokemons } from '../services/getPokemonsServices'
import { keepPreviousData, useQuery } from '@tanstack/vue-query'

export const usePokemonsList = (page: Ref<number>) => {
  const {
    isLoading,
    data: pokemons,
    isError,
    error,
    isFetching
  } = useQuery({
    queryKey: ['pokemons', page],
    queryFn: () => getPokemons(page.value),
    placeholderData: keepPreviousData,
    retry: 3
  })

  console.log(pokemons)

  return {
    //props
    pokemons,
    isLoading,
    isError,
    error,
    isFetching
  }
}