<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-8 pt-12 pb-12 pl-6 pr-6">
        <v-card-title
          v-text="card.cardTitle"
          class="font-weight-black justify-center"
          align="center"
        ></v-card-title>
        <v-card-subtitle
          v-text="card.cardSubTitle"
          class="font-weight-black text-center mt-0"
        ></v-card-subtitle>
        <v-form ref="form">
          <v-card-text>
            <v-text-field
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
              :rule="rules.pswdRules"
              :counter="rules.pswdLength"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="black" class="mr-2" variant="outlined">註冊</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const card = {
  cardTitle: '登入',
  cardSubTitle: '使用您 Firebase 帳戶'
};

const user = {
  username: '',
  accountId: '',
  password: ''
};
const rules = {
  pswdLength: 20,
  pswdRules: [(v) => !!v || '請輸入密碼', (v) => (v && v.length <= this.pswdLength) || '最多20個字']
};
</script>

<style></style>
