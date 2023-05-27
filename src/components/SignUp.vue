<template>
  <div class="singUp">
    <v-btn class="text-none" color="white" min-width="92" rounded variant="outlined" @click="singUp"
      >singUp</v-btn
    >
  </div>
</template>

<script setup>
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
const singUp = async () => {
  const newUser = {
    name: 'test_1',
    email: 'test_1@gmail.com',
    password: '123456'
  };

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      newUser.email,
      newUser.password
    );

    const user = userCredential.user;
    console.log(user);

    await updateProfile({
      displayName: newUser.name
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style></style>
