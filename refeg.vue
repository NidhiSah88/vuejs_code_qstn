<template>
  <div class="hello">
    <div>
      <h3>{{counterTitle}} </h3>
      
    </div>
    <div>
      <h4> Edit title:</h4>
      <input type="text" v-model="counterTitle" />
    </div>
  </div>
</template>

<script setup>

  import {ref} from 'vue'

const counterTitle = ref('My counter')

   

</script>
