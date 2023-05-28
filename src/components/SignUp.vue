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

/*
 * sign up
 * 註冊使用者: createUserWithEmailAndPassword
 *   [創建基於密碼的帳戶](https://firebase.google.com/docs/auth/web/password-auth?hl=zh-tw#create_a_password-based_account)
 * 修改使用者: updateProfile
 *   更多設定使用者的參數可以參考 [管理使用者](https://firebase.google.com/docs/auth/web/manage-users?hl=zh-tw)
 */
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

    await updateProfile(user, {
      displayName: newUser.name
    });
  } catch (e) {
    throw new Error(e);
  }

  // TODO: 註冊完後轉跳到 home page
};
</script>

<style></style>
