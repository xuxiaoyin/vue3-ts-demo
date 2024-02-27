<template>
  <div>子集</div>
  <div>值: {{ title }}</div>
  <div>值：{{ arr }}</div>
  <el-button type="primary" @click="send">给父组件传值</el-button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string,
  arr: number[]
}>(), {
  arr: () => [666]
})

const emit = defineEmits<{
  (e: 'on-click', name: string): void
}>()

const send = () => {
  emit('on-click', '小曼')
}

defineExpose({
  name: "小曼"
})
</script>

<style scoped>

</style>