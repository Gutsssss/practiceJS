<template>
  <dl>
    <dt>
      {{ item.title }}
    </dt>
    <span v-if="!parentItem" class="line"></span>
    <dd>
      <oneTodo
      v-for="(child, subIndex) in item.someTodo" 
            v-bind:item="child"
            :index="subIndex"
            :key="child.id"
            :parentItem="item"
      />
    </dd>
  </dl>
  <input v-if="!parentItem" v-model="done" :id="item.id" :value="props.done" @input="changeCheckbox" type="checkbox">
  <v-btn v-if="!parentItem" class="ma-2" @click="deleteTask"
    >Delete<v-icon end icon="mdi-checkbox-marked-circle"
      ><mdicon name="delete"></mdicon></v-icon
  ></v-btn>
</template>


<script setup>

import { defineProps,defineEmits,ref } from "vue";

const done = ref([])
const props = defineProps({
  item: Object,
  index:{
    required:true
  },
  parentItem: {
    required: false,
  },
  done:{
    type:Boolean
  }
});
const emit = defineEmits(['deleteTask','checkedTask'])
const deleteTask = () => {
  emit('deleteTask', props.index)
}
const changeCheckbox = () => {
  emit('checkedTask',props.item)
}

</script>

<style scoped>
dl {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin: 10px;
  position: relative;
  padding: 5px;
  border: 2px solid teal;
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
.line {
  border-top: 2px solid  teal;
}
</style>
