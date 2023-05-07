// import { defineStore } from "pinia";
// import axios from "axios";

// export const useToDoStore = defineStore("store", {
//   state: () => ({
//     todo: [],
//   }),
//   getters: {
//     getToDo(state) {
//       return state.todo;
//     },
//     getComplitedTodo(state) {
//       return state.todo.filter(t => t.done)
//     },
//     getUncoplitedTodo(state) {
//       return state.todo.filter(t => !t.done)
//     }
//   },
//   actions: {
//     async fetchToDo() {
//       try {
//         const data = await axios.get("http://localhost:3000/todo");
//         this.todo = data.data;
//       } catch (err) {
//         alert(err);
//       }
//     },
//     async newTodo(title,newSomeTodoOne,newSomeTodoTwo) {
//       try {
//         await axios
//           .post("http://localhost:3000/todo", {
//             title: title,
//             id: Date.now(),
//             someTodo: {
//               one:{
//                 title:newSomeTodoOne,
//                 somedone: false
//               } ,
//               two:{
//                 title: newSomeTodoTwo,
//                 somedone:false
//               } ,
//             },
//             done: false,
//           })
//           .then((response) => {
//             console.log(response);
//           });
//       } catch (err) {
//         console.log(err);
//       }
//     },
//     async deleteTodo(id) {
//         try {
//             await axios.delete("http://localhost:3000/todo/" + id).then(response => {
//                 console.log(response)
//             })
//         }catch(err) {
//             console.log(err)
//         }
//     }
//   },
  
// });

