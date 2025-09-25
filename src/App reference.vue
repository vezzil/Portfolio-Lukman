<script setup>

import { ref } from 'vue';
  const name = ref('Lukman');
  const status = ref('active');
  const tasks = ref([]);
  const newTask = ref('');

  const toggleStatus = () => {
    if (status.value === 'active') {
      status.value = 'pending'
    } else if (status.value === 'pending') {
      status.value = 'inactive'
    } else {
      status.value = 'active'
    }
  }

  const addTask = () => {
    if (newTask.value.trim() !== '') {
      tasks.value.push(newTask.value);
      newTask.value = '';
    }
  }

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
}


onMounted (async () => {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.log(error);
  }
})

</script>

<template>
  <h1>Hello teststs {{ name }}</h1>
  <p v-if="status === 'active'">You are logged in</p>
  <p v-else-if="status === 'inactive'">user is pending</p>
  <p v-else>You are not logged in</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" v-model="newTask">
    <button type="submit">Add</button>
  </form>

  <h3>Task:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">Delete</button>
    </li>
  </ul>

  <br></br>

  <button @click="toggleStatus">Click</button>
</template>

<style scoped></style>
