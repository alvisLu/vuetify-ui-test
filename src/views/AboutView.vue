<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-btn color="indigo" @click="sayHi">say Hi!</v-btn>

    <v-btn
      @click="cancel"
      class="text-none"
      color="medium-emphasis"
      min-width="92"
      rounded
      variant="outlined"
      >cancel</v-btn
    >
  </div>
</template>

<script setup>
const sayHi = () => {
  console.log('Hi!')
}

const cancel = () => {
  console.log('cancel!')
}
</script>

<style></style>
