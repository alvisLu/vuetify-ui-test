<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>My files</v-toolbar-title>
        <v-spacer></v-spacer>
        <Login />
        <Logout />
        <SignUp />
        <v-btn variant="text" icon="mdi-dots-vertical" @click="dots"></v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" temporary>
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
            :to="item.path"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh">
        <v-card-text>
          <RouterView />
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Login from '../components/Login.vue'
import Logout from '../components/Logout.vue'
import SignUp from '../components/SignUp.vue'

const drawer = ref(false)
const items = ref([
  {
    name: 'Home',
    path: '/',
    icon: 'mdi-home'
  },
  {
    name: 'About',
    path: '/about',
    icon: 'mdi-account-multiple'
  }
])

const dots = () => {
  console.log('我是 ...')
}
</script>
