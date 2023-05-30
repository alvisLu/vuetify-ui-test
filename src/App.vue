<template>
  <template v-if="$route.name !== 'login'">
    <NavigationView />
  </template>
  <template v-else>
    <router-view></router-view>
  </template>
</template>

<script setup>
import NavigationView from './views/NavigationView.vue';
</script>

<style scoped></style>
