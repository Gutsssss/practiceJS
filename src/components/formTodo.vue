<template>
  <div class="input">
    <v-text-field
      v-model="todo.title"
      label="New todo..."
      color="blue"
      theme="light"
    ></v-text-field>
    <v-text-field
      v-model="todo.someTodo[0].title"
      label="Edit some todo"
      color="blue"
      theme="light"
    ></v-text-field>
    <div class="btns">
      <v-btn @click="createTodo" class="btn"
        >New
        <v-icon end icon="mdi-checkbox-marked-circle"
          ><mdicon name="plus"></mdicon></v-icon
      ></v-btn>
    </div>
  </div>
</template>

<script setup>
import { reactive, defineEmits } from "vue";
const emit = defineEmits(["create"]);

let todo = reactive(
  {
  title: "",
  someTodo: [{
    title: '',
    done:false
  }],
  done:false
}
);

const createTodo = () => {
  todo.id = Date.now();
  emit('create',todo);
};
console.log(todo.someTodo[0].title)

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
