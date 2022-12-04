<template>
  <div class="hello">
    <!-- Watches allow us to essentially watch a reactive data property and then do something whenever it changes.   -->

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
import {reactive,computed, watch} from 'vue'

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
// watch eg
watch(() => counterData.count, (newCount) =>{
  if(newCount == 20){
    alert('way to go, u made it to 20')
  }
})
  
</script>
