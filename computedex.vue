<template>
  <div class="hello">
    <!-- computed properties are properties which are usually generated based on reactive data which are cached and 
    only updated when their dependencies change. eg:   -->

    <div>
      <h3>{{counterData.title}} </h3>
      <button @click="decrement" class="btn">-</button>
      <span>{{counterData.count}}</span>
      <button @click="increment" class="btn">+</button>
      <p> this is {{oddeven}} </p>
    </div>
    <div>
      <h4> Edit title:</h4>
      <input type="text" v-model="counterData.title" />
    </div>
  </div>
</template>

<script setup>
import {reactive,computed} from 'vue'

const counterData = reactive({
    count: 10,
    title:'my reactive'
  })
  const increment = () =>{
    counterData.count++;
  }

  const decrement = () =>{
    counterData.count--;
  }
   

const oddeven = computed(() =>{
  if(counterData.count % 2 == 0) return 'even'
  return 'odd'
})
  // computed:{
  //   mycomputed(){
  //     return 'my result'
  //   }
  // }
</script>
