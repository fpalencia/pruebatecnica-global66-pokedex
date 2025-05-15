<script setup lang="ts">
import { defineEmits, ref } from 'vue';
import BtnAddFavorite from '../BtnAddFavorite.vue';
import { usePokemonCardDetails } from '../../../composables/usePokemonCardDetails';
import IconPokeball from '../../icons/IconPokeball.vue';

type Props = {
  pokemon: string
}

const props = defineProps<Props>()
const isImageLoading = ref(true)

const { copied, copy, pokemon } = usePokemonCardDetails(props.pokemon)

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

const handleImageLoad = () => {
  isImageLoading.value = false
}
</script>

<template>
  <div class="fixed inset-0 bg-[#36415359] bg-opacity-70 flex items-center justify-center z-50" @click="closeModal">
    <div class="bg-white rounded-lg shadow-lg w-full max-w-xl overflow-hidden" @click.stop>

      <div class="h-56 relative overflow-hidden">
        <button @click="$emit('close')"
          class="absolute top-2 right-2 z-20 h-8 w-8 rounded-full flex items-center justify-center bg-white text-gray-500 hover:bg-gray-100 shadow-md cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img src="../../../assets/images/background-image.webp" alt="background image" class="background-img absolute inset-0 w-full h-full object-cover" />
        
        <!-- Loading spinner -->
        <div v-if="isImageLoading && pokemon" class="absolute inset-0 flex items-center justify-center z-10">
         <IconPokeball class="w-12 h-12 animate-spin" />
        </div>
        
        <img v-if="pokemon" 
             :src="pokemon.frontSprite ?? ''" 
             :alt="pokemon.name" 
             class="absolute inset-0 h-full w-full object-contain z-10"
             @load="handleImageLoad"
             :class="{ 'opacity-0': isImageLoading }">
      </div>

      <div class="p-5">
        <div class="py-2 border-b border-gray-200 flex items-center">
          <span class="text-gray-600 font-semibold w-20">Name:</span>
          <span class="text-gray-800">{{ pokemon?.name }}</span>
        </div>

        <div class="py-2 border-b border-gray-200 flex items-center">
          <span class="text-gray-600 font-semibold w-20">Weight:</span>
          <span class="text-gray-800">{{ pokemon?.weight }}</span>
        </div>

        <div class="py-2 border-b border-gray-200 flex items-center">
          <span class="text-gray-600 font-semibold w-20">Height:</span>
          <span class="text-gray-800">{{ pokemon?.height }}</span>
        </div>

        <div class="py-2 border-b border-gray-200 flex items-center">
          <span class="text-gray-600 font-semibold w-20">Types:</span>
          <span class="text-gray-800">{{ pokemon?.types?.join(', ') || 'No types available' }}</span>
        </div>
      </div>

      <div class="p-5 flex items-center justify-between">
        <button @click="copy()"
          class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition-colors cursor-pointer">
          {{ copied ? 'Copied!' : 'Share to my friends' }}
        </button>
        <BtnAddFavorite :name="pokemon?.name ?? ''" />
      </div>
    </div>
  </div>
</template>
