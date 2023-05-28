<template>
  <div class="logout">
    <v-btn class="text-none" color="white" min-width="92" rounded variant="outlined" @click="logout"
      >logout</v-btn
    >
  </div>
</template>

<script setup>
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';
const logout = async () => {
  try {
    await signOut(auth);
  } catch (e) {
    throw new Error(e);
  }

  // TODO: 登出後轉跳到 login page
};
</script>

<style></style>
