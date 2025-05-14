<script setup lang="ts">
import { onMounted } from 'vue'
import PokemonList from '../../components/pokemon/PokemonList.vue'
import { usePokemons } from './composable/usePokemons'

const { containerProps, wrapperProps, initialLoad, pokemonsList } = usePokemons()

</script>

<template>
<!--   <div v-if="initialLoad" class="flex flex-col items-center justify-center h-screen">
    <IconPokeball class="w-24 h-24 border-4 border-white rounded-full animate-spin mb-4" />
    <p class="text-lg text-gray-600">Cargando Pokémons...</p>
  </div> -->
  <div class="container mx-auto px-4 h-screen" :v-bind="containerProps">
    <PokemonList 
      v-bind="wrapperProps"
     :pokemons="pokemonsList"
     />
  </div>
</template>