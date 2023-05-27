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

const login = () => {
  const user = {
    email: 'test@gmail.com',
    password: '123456'
  };

  signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
  // TODO: redirect to home pag
};
</script>

<style></style>
