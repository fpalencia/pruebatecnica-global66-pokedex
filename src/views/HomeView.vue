<script setup lang="ts">
import IconPikachu from '../components/icons/IconPikachu.vue'
import { useRouter } from 'vue-router'
import { getPokemons } from '../services/getPokemonServices'
import { watchEffect } from 'vue'
import { usePokemonStore } from '../store/usePokemonStore'

const store = usePokemonStore()
const router = useRouter()

watchEffect(() => {
  console.log(store.initialLoad)
})

const handleGetStarted = () => {
  store.setInitialLoad(true)
  router.push('/pokemons')
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-white p-4">
    <div class="w-100 h-100 mb-6">
      <IconPikachu class="w-full h-full" />
    </div>
    
    <h1 class="text-3xl font-bold text-gray-800 mb-4">Welcome to Pokédex</h1>
    
    <p class="text-center text-gray-600 max-w-md mb-8">
      The digital encyclopedia created by Professor Oak is an invaluable tool 
      to Trainers in the Pokémon world.
    </p>
    
    <button class="bg-[#F22539] hover:bg-[#C00E20] text-white font-medium py-2 px-6 rounded-full transition duration-300 cursor-pointer" @click="handleGetStarted">
      Get started
    </button>
  </div>
</template>