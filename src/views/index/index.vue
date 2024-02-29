<template>
  <div>
    <A v-move:aaa.xiaom="{background: 'red'}" />

    <el-button type="primary" v-has-show="'shop:edit'">创建</el-button>
    <el-button type="success" v-has-show="'shop:create'">编辑</el-button>
    <el-button type="danger" v-has-show="'shop:delete'">删除</el-button>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import type {Directive, DirectiveBinding} from 'vue'
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

const permission = [
  // 'shop:edit',
  'shop:create',
  'shop:delete',
]

const vHasShow:Directive<HTMLElement, string> = (el, bingding) => {
  console.log(el, bingding)
  if (!permission.includes(bingding.value)){
    el.style.display = 'none'
  }
}

const instance = getCurrentInstance()

instance?.proxy?.$myLoading.show()

setTimeout(() => {
  instance?.proxy?.$myLoading.hide()
}, 5000)

</script>

<style scoped>

</style>