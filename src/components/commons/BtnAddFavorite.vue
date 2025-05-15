<script setup lang="ts">
import IconFavorite from '../icons/IconFavorite.vue';
import { usePokemonStore } from '../../store/usePokemonStore';

type Props = {
  name: string
}

const props = defineProps<Props>()

const store = usePokemonStore();

const toggleFavorite = (name: string) => {

  if (store.isFavoriteExists(name)) {
    store.removeFavorite(name);
    return
  } else {
    store.addFavorite(name);
  }
};
</script>

<template>
  <button 
    class="w-[44px] h-[44px] rounded-full border-none cursor-pointer bg-gray-200 flex items-center justify-center"
    @click="toggleFavorite(name)"
  >
    <IconFavorite :color="store.isFavoriteExists(name) ? '#FFD700' : '#BFBFBF'" />
  </button>
</template>