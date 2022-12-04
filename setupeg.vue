<template>
  <div class="hello">
    <div>
      <button @click="decrement" class="btn">-</button>
      <span>{{counter}}</span>
      <button @click="increment" class="btn">+</button>
    </div>
  </div>
</template>

<script setup>

  import {ref} from 'vue'
const counter = ref(0)

      const increment = () =>{
        counter.value++;
      }

      const decrement = () =>{
        counter.value--;
      }

// export default {
//   name: 'HelloWorld',
//   setup(){
//     const counter = ref(0)

//       const increment = () =>{
//         counter.value++;
//       }

//       const decrement = () =>{
//         counter.value--;
//       }
//       return{
//         counter,
//         increment,
//         decrement
//       }

    
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
