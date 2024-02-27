<template>
  <div>
    <el-button type="primary">测试</el-button>
    <ComponentDemo ref="comRef" :title="name" :arr="[1, 2, 3]" @on-click="childClick" />
    <TreeVue :data="data" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import axios from '../../http/http'
import ComponentDemo from '@/components/ComponentDemo.vue'
import TreeVue from '@/components/Tree.vue'

// 类型定义
interface ITableData {
  date: string;
  title: string;
  user: string;
  id: number;
  check: boolean;
}

const tableData = ref<ITableData[]>([]); // 初始化

onMounted(async () => {
  // let {data} = await axios.request<{data:ITableData[]}>('get', '/data/query')
  // tableData.value = data
  // console.log(tableData.value)

   console.log(comRef.value.name)
})

const name = '父级'

const childClick = (val: string) => {
  console.log('父组件---' + val)
}

const comRef = ref<InstanceType<typeof ComponentDemo>>()


interface ITree {
  name: string;
  checked: boolean;
  children?: ITree[]
}

const data = reactive<ITree[]>([
  {
    name: '1',
    checked: false,
    children: [
      {
        name: '1-1',
        checked: false,
      }
    ]
  },
  {
    name: '2',
    checked: false,
    children: []
  },
  {
    name: '3',
    checked: false,
    children: [
      {
        name: '3-1',
        checked: false,
        children: [{
          name: '3-1-1',
          checked: false,
          children: [{
            name: '3-1-1-1',
            checked: false,
          }]
        }]
      }
    ]
  },
  {
    name: '4',
    checked: false,
    children: []
  }
])

</script>

<style scoped>

</style>