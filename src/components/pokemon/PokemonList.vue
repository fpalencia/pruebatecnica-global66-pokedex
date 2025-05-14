<script setup lang="ts">
import PokemonItem from './PokemonItem.vue';

interface Props {
  pokemons: string[]
}

const props = defineProps<Props>()

</script>

<template>
  <div class="flex flex-col items-center gap-2.5 w-full">
    <PokemonItem v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>