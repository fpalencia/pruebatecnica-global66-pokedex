import { ref, watchEffect } from "vue";
import { usePokemonsList } from "../../../components/pokemon/composable/usePokemonsList";
import { usePokemonStore } from "../../../store/usePokemonStore";
import { useInfiniteScroll, useVirtualList } from '@vueuse/core'

export const usePokemons = () => {
  const store = usePokemonStore();
  const page = ref<number>(0);
  const { pokemons } = usePokemonsList(page);

  const initialLoad = ref<boolean>(store.initialLoad);

  watchEffect(() => {
    store.setPokemons(pokemons.value ?? {});
  })

  const pokemonsList = ref<string[]>([])

  watchEffect(() => {
    if (Object.keys(store.pokemons).length !== 0) {
      store.setInitialLoad(false)
      initialLoad.value = false
    }
    pokemonsList.value = Object.keys(store.pokemons)
  })

  console.log(pokemonsList)

  const { list, containerProps, wrapperProps } = useVirtualList(pokemonsList, {
    itemHeight: 54,
    overscan: 10
  })

  const loadMorePosts = () => {
    if (pokemonsList.value.length === 0 && page.value === 0) return
    if (page.value > 64) return
    page.value = page.value + 1
  }

  useInfiniteScroll(containerProps.ref, loadMorePosts, { distance: 80 })

  return {
    list,
    containerProps,
    wrapperProps,
    initialLoad,
    pokemonsList
  }
}