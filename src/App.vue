<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavigationView from './views/NavigationView.vue'
</script>

<template>
  <header>
    <NavigationView />
    <div class="router">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
