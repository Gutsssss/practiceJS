<template>
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
    </div>
</template>

<script setup>
import { useToDoStore } from '@/stores/todoStore';
import { ref } from 'vue';

const toDoStore = useToDoStore()

const addState = ref({
  newTodo: "",
  newSomeTodoOne: "",
  newSomeTodoTwo: "",
});
    const addToDo = () =>
  toDoStore.newTodo(
    addState.value.newTodo,
    addState.value.newSomeTodoOne,
    addState.value.newSomeTodoTwo
  );
</script>

<style scoped>
.input {
  display: flex;
  margin: 10px;
  width: 100%;
  flex-direction: column;
}
.btns {
  display: flex;
  flex-direction: column;
}
.btn {
  margin: 10px;
  /* width: 100px; */
  background-color: teal;
  color: white;
  height: 100px;
}
</style>