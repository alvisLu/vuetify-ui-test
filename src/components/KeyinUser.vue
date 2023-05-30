<template>
  <v-form ref="form">
    <v-card-text v-model="myAccountId">
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
        :rules="pswdNumberRules"
        :counter="pswdNumberLength"
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="black" class="mr-2" variant="outlined">登入</v-btn>
    </v-card-actions>
  </v-form>
</template>
<script>
export default {
  name: 'KeyinUser',
  props: ['accountId'],
  data() {
    return {
      pswdNumberLength: 20,
      pswdNumberRules: [
        (v) => !!v || '請輸入密碼',
        (v) => (v && v.length <= this.pswdNumberLength) || '最多20個字'
      ]
    };
  },
  computed: {
    myAccountId: {
      get() {
        return this.accountId;
      },
      set(value) {
        this.$emit('update:accountId', value);
      }
    }
  }
};
</script>
