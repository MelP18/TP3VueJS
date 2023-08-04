<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from '@/components/Header.vue';

</script>

<template>
  <Header class="header"/>
  
  <RouterView />
</template>


<style>
.header{
    box-shadow: 0 0 5px rgb(186, 182, 182);
}
</style>




