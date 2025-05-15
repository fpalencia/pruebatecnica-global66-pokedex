import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export function useSearch() {
  const route = useRoute()
  const router = useRouter()

  const searchValue = ref<string>(route.query.name as string || '')

  const searchPokemon = async (namePokemon: string) => {
    router.push({ name: 'pokemon-search', query: { name: namePokemon } })
  }

  const handleSearch = () => {
    if (searchValue.value && searchValue.value.trim()) {
      searchPokemon(searchValue.value.trim())
    }
  }

  const clearSearch = () => {
    searchValue.value = ''
    router.push({ name: 'pokemons' })
  }

  watchEffect(() => {
    searchValue.value = route.query.name as string || ''
  })

  return {
    searchValue,
    handleSearch,
    clearSearch
  }
} 