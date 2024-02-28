<template>
  <div>
    <A v-move:aaa.xiaom="{background: 'red'}" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, Directive, DirectiveBinding } from 'vue'
import A from '@/components/A.vue'

type TDir = {
  background: string
}

const vMove:Directive = {
  created() {
    console.log('========created')
  },
  beforeMount() {
    console.log('========beforeMount')
  },
  mounted(el:HTMLElement, dir:DirectiveBinding<TDir>) {
    console.log('========mounted')
    el.style.background = dir.value.background
    console.log(dir.value.background)
  },
  beforeUpdate() {
    console.log('========beforeUpdate')
  },
  updated() {
    console.log('========updated')
  },
  beforeUnmount() {
    console.log('========beforeUnmount')
  },
  unmounted() {
    console.log('========unmounted')
  }
}

</script>

<style scoped>

</style>