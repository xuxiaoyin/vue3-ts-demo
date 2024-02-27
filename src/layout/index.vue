<template>
  <div class="xm-box">
    <div><Menu /></div>
    <div class="xm-box__right">
      <Header />
      <Content />
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from './Menu/index.vue'
import Content from './Content/index.vue'
import Header from './Header/index.vue'
</script>

<style scoped lang="scss">
@include b(box) {
  @include bfc;
  display: flex;
  @include e(right) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>