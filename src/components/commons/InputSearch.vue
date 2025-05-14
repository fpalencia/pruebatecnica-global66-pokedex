<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref('');
</script>

<template>
  <div class="relative w-full max-w-xl mx-auto py-10">
    <div class="flex items-center bg-white rounded-md shadow-sm p-3">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-5 w-5 text-gray-400" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
        />
      </svg>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search"
        class="w-full px-3 py-1 outline-none text-gray-700"
      />
    </div>
  </div>
</template>