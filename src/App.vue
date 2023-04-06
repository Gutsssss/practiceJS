<template>
  <div>
  </div>
</template>

<script setup>
const obj1 = {
value: 1,
name:"Misha",
surname:"Letov",
age:21
}
const clone = {}

for (let key in obj1) {
clone[key] = obj1[key]

}
console.log(obj1)
console.log(clone)
</script>
