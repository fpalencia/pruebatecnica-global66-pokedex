<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import IconAll from '../icons/IconAll.vue';
import IconFavorite from '../icons/IconFavorite.vue';

const emit = defineEmits(['change-filter']);
const router = useRouter();
const route = useRoute();

const activeFilter = ref('all');

const updateActiveFilterFromRoute = () => {
  if (route.path.includes('/favorites')) {
    activeFilter.value = 'favorites';
  } else if (route.path.includes('/pokemons')) {
    activeFilter.value = 'all';
  }
};

const changeFilter = (filter: string) => {
  activeFilter.value = filter;
  emit('change-filter', filter);
  
  if (filter === 'favorites') {
    router.push('/favorites');
  } else if (filter === 'all') {
    router.push('/pokemons');
  }
};

onMounted(updateActiveFilterFromRoute);

watch(() => route.path, updateActiveFilterFromRoute);
</script>

<template>
  <div class="w-full flex gap-2 px-2 py-2 max-w-xl mx-auto">
    <button 
      @click="changeFilter('all')" 
      class="flex-1 py-2 flex justify-center items-center gap-2 rounded-full cursor-pointer"
      :class="activeFilter === 'all' ? 'bg-red-500 text-white' : 'bg-gray-300 text-white'"
    >
      <IconAll class="w-6 h-6" :color="activeFilter === 'all' ? 'white' : 'white'" />
      <span class="text-lg font-medium">All</span>
    </button>
    
    <button 
      @click="changeFilter('favorites')" 
      class="flex-1 py-2 flex justify-center items-center gap-2 rounded-full cursor-pointer"
      :class="activeFilter === 'favorites' ? 'bg-red-500 text-white' : 'bg-gray-300 text-white'"
    >
      <IconFavorite class="w-6 h-6" :color="activeFilter === 'favorites' ? 'white' : 'white'" />
      <span class="text-lg font-medium">Favorites</span>
    </button>
  </div>
</template>
