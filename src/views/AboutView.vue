<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-btn color="indigo" @click="sayHi">say Hi!</v-btn>
  </div>
</template>

<script setup>
const sayHi = () => {
  console.log('Hi!')
}
</script>

<style></style>
