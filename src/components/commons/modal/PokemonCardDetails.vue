<script setup lang="ts">
import { ref, defineEmits, watchEffect } from 'vue';
import BtnAddFavorite from '../BtnAddFavorite.vue';
import { usePokemonCardDetails } from '../../../composables/usePokemonCardDetails';
interface Props {
  pokemon: string
}
const props = defineProps<Props>()

const { copied, copy, pokemon, capitalizeFirstLetter, isFetching } = usePokemonCardDetails(props.pokemon)

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

</script>

<template>
  <div class="fixed inset-0 bg-[#36415359] bg-opacity-70 flex items-center justify-center z-50" @click="closeModal">
    <div class="bg-white rounded-xl shadow-lg w-full max-w-md overflow-hidden" @click.stop>
      <!-- Header con botón de cierre -->
   
      <!-- Imagen del Pokémon con fondo de cielo y césped -->
      <div class="h-48 relative overflow-hidden">
        <!-- Imagen de fondo -->
        <button @click="$emit('close')" class="absolute top-2 right-2 z-20 h-8 w-8 rounded-full flex items-center justify-center bg-white text-gray-500 hover:bg-gray-100 shadow-md cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img
          src="../../../assets/images/background-image.webp"
          alt="background image"
          class="background-img absolute inset-0 w-full h-full object-cover"
        />
        
        <!-- Imagen del Pokémon -->
        <img :src="pokemon.frontSprite" 
             :alt="pokemon.name" 
             class="absolute inset-0 h-full w-full object-contain z-10">
      </div>
      
      <!-- Información del Pokémon -->
      <div class="p-4">
        <div class="py-2 border-b border-gray-200 flex items-center">
          <span class="text-gray-600 font-semibold w-20">Name:</span>
          <span class="text-gray-800">{{ pokemon.name }}</span>
        </div>
        
        <div class="py-2 border-b border-gray-200 flex items-center">
          <span class="text-gray-600 font-semibold w-20">Weight:</span>
          <span class="text-gray-800">{{ pokemon.weight }}</span>
        </div>
        
        <div class="py-2 border-b border-gray-200 flex items-center">
          <span class="text-gray-600 font-semibold w-20">Height:</span>
          <span class="text-gray-800">{{ pokemon.height }}</span>
        </div>
        
        <div class="py-2 border-b border-gray-200 flex items-center">
          <span class="text-gray-600 font-semibold w-20">Types:</span>
          <span class="text-gray-800">{{ pokemon.types?.join(', ') || 'No types available' }}</span>
        </div>
      </div>
      
      <!-- Acciones -->
      <div class="p-4 flex items-center justify-between">
        <button @click="copy()" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition-colors cursor-pointer">
          {{ copied ? 'Copied!' : 'Share to my friends' }}
        </button>
        <BtnAddFavorite :name="pokemon.name" />
      </div>
    </div>
  </div>
</template>

