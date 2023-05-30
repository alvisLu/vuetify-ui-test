<template>
  <v-form ref="form">
    <v-card-text v-model="myAccountId">
      <v-text-field
        label="輸入您的帳號"
        type="text"
        class="font-weight-bold"
        variant="outlined"
        clearable
        :rules="usernameRules"
        :counter="usernameLength"
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="black" class="mr-2" variant="outlined">繼續</v-btn>
    </v-card-actions>
  </v-form>
</template>
<script>
export default {
  name: 'KeyinUser',
  props: ['accountId'],
  data() {
    return {
      usernameLength: 15,
      usernameRules: [
        (v) => !!v || '請輸入帳號',
        (v) => (v && v.length <= this.usernameLength) || '最多15個字'
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
