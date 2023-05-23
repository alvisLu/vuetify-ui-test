<template>
  <div class="home">
    <v-container class="mb-6">
      <v-row align="start" no-gutters style="height: 150px">
        <v-col v-for="todo in todos" :key="todo.id">
          <v-card class="pa-2 ma-2" max-width="300" variant="outlined">
            <v-card-item>
              <div class="text-h6">{{ todo.content }}</div>
            </v-card-item>

            <v-card-actions>
              <v-btn variant="elevated" color="blue" icon="mdi-check"> </v-btn>
              <v-btn variant="elevated" color="red" icon="mdi-close"> </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const todos = ref([
  {
    id: '1',
    content: 'clearance room',
    isDone: false
  },

  {
    id: '2',
    content: 'washing the dishes',
    isDone: true
  }
])
</script>
