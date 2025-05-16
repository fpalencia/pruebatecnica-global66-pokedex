import { ref, watchEffect } from "vue";
import { usePokemonsList } from "../pokemons/usePokemonsList";
import { usePokemonStore } from "../../store/usePokemonStore";
import { useInfiniteScroll } from '@vueuse/core'
import { useCustomVirtualList } from "../custom/useCustomVirtualList";

export const usePokemons = (
  pokemonListProvider = usePokemonsList, 
  storeProvider = usePokemonStore,
  options = { maxPages: 40, scrollDistance: 10, scrollThrottle: 600 }
) => {
  
  const store = storeProvider();
  const page = ref<number>(0);
  const pokemonsList = ref<string[]>([])
  const scrollContainerRef = ref<HTMLElement | null>(null);
  const { pokemons } = pokemonListProvider(page);

  const initialLoad = ref<boolean>(store.initialLoad);

  watchEffect(() => {
    store.setPokemons(pokemons.value ?? {});
  })

  watchEffect(() => {
    if (Object.keys(store.pokemons).length !== 0) {
      store.setInitialLoad(false)
      initialLoad.value = false
    }
    pokemonsList.value = Object.keys(store.pokemons)
  })

  const { list, containerProps, wrapperProps } = useCustomVirtualList(pokemonsList, {
    itemHeight: 40
  })

  const fetchNextPage = async () => {
    if (pokemonsList.value.length === 0 && page.value === 0) return Promise.resolve()
    if (page.value > options.maxPages) return Promise.resolve()

    page.value = page.value + 1

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
      }, 100)
    })
  }

  useInfiniteScroll(scrollContainerRef, () => {
    fetchNextPage()
  }, {
    distance: options.scrollDistance,
    throttle: options.scrollThrottle
  })

  return {
    list,
    containerProps,
    wrapperProps,
    initialLoad,
    fetchNextPage,
    scrollContainerRef
  }
}