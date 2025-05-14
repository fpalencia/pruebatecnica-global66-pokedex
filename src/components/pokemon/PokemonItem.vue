<script setup lang="ts">
import BtnAddFavorite from '../commons/BtnAddFavorite.vue';

interface Props {
  pokemon: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex justify-between items-center p-2 bg-white rounded-md shadow-sm w-full max-w-xl">
    <span class="cursor-pointer text-[22px] pl-[10px] font-normal capitalize">{{ pokemon }}</span>
    <BtnAddFavorite />
  </div>
</template>
