<template>
  <el-icon>
    <component :is="icon" />
  </el-icon>
</template>

<script setup lang="ts">
const { icon } = defineProps<{
  icon: any
}>()
</script>

<style scoped>

</style>