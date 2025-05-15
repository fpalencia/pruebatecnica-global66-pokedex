import { ref, watchEffect } from "vue";
import { usePokemonsList } from "./usePokemonsList";
import { usePokemonStore } from "../store/usePokemonStore";
import { useInfiniteScroll } from '@vueuse/core'
import { useCustomVirtualList } from "./useCustomVirtualList";

export const usePokemons = () => {
  const store = usePokemonStore();
  const page = ref<number>(0);
  const pokemonsList = ref<string[]>([])
  const scrollContainerRef = ref<HTMLElement | null>(null);
  const { pokemons } = usePokemonsList(page);

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
    if (page.value > 40) return Promise.resolve()

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
    distance: 10,
    throttle: 600
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