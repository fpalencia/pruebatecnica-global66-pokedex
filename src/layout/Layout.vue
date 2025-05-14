<script setup lang="ts">
import { ref, onMounted } from 'vue';
import IconPokeball from '../components/icons/IconPokeball.vue';
import InputSearch from '../components/commons/InputSearch.vue';
import BtnFooter from '../components/commons/BtnFooter.vue';

const isLoading = ref(true);
const activeFilter = ref('all');

const handleFilterChange = (filter: string) => {
  activeFilter.value = filter;
  console.log('Filtro cambiado a:', filter);
};
</script>
<template>
  <div class="flex flex-col">
    <header class="w-full sticky top-0">
      <div class="container mx-auto px-4">
        <InputSearch />
      </div>
    </header>
      <div>
        <RouterView />
      </div>
    <footer class="fixed bottom-0 w-full bg-white z-10 py-4 shadow-lg">
      <div class="container mx-auto px-4">
        <BtnFooter @change-filter="handleFilterChange" />
      </div>
    </footer>
  </div>
</template>
