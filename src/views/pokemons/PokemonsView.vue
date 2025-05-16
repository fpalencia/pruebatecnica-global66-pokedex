<script setup lang="ts">
import IconPokeball from '../../components/icons/IconPokeball.vue'
import PokemonList from '../../components/pokemon/PokemonList.vue'
import { usePokemons } from '../../composables/usePokemons'

const { list, initialLoad, scrollContainerRef } = usePokemons()

</script>

<template>
  <div ref="scrollContainerRef" class="px-4 h-[calc(95vh-200px)] overflow-y-auto custom-scrollbar">
    <div v-if="initialLoad" class="h-full flex flex-col items-center justify-center">
      <IconPokeball class="w-16 h-16 animate-spin" />
    </div>
    <template v-else>
      <PokemonList :pokemons="list.map((value) => value.data)" />
      <div v-if="list.length > 0" class="py-6 text-center flex flex-col items-center justify-center">
        <IconPokeball class="w-10 h-10 animate-spin mx-auto" />
      </div>
    </template>
  </div>
</template>