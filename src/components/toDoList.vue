<template>
  <div class="container">
    <div class="input">
      <v-text-field
        v-model="addState.newTodo"
        label="New todo..."
        color="blue"
        theme="light"
      ></v-text-field>
      <v-text-field
        v-model="addState.newSomeTodoOne"
        label="Edit some todo"
        color="blue"
        theme="light"
      ></v-text-field>
      <v-text-field
        v-model="addState.newSomeTodoTwo"
        label="Edit some todo"
        color="blue"
        theme="light"
      ></v-text-field>
      <div class="btns">
        <v-btn class="btn" @click="addToDo">New <v-icon end icon="mdi-checkbox-marked-circle"
            ><mdicon name="plus"></mdicon></v-icon
        ></v-btn>
      </div>
      <div class="tasks">
        <v-btn class="btn-tasks" @click="filter = 'tasks'">my Task</v-btn>
        <v-btn class="btn-tasks" @click="filter = 'complited'"
          >completed Tasks</v-btn
        >
      </div>
    </div>
    <div class="todos" v-if="filter === 'tasks'">
      <dl v-for="item in getToDo" :key="item.id">
        <dt>
          {{ item.title }}
        </dt>
        <dd v-for="(value, index) in item.someTodo" :key="index">
          {{ value.someTitle }}
          <input v-model="value.somedone" type="checkbox" />
        </dd>
        <input v-model="item.done" type="checkbox" />
        <v-btn @click="editCurrentItem(item)" class="btn"
          >Edit
          <v-icon end icon="mdi-checkbox-marked-circle"
            ><mdicon name="pencil"></mdicon></v-icon
        ></v-btn>
        <v-btn class="ma-2" @click="deleteTodos(item.id)"
          >Delete<v-icon end icon="mdi-checkbox-marked-circle"
            ><mdicon name="delete"></mdicon></v-icon
        ></v-btn>
      </dl>
    </div>
    <div class="todos" v-if="filter === 'complited'">
      <dl v-for="item in toDoStore.getComplitedTodo" :key="item.id">
        <dt>
          {{ item.title }}
        </dt>
        <dd v-for="(value, index) in item.someTodo" :key="index">
          {{ value.someTitle }}
          <input v-model="value.somedone" type="checkbox" />
        </dd>
        <input v-model="item.done" type="checkbox" />
        <v-btn @click="editCurrentItem(item)" class="btn"
          >Edit
          <v-icon end icon="mdi-checkbox-marked-circle"
            ><mdicon name="pencil"></mdicon></v-icon
        ></v-btn>
        <v-btn class="btn" @click="deleteTodos(item.id)"
          >Delete<v-icon end icon="mdi-checkbox-marked-circle"
            ><mdicon name="delete"></mdicon></v-icon
        ></v-btn>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { useToDoStore } from "@/stores/todoStore";
import { computed, onMounted, ref } from "vue";

const toDoStore = useToDoStore();

const addState = ref({
  newTodo: "",
  newSomeTodoOne: "",
  newSomeTodoTwo: "",
});
const filter = ref("tasks");

const getToDo = computed(() => {
  return toDoStore.todo;
});

const addToDo = () =>
  toDoStore.newTodo(
    addState.value.newTodo,
    addState.value.newSomeTodoOne,
    addState.value.newSomeTodoTwo
  );
const deleteTodos = (item) => toDoStore.deleteTodo(item);
onMounted(() => {
  toDoStore.fetchToDo();
});

const editCurrentItem = (item) => {
  (addState.value.newTodo = item.title),
    (addState.value.newSomeTodoOne = item.someTodo.one.someTitle),
    (addState.value.newSomeTodoTwo = item.someTodo.two.someTitle);
  console.log(item);
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
.input {
  display: flex;
  margin: 10px;
  width: 100%;
  flex-direction: column;
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
.btns {
  display: flex;
  flex-direction: column;
}
</style>
