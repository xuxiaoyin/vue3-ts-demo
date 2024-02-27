<template>
  <div class="content">
    <el-button type="primary" @click="flag = !flag">switch</el-button>
    <transition
     :duration="500"
     leave-active-class="animate__animated animate__fadeOut"
      enter-active-class="animate__animated animate__fadeIn">
      <div v-if="flag" class="box"></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import 'animate.css'

const flag = ref<boolean>(true)
</script>

<style scoped lang="scss">
.content {
  .box {
    width: 200px;
    height: 300px;
    border: 1px solid #ddd;
    background: red;
  }
}
</style>