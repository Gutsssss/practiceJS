<template>
  <div class="container">
    <formTodo @create="createTodo"/>
    <div class="tasks">
      <v-btn class="btn-tasks" @click="filter = 'tasks'">my Task</v-btn>
      <v-btn class="btn-tasks" @click="filter = 'complited'"
        >completed Tasks</v-btn
      >
    </div>
    <div class="todos" v-if="filter === 'tasks'">
      <dl>
        <dt>
          <oneTodo
            :item="item"
            :index="index"
            v-for="(item, index) in items"
            :key="item.id"
            @deleteTask="deleteTask(index)"
            @checkedTask="checkedTask"
          />
        </dt>
      </dl>
    </div>
    <div class="todos" v-if="filter === 'complited'">
      <dl>
        <dt>
          <oneTodo
            :item="item"
            :index="index"
            v-for="(item, index) in filtered()"
            :key="item.id"
            @deleteTask="deleteTask(index)"
            @checkedTask="checkedTask"
          />
        </dt>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import oneTodo from "./oneTodo.vue";
import formTodo from "./formTodo.vue";

let items = ref([
  {
    id: 3,
    title: "breakfast",
    someTodo: [
      {
        id: 51,
        title: "go bathroom",
        done: false,
      },
      { id: 51, title: "fuckin", done: false },
    ],
    done: false,
  },
  {
    id: 4,
    title: "qwe",
    someTodo: [
      {
        id: 51,
        title: "ebat",
        done: false,
      },
      { id: 51, title: "sosi", done: false },
    ],
    done: true,
  }
]);


const filter = ref("tasks");

const filtered = () => {
  return items.value.filter(item => item.done === true)
};

// const uncheckedTask = () => {
//   return items.value.filter(item => item.done === false)
// };

const createTodo = (todo) => {
  items.value.push(todo)
  console.log(todo)
}
const checkedTask = (item) => {
  console.log(item)
}
const deleteTask = (index) => {
  items.value.splice(index, 1);
};
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
  border-radius: 5px;
  margin: 10px;
  position: relative;
  padding: 5px;
}
</style>
