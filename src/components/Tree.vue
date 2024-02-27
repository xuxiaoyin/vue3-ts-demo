<template>
  <div class="tree" v-for="item in data">
    <input type="checkbox" v-model="item.checked"  /> <span>{{ item.name }}</span>
    <Tree v-if="item.children && item.children.length" :data="item?.children" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface ITree {
  name: string;
  checked: boolean;
  children?: ITree[]
}

defineOptions({
  name: 'Tree'
})

defineProps<{
  data?: ITree[]
}>()

</script>

<style scoped lang="scss">
.tree {
  margin-left: 10px;
}
</style>