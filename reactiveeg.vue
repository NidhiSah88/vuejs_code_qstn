<template>
  <div class="hello">
    <div>
      <h3>{{counterData.title}} </h3>
      <button @click="decrement" class="btn">-</button>
      <span>{{counterData.count}}</span>
      <button @click="increment" class="btn">+</button>
    </div>
    <div>
      <h4> Edit title:</h4>
      <input type="text" v-model="counterData.title" />
    </div>
  </div>
</template>

<script setup>

  import { reactive} from 'vue'

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
   
</script>
