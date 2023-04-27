<template>
    <dl>
  <dt>
    {{ item.title }}
  </dt>
  <dd v-for="(value, index) in item.someTodo" :key="index">
    {{ value.someTitle }}
    <input type="checkbox" v-model="value.somedone" />
  </dd>
</dl>
  <v-btn @click="editCurrentItem(item)" class="btn"
    >Edit
    <v-icon end icon="mdi-checkbox-marked-circle"
      ><mdicon name="pencil"></mdicon></v-icon
  ></v-btn>
  <v-btn class="ma-2" @click="deleteTodos(item.id)"
    >Delete<v-icon end icon="mdi-checkbox-marked-circle"
      ><mdicon name="delete"></mdicon></v-icon
  ></v-btn>
</template>

<script>
import { useToDoStore } from "@/stores/todoStore";
import { ref } from "vue";
export default {
  data() {
    return { toDoStore: useToDoStore(),
        addState : ref({
  newTodo: "",
  newSomeTodoOne: "",
  newSomeTodoTwo: "",
})
    };
  },
  props: {
    item: {
      type: Object,
    },
    someTodo: {
      type: Object,
    },
  },
  methods: {
    deleteTodos(item) {
      this.toDoStore.deleteTodo(item);
    },
    editCurrentItem(item) {
      (this.addState.value.newTodo = item.title),
        (this.addState.value.newSomeTodoOne = item.someTodo.one.someTitle),
        (this.addState.value.newSomeTodoTwo = item.someTodo.two.someTitle);
      console.log(item);
    },
  },
};
</script>

<style scoped>
dl {
  display: flex;
  flex-direction: column;
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
  font-size: 20px;
}
</style>
