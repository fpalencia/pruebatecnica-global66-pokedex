<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const valueInputSearch = ref<string>(route.query.name as string || '')

const searchPokemon = async (namePokemon: string) => {
  router.push({ name: 'pokemon-search', query: { name: namePokemon } })
}

const handleSearch = () => {
  if (valueInputSearch.value && valueInputSearch.value.trim()) {
    searchPokemon(valueInputSearch.value.trim())
  }
}

const clearSearch = () => {
  valueInputSearch.value = ''
  router.push({ name: 'pokemons' })
}

watchEffect(() => {
  valueInputSearch.value = route.query.name as string || ''
})
</script>

<template>
  <div class="relative w-full max-w-xl mx-auto py-8">
    <div class="flex items-center bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow duration-300">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6 text-gray-500 mr-3" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
        />
      </svg>
      <input
        class="w-full py-2 px-3 text-lg focus:outline-none placeholder-gray-400"
        type="text"
        name="search"
        placeholder="Search pokemon..."
        v-model="valueInputSearch"
        @keyup.enter="handleSearch"
      />
      <button 
        v-if="valueInputSearch" 
        @click="clearSearch" 
        class="text-gray-500 hover:text-gray-700 focus:outline-none"
        aria-label="Limpiar búsqueda"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-5 w-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M6 18L18 6M6 6l12 12" 
          />
        </svg>
      </button>
    </div>
  </div>
</template>