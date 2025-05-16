<script setup lang="ts">
import IconFavorite from '../../assets/icons/IconFavorite.vue';
import { usePokemonStore } from '../../store/usePokemonStore';

type Props = {
  name: string
}

const { name } = defineProps<Props>()

const { isFavorite, addFavorite, removeFavorite } = usePokemonStore();

const handleToggleFavorite = (name: string) => {
  if (isFavorite(name)) {
    removeFavorite(name);
    return
  } else {
    addFavorite(name);
  }
};
</script>

<template>
  <button 
    class="w-[44px] h-[44px] rounded-full border-none cursor-pointer bg-gray-light flex items-center justify-center"
    @click="handleToggleFavorite(name)"
  >
    <IconFavorite :color="isFavorite(name) ? '#ECA539' : '#BFBFBF'" />
  </button>
</template>