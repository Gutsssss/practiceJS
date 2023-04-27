<template>
  <div class="container">
    <formTodo/>
    <div class="tasks">
        <v-btn class="btn-tasks" @click="filter = 'tasks'">my Task</v-btn>
        <v-btn class="btn-tasks" @click="filter = 'complited'"
          >completed Tasks</v-btn
        >
      </div>
    <div class="todos" v-if="(filter === 'tasks')">
      <dl v-for="item in toDoStore.getUncoplitedTodo" :key="item.id">
        <dt>
          <oneTodo :item="item"/>
          <input type="checkbox" v-model="item.done">
        </dt>
      </dl>
    </div>
    <div class="todos" v-if="(filter === 'complited')">
      <dl v-for="item in toDoStore.getComplitedTodo" :key="item.id">
        <dt>
          <oneTodo :item="item"/>
          <input v-model="item.done" type="checkbox" />
        </dt>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { useToDoStore } from "@/stores/todoStore";
import { onMounted, ref } from "vue";
import oneTodo from "./oneTodo.vue";
import formTodo from "./formTodo.vue";
const toDoStore = useToDoStore();

const filter = ref("tasks");


onMounted(() => {
  toDoStore.fetchToDo();
});
</script>

<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.container {
  width: 100%;
}
.tasks {
  display: flex;
  justify-content: center;
}
.btn-tasks {
  margin: 10px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  color: teal;
}
.todos {
  margin: 0 auto;
  width: 50%;
}
dl {
  display: flex;
  flex-direction: column;
  border: 2px solid teal;
  border-radius: 5px;
  margin: 10px;
  position: relative;
  padding: 5px;
}
dt {
  color: teal;
  font-size: 40px;
  font-weight: 600;
}
dd {
  color: lightseagreen;
  font-weight: 600;
}
.btn {
  margin: 10px;
  /* width: 100px; */
  background-color: teal;
  color: white;
  height: 100px;
}

</style>
