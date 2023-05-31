<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-8 pt-12 pb-12 pl-6 pr-6">
        <v-card-title
          @click="isLogin ? login() : register()"
          class="font-weight-black justify-center"
          align="center"
        ></v-card-title>
        {{ isLogin ? '登入' : '註冊' }}
        <v-card-subtitle class="font-weight-black text-center mt-0"></v-card-subtitle>
        <v-form ref="form">
          <v-card-text>
            <v-text-field
              v-if="!isLogin"
              label="輸入您的名字"
              type="text"
              class="font-weight-bold"
              variant="outlined"
              clearable
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field
              label="輸入您的帳號"
              type="text"
              class="font-weight-bold"
              variant="outlined"
              clearable
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field
              label="輸入您的密碼"
              type="text"
              class="font-weight-bold"
              variant="outlined"
              clearable
              :rules="rules.pswdRules"
              :counter="rules.pswdLength"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="isLogin = !isLogin" class="mr-2">{{
              isLogin ? '還沒有帳號嗎？立即註冊' : '已經有帳號？立即登入'
            }}</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="black" class="mr-2" variant="outlined">{{
              isLogin ? '登入' : '註冊'
            }}</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue';
const isLogin = ref(true);

const rules = {
  pswdLength: 20,
  pswdRules: [(v) => !!v || '請輸入密碼', (v) => (v && v.length <= this.pswdLength) || '最多20個字']
};
</script>

<style></style>
