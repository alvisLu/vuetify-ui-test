<template>
  <div class="home">
    <v-container class="mb-6">
      <v-row justify="space-around">
        <v-col>
          <v-text-field label="Label" v-model="content"></v-text-field>
        </v-col>
        <v-col>
          <v-btn class="ma-1" color="blue" size="x-large" @click="add"> add </v-btn>
          <v-btn class="ma-1" size="x-large" @click="reflash"> reflash </v-btn>
        </v-col>
      </v-row>

      <v-card class="mb-6 overflow-y-auto" height="600px">
        <v-list align="start" no-gutters>
          <v-list-item v-for="todo in todos" :key="todo.id">
            <v-card class="pa-2 ma-2">
              <v-card-item>
                <v-row justify="space-between">
                  <v-col class="align-self-center" cols="auto">
                    <div class="ma-1 text-h6 d-inline">
                      <v-icon v-show="todo.isDone" end color="orange" icon="mdi-check"></v-icon>
                    </div>
                    <div class="ma-1 text-h6 d-inline">
                      {{ todo.content }}
                    </div>
                  </v-col>
                  <v-col cols="2" justify="space-between">
                    <v-btn
                      class="ma-1"
                      size="small"
                      color="orange-darken-2"
                      icon="mdi-close"
                      @click="unDone"
                    />
                    <v-btn class="ma-1" size="small" color="green" icon="mdi-check" @click="done" />
                    <v-btn
                      class="ma-1"
                      size="small"
                      color="red"
                      icon="mdi-delete"
                      @click="remove"
                    />
                  </v-col>
                </v-row>
              </v-card-item>
            </v-card>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { db } from '@/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';

const todos = ref([]);
const content = ref('');
const todoDB = collection(db, 'todos');

/*
 * 到 firestore 取得所有的 todos 資料
 *
 * return [
 *  {
 *    content: 'do the right thing',
 *    isDone: true
 *  },
 *  {
 *    content: 'do thing right',
 *    isDone: true
 *  },
 *  ...
 * ]
 */
const getTodos = async () => {
  const snapshot = await getDocs(todoDB); // 取得 todos 的所有資料

  return snapshot.docs.map((doc) => {
    //console.log(doc);
    return doc.data();
  });
};

const reflash = async () => {
  try {
    const data = getTodos(); // getTodos() 會回傳 Promise<Data>
    console.log(data);
    todos.value = data;
  } catch (error) {
    throw new Error('reflash fail');
  }
};

onMounted(async () => {
  reflash();
});

/*
 * 新增資料到 todo DB
 */
const add = async () => {
  if (content.value.length > 0) {
    const newTodo = {
      content: content.value,
      isDone: false
    };
    await addDoc(todoDB, newTodo);
  }
  // 待實做: 新增完後更新 list
};

const unDone = async () => {
  // 待實做: isDone: true -> false
  console.log('unDone');
};

const done = async () => {
  // 待實做: isDone: false -> true
  console.log('done');
};

const remove = async () => {
  // 待實做: 刪除 todo
  console.log('remove');
};
</script>
