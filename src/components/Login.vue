<template>
  <div class="login">
    <v-btn class="text-none" color="white" min-width="92" rounded variant="outlined" @click="login"
      >login</v-btn
    >
  </div>
</template>

<script setup>
import { auth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const login = async () => {
  const login = {
    email: 'test@gmail.com',
    password: '123456'
  };

  try {
    const userCredential = await signInWithEmailAndPassword(auth, login.email, login.password);
    const user = userCredential.user;
    console.log(user);
  } catch (e) {
    throw new Error(e);
  }

  // TODO: 登入完後轉跳到 home page
};
</script>

<style></style>
