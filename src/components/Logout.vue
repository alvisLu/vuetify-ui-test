<template>
  <div class="logout">
    <v-btn class="text-none" color="white" min-width="92" rounded variant="outlined" @click="logout"
      >logout</v-btn
    >
  </div>
</template>

<script setup>
// firebase auth

const logout = () => {
  console.log('logout!');
  // TODO: redirect to login pag
};
</script>

<style></style>
