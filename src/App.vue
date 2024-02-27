<script setup lang="ts">
</script>

<template>
  <!-- <div class="xm-test">测试
    <div class="xm-test__inner">内部</div>
    <div class="xm-test--sucess">成功</div>
  </div> -->
  <router-view></router-view>
</template>

<style lang="scss">
// @include b(test) {
//   color: red;
//   @include e(inner) {
//     color: blue;
//   }
//   @include m(sucess) {
//     color: green;
//   }
// }
#app {
  @include bfc;
}
</style>
